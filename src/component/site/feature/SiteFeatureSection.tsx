import { For, Show } from 'solid-js';
import type { SiteSectionProps } from '@evtp/type/component/site/SiteSectionProps';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import forestSceneUrl from '@evtp/asset/bg/Talk_BG_Forest_Day.webp';
import { SiteSectionScene } from '@evtp/component/site/scene/SiteSectionScene';

export function SiteFeatureSection(props: SiteSectionProps) {
  return (
    <section class={SITE_CLASS_NAME.features} id={SITE_SECTION_ID.features}>
      <div class={SITE_CLASS_NAME.sectionShell}>
        <SiteSectionScene imageUrl={forestSceneUrl}>
          <div class={SITE_CLASS_NAME.sectionIntro}>
            <p class={SITE_CLASS_NAME.eyebrow}>{props.text.featureEyebrow}</p>
            <h2 class={SITE_CLASS_NAME.sectionTitle}>{props.text.featureTitle}</h2>
            <p class={SITE_CLASS_NAME.sectionSubtitle}>{props.text.featureSubtitle}</p>
            <p class={SITE_CLASS_NAME.sectionDescription}>{props.text.featureDescription}</p>
          </div>
        </SiteSectionScene>
        <div class={SITE_CLASS_NAME.featureGrid}>
          <For each={props.text.feature}>{(entry) => (
            <article class={SITE_CLASS_NAME.featureCard} data-motion="reveal">
              <span class={SITE_CLASS_NAME.featureIndex}>{entry.index}</span>
              <Show when={entry.status}><span class={SITE_CLASS_NAME.featureStatus}>{entry.status}</span></Show>
              <h3 class={SITE_CLASS_NAME.featureTitle}>{entry.title}</h3>
              <p class={SITE_CLASS_NAME.featureBody}>{entry.body}</p>
            </article>
          )}</For>
        </div>
      </div>
    </section>
  );
}
