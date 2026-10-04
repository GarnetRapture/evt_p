import type { PlatformDownloadId } from '@evtp/type/site/download/PlatformDownload';

export interface DownloadReleasePatch {
  files: number;
  bytes: number;
}

export interface DownloadReleaseArchive {
  platform: PlatformDownloadId;
  name: string;
  bytes: number;
  sha256: string;
  patch: DownloadReleasePatch;
}

export interface DownloadRelease {
  version: string;
  archives: readonly DownloadReleaseArchive[];
}
