import { createServer } from 'node:http';
import { randomUUID } from 'node:crypto';
import { existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { extname, join, resolve, sep } from 'node:path';
import { Readable } from 'node:stream';

const root = process.cwd();
const distDir = resolve(root, 'dist');
const ssrEntry = resolve(root, '.netlify/v1/functions/ssr/ssr.mjs');

if (!existsSync(ssrEntry)) {
  console.error('No SSR build found. Run `npm run build` before `npm run preview`.');
  process.exit(1);
}

const { default: ssrHandler } = await import(ssrEntry);

const args = process.argv.slice(2);
const portArgIndex = args.indexOf('--port');
const hostArgIndex = args.indexOf('--host');
const port = Number(portArgIndex >= 0 ? args[portArgIndex + 1] : process.env.PORT ?? 4321);
const host = hostArgIndex >= 0 ? args[hostArgIndex + 1] : process.env.HOST ?? 'localhost';

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
};

async function findStaticFile(pathname) {
  let requested;

  try {
    requested = resolve(distDir, `.${decodeURIComponent(pathname)}`);
  } catch {
    return null;
  }

  if (requested !== distDir && !requested.startsWith(distDir + sep)) {
    return null;
  }

  const asFile = await stat(requested).catch(() => null);
  if (asFile?.isFile()) return requested;

  const asDirectoryIndex = join(requested, 'index.html');
  const asDirectory = await stat(asDirectoryIndex).catch(() => null);
  if (asDirectory?.isFile()) return asDirectoryIndex;

  return null;
}

function toNodeHeaders(headers) {
  const result = {};

  for (const [key, value] of headers) {
    if (key.toLowerCase() === 'set-cookie' && headers.getSetCookie) {
      result[key] = headers.getSetCookie();
    } else {
      result[key] = value;
    }
  }

  return result;
}

async function toRequest(req, origin) {
  const headers = {};
  for (const [key, value] of Object.entries(req.headers)) {
    if (value === undefined) continue;
    headers[key] = Array.isArray(value) ? value.join(', ') : value;
  }

  const init = { method: req.method, headers };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    init.body = Buffer.concat(chunks);
  }

  return new Request(new URL(req.url ?? '/', origin), init);
}

const server = createServer(async (req, res) => {
  try {
    const origin = `http://${host}:${port}`;
    const url = new URL(req.url ?? '/', origin);
    const staticFile = await findStaticFile(url.pathname);

    if (staticFile) {
      res.writeHead(200, {
        'Content-Type': contentTypes[extname(staticFile).toLowerCase()] ?? 'application/octet-stream',
      });
      if (req.method === 'HEAD') {
        res.end();
      } else {
        createReadStream(staticFile).pipe(res);
      }
      return;
    }

    const response = await ssrHandler(await toRequest(req, origin), {
      ip: req.socket.remoteAddress ?? '127.0.0.1',
      site: { id: 'preview', name: 'preview', url: origin },
      requestId: randomUUID(),
      log: console.log,
      json: (input) => Response.json(input),
    });

    res.writeHead(response.status, toNodeHeaders(response.headers));
    if (req.method === 'HEAD' || !response.body) {
      res.end();
    } else {
      Readable.fromWeb(response.body).pipe(res);
    }
  } catch (error) {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Internal Server Error');
  }
});

server.listen(port, host, () => {
  console.log(`  ➜  Local:   http://${host}:${port}/`);
});
