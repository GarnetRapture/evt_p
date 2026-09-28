import type { SoulPortraitProps } from '@evtp/type/component/soul/SoulPortraitProps';
import { SOUL_PORTRAIT_SIZE } from '@evtp/constant/soul/portrait/SOUL_PORTRAIT_SIZE';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import { resolveSoulPortrait } from '@evtp/logic/soul/portrait/resolveSoulPortrait';

export function SoulPortrait(props: SoulPortraitProps) {
  const source = () => resolveSoulPortrait(props.soulKey);
  return (
    <img
      class={SITE_CLASS_NAME.portrait}
      data-variant={props.variant}
      src={source().small}
      srcset={`${source().small} 256w, ${source().large} 512w`}
      sizes={props.sizes ?? SOUL_PORTRAIT_SIZE[props.variant]}
      alt={props.alt}
      width="512"
      height="512"
      loading={props.loading ?? 'lazy'}
      decoding="async"
    />
  );
}
