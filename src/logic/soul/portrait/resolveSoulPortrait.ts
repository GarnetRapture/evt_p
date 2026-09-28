import type { SoulPortraitSource } from '@evtp/type/soul/portrait/SoulPortraitSource';

const PORTRAIT_URL_BY_FILE: Readonly<Record<string, string>> = Object.fromEntries(
  Object.entries(
    import.meta.glob<string>('../../../asset/soul/portrait/*.webp', { eager: true, query: '?url', import: 'default' }),
  ).map(([path, url]) => [path.slice(path.lastIndexOf('/') + 1), url]),
);

export function resolveSoulPortrait(key: string): SoulPortraitSource {
  const small = PORTRAIT_URL_BY_FILE[`${key}_256.webp`];
  const large = PORTRAIT_URL_BY_FILE[`${key}_512.webp`];
  if (small === undefined || large === undefined) throw new Error(`Soul portrait asset is missing for ${key}`);
  return { small, large };
}
