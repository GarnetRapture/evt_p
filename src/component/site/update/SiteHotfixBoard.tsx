import { For } from 'solid-js';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import hotfixHistory from '@evtp/data/notice/hotfixHistory.json';
import type { SiteLocaleSectionProps } from '@evtp/type/component/site/SiteLocaleSectionProps';
import type { SiteHotfixNotice } from '@evtp/type/site/notice/SiteHotfixNotice';

const notices: readonly SiteHotfixNotice[] = hotfixHistory;

export function SiteHotfixBoard(props: SiteLocaleSectionProps) {
  const text = () => props.localeState.text();
  const locale = () => props.localeState.locale();

  return (
    <section class={SITE_CLASS_NAME.noticeBoard} aria-labelledby="site-hotfix-board-title">
      <h3 class={SITE_CLASS_NAME.noticeHeading} id="site-hotfix-board-title">{text().noticeBoardTitle}</h3>
      <p class={SITE_CLASS_NAME.noticeDescription}>{text().noticeBoardDescription}</p>
      <div class={SITE_CLASS_NAME.noticeColumns} aria-hidden="true">
        <span>{text().noticeSubjectLabel}</span>
        <span>{text().noticeVersionLabel}</span>
        <span>{text().noticeDateLabel}</span>
      </div>
      <For each={notices}>
        {(notice, index) => (
          <details class={SITE_CLASS_NAME.noticeRow} open={index() === 0}>
            <summary class={SITE_CLASS_NAME.noticeSummary}>
              <span class={SITE_CLASS_NAME.noticeSubject}>
                <span class={SITE_CLASS_NAME.noticeTitle}>{notice.title[locale()]}</span>
                {index() === 0 && <span class={SITE_CLASS_NAME.noticeLatest}>{text().noticeLatestLabel}</span>}
                <span class={SITE_CLASS_NAME.noticeToggle} aria-hidden="true">+</span>
              </span>
              <span class={SITE_CLASS_NAME.noticeVersion}>{notice.version} · {notice.platform}</span>
              <time class={SITE_CLASS_NAME.noticeDate} dateTime={notice.date}>{notice.date}</time>
            </summary>
            <div class={SITE_CLASS_NAME.noticeContent}>
              <ul><For each={notice.body[locale()]}>{(line) => <li>{line}</li>}</For></ul>
              <a class={SITE_CLASS_NAME.noticeRelease} href={notice.releaseUrl} target="_blank" rel="noopener noreferrer">
                {text().noticeReleaseLink}<span aria-hidden="true"> ↗</span>
              </a>
            </div>
          </details>
        )}
      </For>
    </section>
  );
}
