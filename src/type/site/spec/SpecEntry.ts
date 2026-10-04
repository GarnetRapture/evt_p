export interface SpecEntry {
  label: string;
  value: string;
}

export interface SpecVersion {
  title: string;
  rows: readonly SpecEntry[];
}
