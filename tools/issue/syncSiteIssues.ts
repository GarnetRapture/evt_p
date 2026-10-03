import { writeFile } from 'node:fs/promises';

interface GitHubIssue {
  number: number;
  title: string;
  html_url: string;
  updated_at: string;
  state: 'open' | 'closed';
  pull_request?: unknown;
}

const REPOSITORY = 'GarnetRapture/evt_p';
const output = new URL('../../src/constant/site/issue/siteIssues.generated.json', import.meta.url);
const token = process.env.GITHUB_TOKEN;
const headers: Record<string, string> = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'evt-release-pages',
};
if (token !== undefined) headers.Authorization = `Bearer ${token}`;

const issues: { number: number; title: string; url: string; updatedAt: string; state: 'open' | 'closed' }[] = [];
for (let page = 1; ; page += 1) {
  const url = `https://api.github.com/repos/${REPOSITORY}/issues?state=all&sort=updated&direction=desc&per_page=100&page=${page}`;
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`GitHub Issues request failed: ${response.status} ${url}`);
  const payload: unknown = await response.json();
  if (!Array.isArray(payload)) throw new Error(`GitHub Issues response is not a list: ${url}`);
  for (const entry of payload) {
    if (!isGitHubIssue(entry)) throw new Error(`GitHub Issues response has an invalid item: ${url}`);
    if (entry.pull_request !== undefined) continue;
    const expectedUrl = `https://github.com/${REPOSITORY}/issues/${entry.number}`;
    if (entry.html_url !== expectedUrl) throw new Error(`GitHub Issue URL differs from its issue number: ${entry.number}`);
    issues.push({ number: entry.number, title: entry.title, url: entry.html_url, updatedAt: entry.updated_at, state: entry.state });
  }
  if (payload.length < 100) break;
}

await writeFile(output, `${JSON.stringify({ generatedAt: new Date().toISOString(), issues }, null, 2)}\n`, 'utf8');
process.stdout.write(`Synced ${issues.length} GitHub issues.\n`);

function isGitHubIssue(value: unknown): value is GitHubIssue {
  if (typeof value !== 'object' || value === null) return false;
  const item = value as Record<string, unknown>;
  return typeof item.number === 'number'
    && Number.isInteger(item.number)
    && typeof item.title === 'string'
    && typeof item.html_url === 'string'
    && typeof item.updated_at === 'string'
    && (item.state === 'open' || item.state === 'closed');
}
