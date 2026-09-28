import type { DownloadUtility } from '@evtp/type/site/download/DownloadUtility';

export const DOWNLOAD_UTILITY: readonly DownloadUtility[] = [
  { id: 'directx', href: 'https://support.microsoft.com/help/179113', required: true },
  { id: 'nvidia', href: 'https://www.nvidia.com/Download/index.aspx', required: true },
  { id: 'webview2', href: 'https://developer.microsoft.com/microsoft-edge/webview2/consumer/', required: true },
  { id: 'vcredist', href: 'https://aka.ms/vc14/vc_redist.x64.exe', required: false },
];
