import type { DownloadCatalog } from '@evtp/type/site/download/DownloadCatalog';
import type { DownloadRelease } from '@evtp/type/site/download/DownloadRelease';

export function resolveReleaseAssetUrl(catalog: DownloadCatalog, release: DownloadRelease): string {
  const { owner, repo } = catalog.source;
  return `https://github.com/${owner}/${repo}/releases/download/${release.version}/${release.archive.name}`;
}
