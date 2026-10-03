import { For } from 'solid-js';
import type { SiteSectionProps } from '@evtp/type/component/site/SiteSectionProps';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import arkSceneUrl from '@evtp/asset/bg/Talk_BG_Ark.webp';
import { SiteSectionScene } from '@evtp/component/site/scene/SiteSectionScene';

export function SiteUpdate(props: SiteSectionProps) {
  return (
    <section class={SITE_CLASS_NAME.updates} id={SITE_SECTION_ID.updates}>
      <div class={SITE_CLASS_NAME.sectionShell}>
        <div class={SITE_CLASS_NAME.updateIntro}>
          <SiteSectionScene imageUrl={arkSceneUrl}>
            <div class={SITE_CLASS_NAME.sectionIntro}>
              <p class={SITE_CLASS_NAME.eyebrow}>{props.text.updateEyebrow}</p>
              <h2 class={SITE_CLASS_NAME.sectionTitle}>{props.text.updateTitle}</h2>
              <p class={SITE_CLASS_NAME.sectionSubtitle}>{props.text.updateSubtitle}</p>
              <p class={SITE_CLASS_NAME.sectionDescription}>{props.text.updateDescription}</p>
            </div>
          </SiteSectionScene>
        </div>
        <div class={SITE_CLASS_NAME.updatePanel} data-motion="reveal">
          <h3 class={SITE_CLASS_NAME.updateSubheading}>{props.text.updatePatchTitle}</h3>
          <p class={SITE_CLASS_NAME.updateCaution}>{props.text.updatePatchCaution}</p>
          <ul class={SITE_CLASS_NAME.updatePatchList}>
            <For each={props.text.updateEntries.filter((entry) => entry.patchNote !== undefined)}>
              {(entry) => (
                <li class={SITE_CLASS_NAME.updatePatchItem}>
                  <span class={SITE_CLASS_NAME.updateId}>{entry.id}</span>
                  <div class={SITE_CLASS_NAME.updatePatchCopy}>
                    <h4 class={SITE_CLASS_NAME.updateCardTitle}>{entry.title}</h4>
                    <p class={SITE_CLASS_NAME.updateCardBody}>{entry.patchNote}</p>
                  </div>
                </li>
              )}
            </For>
          </ul>
        </div>
        <a class={SITE_CLASS_NAME.sectionJump} href={`#${SITE_SECTION_ID.roadmap}`}>{props.text.updateJump}<span aria-hidden="true"> ↗</span></a>
      </div>
    </section>
  );
}
