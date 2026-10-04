import { For } from 'solid-js';
import type { SiteSectionProps } from '@evtp/type/component/site/SiteSectionProps';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import { SiteIssueFeed } from '@evtp/component/site/issue/SiteIssueFeed';
import { fillSiteText } from '@evtp/logic/site/text/fillSiteText';
import { readLinuxPortProgress } from '@evtp/logic/site/download/readLinuxPortProgress';
import galaxySceneUrl from '@evtp/asset/bg/Talk_BG_Galaxy.webp';
import { SiteSectionScene } from '@evtp/component/site/scene/SiteSectionScene';

export function SiteRoadmap(props: SiteSectionProps) {
  const progress = readLinuxPortProgress();
  return (
    <section class={SITE_CLASS_NAME.roadmap} id={SITE_SECTION_ID.roadmap}>
      <div class={SITE_CLASS_NAME.sectionShell}>
        <SiteSectionScene imageUrl={galaxySceneUrl}>
          <div class={SITE_CLASS_NAME.sectionIntro}>
            <p class={SITE_CLASS_NAME.eyebrow}>{props.text.roadmapEyebrow}</p>
            <h2 class={SITE_CLASS_NAME.sectionTitle}>{props.text.roadmapTitle}</h2>
            <p class={SITE_CLASS_NAME.sectionSubtitle}>{props.text.roadmapSubtitle}</p>
            <p class={SITE_CLASS_NAME.sectionDescription}>{props.text.roadmapDescription}</p>
          </div>
        </SiteSectionScene>
        <ol class={SITE_CLASS_NAME.roadmapGrid}>
          <For each={props.text.roadmapStages}>{(stage) => (
            <li class={SITE_CLASS_NAME.roadmapStage} data-stage={stage.id} data-motion="reveal">
              <div class={SITE_CLASS_NAME.roadmapStageHead}>
                <span class={SITE_CLASS_NAME.roadmapStageCount}>{fillSiteText(stage.status, progress)}</span>
                <h3 class={SITE_CLASS_NAME.roadmapStageTitle}>{stage.title}</h3>
                <p class={SITE_CLASS_NAME.roadmapStageDescription}>{fillSiteText(stage.description, progress)}</p>
              </div>
            </li>
          )}</For>
        </ol>
        <div class={SITE_CLASS_NAME.roadmapNotice}>
          <h3>{props.text.roadmapNoticeTitle}</h3>
          <p>{props.text.roadmapNoticeDescription}</p>
          <ol class={SITE_CLASS_NAME.roadmapNoticeList}>
            <For each={props.text.roadmapNotice}>{(entry) => (
              <li class={SITE_CLASS_NAME.roadmapNoticeItem}>
                <span class="site-roadmap-notice-index">{entry.index}</span>
                <div>
                  <h4>{entry.title}</h4>
                  <p>{fillSiteText(entry.body, progress)}</p>
                </div>
                <span class="site-roadmap-notice-status">{fillSiteText(entry.status, progress)}</span>
              </li>
            )}</For>
          </ol>
        </div>
        <div class={SITE_CLASS_NAME.roadmapActions}>
          <a class={SITE_CLASS_NAME.sectionJump} href={`#${SITE_SECTION_ID.updates}`}>{props.text.roadmapJump}<span aria-hidden="true"> ↗</span></a>
        </div>
        <details class="site-roadmap-reports">
          <summary>{props.text.roadmapIssuesSummary} · {props.text.updateEntries.length}{props.text.roadmapCountUnit}</summary>
          <ul class={SITE_CLASS_NAME.roadmapList}>
            <For each={props.text.updateEntries}>{(entry) => (
              <li class={SITE_CLASS_NAME.updateCard} data-stage={entry.stage}>
                <div class={SITE_CLASS_NAME.updateCardHead}>
                  <span class={SITE_CLASS_NAME.updateId}>{entry.id}</span>
                  <span class={SITE_CLASS_NAME.updateStatus}>{entry.status}</span>
                </div>
                <h4 class={SITE_CLASS_NAME.updateCardTitle}>{entry.title}</h4>
                <p class={SITE_CLASS_NAME.updateCardBody}>{entry.body}</p>
              </li>
            )}</For>
          </ul>
        </details>
        <SiteIssueFeed text={props.text} />
      </div>
    </section>
  );
}
