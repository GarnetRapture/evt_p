import { For } from 'solid-js';
import type { SiteSectionProps } from '@evtp/type/component/site/SiteSectionProps';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { fillSiteText } from '@evtp/logic/site/text/fillSiteText';
import { readLinuxPortProgress } from '@evtp/logic/site/download/readLinuxPortProgress';

export function SiteSpecs(props: SiteSectionProps) {
  const progress = readLinuxPortProgress();
  return (
    <section class={SITE_CLASS_NAME.specs} id={SITE_SECTION_ID.specs}>
      <div class={SITE_CLASS_NAME.sectionShell}>
        <div class={SITE_CLASS_NAME.sectionIntro} data-motion="reveal">
          <p class={SITE_CLASS_NAME.eyebrow}>{props.text.specEyebrow}</p>
          <h2 class={SITE_CLASS_NAME.sectionTitle}>{props.text.specTitle}</h2>
        </div>
        <For each={props.text.specVersions}>{(version) => (
          <section class={SITE_CLASS_NAME.specVersion} aria-label={version.title}>
            <h3 class={SITE_CLASS_NAME.specVersionTitle}>{version.title}</h3>
            <dl class={SITE_CLASS_NAME.specsList}>
              <For each={version.rows}>{(entry) => (
                <div class={SITE_CLASS_NAME.specsRow}>
                  <dt>{entry.label}</dt>
                  <dd>{fillSiteText(entry.value, progress)}</dd>
                </div>
              )}</For>
            </dl>
          </section>
        )}</For>
        <div class={SITE_CLASS_NAME.specRecommended}>
          <h3>{props.text.specRecommendedTitle}</h3>
          <p>{props.text.specRecommendedBody}</p>
        </div>
      </div>
    </section>
  );
}
