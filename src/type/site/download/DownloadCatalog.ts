import type { DownloadRelease } from '@evtp/type/site/download/DownloadRelease';

export interface DownloadCatalog {
  version: string;
  source: { owner: string; repo: string; asset: string };
  releases: readonly DownloadRelease[];
}
