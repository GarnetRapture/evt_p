import { For, createMemo } from 'solid-js';
import type { SoulCardFieldProps } from '@evtp/type/component/soul/SoulCardFieldProps';
import { SOUL_FIELD_SETTING } from '@evtp/constant/soul/field/SOUL_FIELD_SETTING';
import { SOUL_ROSTER } from '@evtp/constant/soul/roster/SOUL_ROSTER';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import { SoulPortrait } from '@evtp/component/soul/portrait/SoulPortrait';
import { useSoulFieldParallax } from '@evtp/hook/soul/field/useSoulFieldParallax';
import { useSoulFieldActivity } from '@evtp/hook/soul/field/useSoulFieldActivity';
import { useSiteViewport } from '@evtp/hook/site/viewport/useSiteViewport';
import { distributeSoulColumns } from '@evtp/logic/soul/field/distributeSoulColumns';

export function SoulCardField(props: SoulCardFieldProps) {
  const viewport = useSiteViewport();
  let host: HTMLDivElement | undefined;
  const columnCount = () => SOUL_FIELD_SETTING.heroColumns[viewport.tier()];
  const columns = createMemo(() => distributeSoulColumns(SOUL_ROSTER, columnCount(), SOUL_FIELD_SETTING.heroCardsPerColumn));
  const cardSizes = () => `${Math.ceil((100 / columnCount()) * SOUL_FIELD_SETTING.columnWidthScale)}vw`;
  useSoulFieldParallax(() => host);
  useSoulFieldActivity(() => host);

  return (
    <div class={SITE_CLASS_NAME.soulField} data-variant={props.variant} aria-hidden="true" ref={(element) => { host = element; }}>
      <div class={SITE_CLASS_NAME.soulFieldTilt}>
        <For each={columns()}>{(column) => (
          <div class={SITE_CLASS_NAME.soulFieldColumn}>
            <div class={SITE_CLASS_NAME.soulFieldTrack}>
              <For each={[...column, ...column]}>{(soul) => (
                <span class={SITE_CLASS_NAME.soulCard}>
                  <SoulPortrait soulKey={soul.key} alt="" variant="card" sizes={cardSizes()} loading="lazy" />
                </span>
              )}</For>
            </div>
          </div>
        )}</For>
      </div>
    </div>
  );
}
