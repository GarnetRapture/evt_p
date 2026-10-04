import type { DownloadRelease } from '@evtp/type/site/download/DownloadRelease';

export interface DownloadCatalog {
  source: { owner: string; repo: string };
  releases: readonly DownloadRelease[];
}
