import { For } from 'solid-js';
import type { SiteSectionProps } from '@evtp/type/component/site/SiteSectionProps';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import galaxySceneUrl from '@evtp/asset/bg/Talk_BG_Galaxy.webp';
import { SITE_LOUNGE_STACK_ICON } from '@evtp/constant/site/lounge/SITE_LOUNGE_STACK_ICON';

export function SiteLounge(props: SiteSectionProps) {
  return (
    <section class={SITE_CLASS_NAME.lounge} id={SITE_SECTION_ID.lounge} aria-labelledby="site-lounge-title">
      <img class={SITE_CLASS_NAME.loungeBackdrop} src={galaxySceneUrl} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <div class={SITE_CLASS_NAME.loungeInner}>
        <div>
          <p class={SITE_CLASS_NAME.loungeEyebrow}>{props.text.loungeEyebrow}</p>
          <h2 class={SITE_CLASS_NAME.loungeTitle} id="site-lounge-title">{props.text.loungeTitle}</h2>
          <p class="site-lounge-reason">{props.text.loungeReason}</p>
          <p class={SITE_CLASS_NAME.loungeInvite}>{props.text.loungeInvite}</p>
        </div>
        <div>
          <h3>{props.text.loungeFlowLabel}</h3>
          <ol class={SITE_CLASS_NAME.loungeFlow}>
            <For each={props.text.loungeFlow}>{(step, index) => <li><span>{String(index() + 1).padStart(2, '0')}</span>{step}</li>}</For>
          </ol>
          <h3>{props.text.loungeStackLabel}</h3>
          <ul class={SITE_CLASS_NAME.loungeStack}>
            <For each={props.text.loungeStack}>{(item) => <li class={SITE_CLASS_NAME.loungeChip}>
              {SITE_LOUNGE_STACK_ICON[item] && <img src={SITE_LOUNGE_STACK_ICON[item]} alt="" aria-hidden="true" loading="lazy" />}
              <span>{item}</span>
            </li>}</For>
          </ul>
        </div>
      </div>
    </section>
  );
}
