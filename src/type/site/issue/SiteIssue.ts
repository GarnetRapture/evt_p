export interface SiteIssue {
  number: number;
  title: string;
  url: string;
  updatedAt: string;
  state: 'open' | 'closed';
}

export interface SiteIssueSnapshot {
  generatedAt: string;
  issues: readonly SiteIssue[];
}
