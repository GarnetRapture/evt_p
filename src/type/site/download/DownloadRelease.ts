export interface DownloadReleaseNotes {
  ko: readonly string[];
  en: readonly string[];
}

export interface DownloadReleasePatch {
  files: number;
  bytes: number;
}

export interface DownloadReleaseArchive {
  name: string;
  bytes: number;
  sha256: string;
}

export interface DownloadRelease {
  version: string;
  date: string;
  notes: DownloadReleaseNotes;
  patch: DownloadReleasePatch;
  archive: DownloadReleaseArchive;
}
