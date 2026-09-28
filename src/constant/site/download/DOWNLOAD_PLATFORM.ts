import type { PlatformDownload } from '@evtp/type/site/download/PlatformDownload';

export const DOWNLOAD_PLATFORM: readonly PlatformDownload[] = [
  { id: 'windows', supported: true },
  { id: 'linux', supported: false },
  { id: 'macos', supported: false },
];
