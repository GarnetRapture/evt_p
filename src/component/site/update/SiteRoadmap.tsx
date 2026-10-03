import { For } from 'solid-js';
import type { SiteSectionProps } from '@evtp/type/component/site/SiteSectionProps';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_ISSUES_URL } from '@evtp/constant/site/issue/SITE_ISSUES_URL';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import { SiteIssueFeed } from '@evtp/component/site/issue/SiteIssueFeed';
import galaxySceneUrl from '@evtp/asset/bg/Talk_BG_Galaxy.webp';
import { SiteSectionScene } from '@evtp/component/site/scene/SiteSectionScene';

export function SiteRoadmap(props: SiteSectionProps) {
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
          <For each={props.text.roadmapStages}>{(stage) => {
            const entries = () => props.text.updateEntries.filter((entry) => entry.stage === stage.id);
            return (
              <li class={SITE_CLASS_NAME.roadmapStage} data-stage={stage.id} data-motion="reveal">
                <div class={SITE_CLASS_NAME.roadmapStageHead}>
                  <div>
                    <h3 class={SITE_CLASS_NAME.roadmapStageTitle}>{stage.title}</h3>
                    <p class={SITE_CLASS_NAME.roadmapStageDescription}>{stage.description}</p>
                  </div>
                  <span class={SITE_CLASS_NAME.roadmapStageCount}>{entries().length}{props.text.roadmapCountUnit}</span>
                </div>
                <ul class={SITE_CLASS_NAME.roadmapList}>
                  <For each={entries()}>{(entry) => (
                    <li class={SITE_CLASS_NAME.updateCard}>
                      <div class={SITE_CLASS_NAME.updateCardHead}>
                        <span class={SITE_CLASS_NAME.updateId}>{entry.id}</span>
                        <span class={SITE_CLASS_NAME.updateStatus}>{entry.status}</span>
                      </div>
                      <h4 class={SITE_CLASS_NAME.updateCardTitle}>{entry.title}</h4>
                      <p class={SITE_CLASS_NAME.updateCardBody}>{entry.body}</p>
                    </li>
                  )}</For>
                </ul>
              </li>
            );
          }}</For>
        </ol>
        <div class={SITE_CLASS_NAME.roadmapActions}>
          <a class={SITE_CLASS_NAME.sectionJump} href={`#${SITE_SECTION_ID.updates}`}>{props.text.roadmapJump}<span aria-hidden="true"> ↗</span></a>
          <a class={SITE_CLASS_NAME.sectionJump} href={SITE_ISSUES_URL} target="_blank" rel="noopener noreferrer">{props.text.roadmapReport}<span aria-hidden="true"> ↗</span></a>
        </div>
        <SiteIssueFeed text={props.text} />
      </div>
    </section>
  );
}
