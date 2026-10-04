import type { PlatformDownload } from '@evtp/type/site/download/PlatformDownload';

export const DOWNLOAD_PLATFORM: readonly PlatformDownload[] = [
  { id: 'windows', statusWithoutArchive: 'preparing', portProgress: false },
  { id: 'linux', statusWithoutArchive: 'preparing', portProgress: true },
  { id: 'macos', statusWithoutArchive: 'unsupported', portProgress: false },
];
