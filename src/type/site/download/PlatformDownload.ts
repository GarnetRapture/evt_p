export type PlatformDownloadId = 'windows' | 'linux' | 'macos';

export type PlatformDownloadStatus = 'available' | 'preparing' | 'unsupported';

export interface PlatformDownload {
  id: PlatformDownloadId;
  statusWithoutArchive: Exclude<PlatformDownloadStatus, 'available'>;
  portProgress: boolean;
}
