import { For } from 'solid-js';
import type { SiteSectionProps } from '@evtp/type/component/site/SiteSectionProps';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';

export function SiteSpecs(props: SiteSectionProps) {
  return (
    <section class={SITE_CLASS_NAME.specs}>
      <div class={SITE_CLASS_NAME.sectionShell}>
        <div class={SITE_CLASS_NAME.sectionIntro} data-motion="reveal">
          <p class={SITE_CLASS_NAME.eyebrow}>{props.text.specEyebrow}</p>
          <h2 class={SITE_CLASS_NAME.sectionTitle}>{props.text.specTitle}</h2>
        </div>
        <dl class={SITE_CLASS_NAME.specsList}>
          <For each={props.text.spec}>{(entry) => (
            <div class={SITE_CLASS_NAME.specsRow}>
              <dt>{entry.label}</dt>
              <dd>{entry.value}</dd>
            </div>
          )}</For>
        </dl>
      </div>
    </section>
  );
}
