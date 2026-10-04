import type { DownloadCatalog } from '@evtp/type/site/download/DownloadCatalog';
import type { DownloadRelease, DownloadReleaseArchive } from '@evtp/type/site/download/DownloadRelease';

export function resolveReleaseAssetUrl(
  catalog: DownloadCatalog, release: DownloadRelease, archive: DownloadReleaseArchive,
): string {
  const { owner, repo } = catalog.source;
  return `https://github.com/${owner}/${repo}/releases/download/${release.version}/${archive.name}`;
}
