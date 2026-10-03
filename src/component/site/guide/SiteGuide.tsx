import { For } from 'solid-js';
import type { SiteSectionProps } from '@evtp/type/component/site/SiteSectionProps';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import cherrySceneUrl from '@evtp/asset/bg/Talk_BG_CherryBlossom.webp';
import { SiteSectionScene } from '@evtp/component/site/scene/SiteSectionScene';

export function SiteGuide(props: SiteSectionProps) {
  return (
    <section class={SITE_CLASS_NAME.guide} id={SITE_SECTION_ID.guide}>
      <div class={SITE_CLASS_NAME.sectionShell}>
        <SiteSectionScene imageUrl={cherrySceneUrl}>
          <div class={SITE_CLASS_NAME.sectionIntro}>
            <p class={SITE_CLASS_NAME.eyebrow}>{props.text.guideEyebrow}</p>
            <h2 class={SITE_CLASS_NAME.sectionTitle}>{props.text.guideTitle}</h2>
            <p class={SITE_CLASS_NAME.sectionSubtitle}>{props.text.guideSubtitle}</p>
            <p class={SITE_CLASS_NAME.sectionDescription}>{props.text.guideDescription}</p>
          </div>
        </SiteSectionScene>
        <ol class={SITE_CLASS_NAME.guideSteps}>
          <For each={props.text.guideSteps}>{(step) => (
            <li class={SITE_CLASS_NAME.guideStep} data-motion="reveal">
              <span class={SITE_CLASS_NAME.guideIndex}>{step.index}</span>
              <div>
                <h3 class={SITE_CLASS_NAME.guideStepTitle}>{step.title}</h3>
                <p class={SITE_CLASS_NAME.guideStepBody}>{step.body}</p>
              </div>
            </li>
          )}</For>
        </ol>
        <a class={SITE_CLASS_NAME.buttonPrimary} href={`#${SITE_SECTION_ID.download}`}>
          {props.text.heroPrimary}
        </a>
      </div>
    </section>
  );
}
