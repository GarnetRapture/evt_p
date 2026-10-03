import { For, Show, createMemo, createSignal } from 'solid-js';
import type { SiteSectionProps } from '@evtp/type/component/site/SiteSectionProps';
import type { SiteIssueSnapshot } from '@evtp/type/site/issue/SiteIssue';
import snapshotData from '@evtp/constant/site/issue/siteIssues.generated.json';
import { SITE_ISSUES_URL } from '@evtp/constant/site/issue/SITE_ISSUES_URL';
import { SITE_ISSUE_PAGE_SIZE } from '@evtp/constant/site/issue/SITE_ISSUE_PAGE_SIZE';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';

const snapshot: SiteIssueSnapshot = snapshotData;

export function SiteIssueFeed(props: SiteSectionProps) {
  const [filter, setFilter] = createSignal<'all' | 'open' | 'closed'>('all');
  const [page, setPage] = createSignal(1);
  const filtered = createMemo(() => snapshot.issues.filter((issue) => filter() === 'all' || issue.state === filter()));
  const pageCount = createMemo(() => Math.max(1, Math.ceil(filtered().length / SITE_ISSUE_PAGE_SIZE)));
  const visible = createMemo(() => filtered().slice((page() - 1) * SITE_ISSUE_PAGE_SIZE, page() * SITE_ISSUE_PAGE_SIZE));
  let board: HTMLDivElement | undefined;

  const changePage = (next: number): void => {
    setPage(next);
    window.requestAnimationFrame(() => board?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' }));
  };

  return (
    <section class={SITE_CLASS_NAME.issueFeed} aria-labelledby="site-issue-feed-title">
      <div class={SITE_CLASS_NAME.issueFeedHead}>
        <div>
          <h3 class={SITE_CLASS_NAME.issueFeedTitle} id="site-issue-feed-title">{props.text.issueFeedTitle}</h3>
          <p class={SITE_CLASS_NAME.issueFeedDescription}>{props.text.issueFeedDescription}</p>
        </div>
        <a class={SITE_CLASS_NAME.sectionJump} href={SITE_ISSUES_URL} target="_blank" rel="noopener noreferrer">{props.text.roadmapReport}<span aria-hidden="true"> ↗</span></a>
      </div>
      <div class={SITE_CLASS_NAME.issueFeedTabs} role="group" aria-label={props.text.issueFeedFilterLabel}>
        <button type="button" aria-pressed={filter() === 'all'} onClick={() => { setFilter('all'); setPage(1); }}>{props.text.issueFeedAll} <span>{snapshot.issues.length}</span></button>
        <button type="button" aria-pressed={filter() === 'open'} onClick={() => { setFilter('open'); setPage(1); }}>{props.text.issueFeedOpen} <span>{snapshot.issues.filter((issue) => issue.state === 'open').length}</span></button>
        <button type="button" aria-pressed={filter() === 'closed'} onClick={() => { setFilter('closed'); setPage(1); }}>{props.text.issueFeedClosed} <span>{snapshot.issues.filter((issue) => issue.state === 'closed').length}</span></button>
      </div>
      <div class={SITE_CLASS_NAME.issueFeedBoard} ref={(element) => { board = element; }}>
        <div class={SITE_CLASS_NAME.issueFeedColumns} aria-hidden="true">
          <span>{props.text.issueFeedNumberLabel}</span><span>{props.text.issueFeedSubjectLabel}</span><span>{props.text.issueFeedStatusLabel}</span><span>{props.text.issueFeedDateLabel}</span>
        </div>
        <Show when={filtered().length > 0} fallback={<p class={SITE_CLASS_NAME.issueFeedEmpty}>{props.text.issueFeedEmpty}</p>}>
          <ol class={SITE_CLASS_NAME.issueFeedList} start={(page() - 1) * SITE_ISSUE_PAGE_SIZE + 1}>
            <For each={visible()}>{(issue) => (
              <li class={SITE_CLASS_NAME.issueFeedRow}>
                <span class={SITE_CLASS_NAME.issueFeedNumber}>{issue.number}</span>
                <a class={SITE_CLASS_NAME.issueFeedLink} href={issue.url} target="_blank" rel="noopener noreferrer">{issue.title}<span aria-hidden="true"> ↗</span></a>
                <span class={SITE_CLASS_NAME.issueFeedState} data-state={issue.state}>{issue.state === 'open' ? props.text.issueFeedOpen : props.text.issueFeedClosed}</span>
                <time class={SITE_CLASS_NAME.issueFeedDate} dateTime={issue.updatedAt}>{issue.updatedAt.slice(0, 10)}</time>
              </li>
            )}</For>
          </ol>
        </Show>
      </div>
      <Show when={pageCount() > 1}>
        <nav class={SITE_CLASS_NAME.issueFeedPages} aria-label={props.text.issueFeedPagesLabel}>
          <button type="button" disabled={page() === 1} onClick={() => changePage(page() - 1)}>{props.text.issueFeedPrevious}</button>
          <span aria-live="polite">{page()} / {pageCount()}</span>
          <button type="button" disabled={page() === pageCount()} onClick={() => changePage(page() + 1)}>{props.text.issueFeedNext}</button>
        </nav>
      </Show>
    </section>
  );
}
