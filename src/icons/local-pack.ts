const files = import.meta.glob<string>('/src/icons/**/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
});

export default function createLocalIconPack(pack: string) {
  return async (name: string): Promise<string> => {
    const svg = files[`/src/icons/${pack}/${name}.svg`];

    if (!svg) {
      throw new Error(`[astro-icon] Missing local icon "${pack}:${name}"`);
    }

    return svg;
  };
}
