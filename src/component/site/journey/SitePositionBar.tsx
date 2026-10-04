import { createSignal, onCleanup, onMount } from 'solid-js';
import type { SiteText } from '@evtp/type/site/text/SiteText';
import { SITE_SECTION_ID } from '@evtp/constant/site/section/SITE_SECTION_ID';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';

export function SitePositionBar(props: { text: SiteText; onNavigate: () => void }) {
  const [position, setPosition] = createSignal(0);
  const pages = () => [
    { id: SITE_SECTION_ID.top, label: props.text.brandName },
    { id: SITE_SECTION_ID.features, label: props.text.navGame },
    { id: SITE_SECTION_ID.updates, label: props.text.navUpdates },
    { id: SITE_SECTION_ID.roadmap, label: props.text.navRoadmap },
    { id: SITE_SECTION_ID.guide, label: props.text.navGuide },
    { id: SITE_SECTION_ID.download, label: props.text.navDownload },
    { id: SITE_SECTION_ID.specs, label: props.text.positionSpecs },
    { id: SITE_SECTION_ID.lounge, label: props.text.loungeTitle },
    { id: SITE_SECTION_ID.end, label: props.text.positionEnd },
  ];

  onMount(() => {
    const journey = document.querySelector<HTMLElement>(`.${SITE_CLASS_NAME.journey}`);
    const hero = document.getElementById(SITE_SECTION_ID.top);
    const update = (): void => {
      if (!journey || !hero || window.scrollY < hero.offsetHeight * 0.55) {
        setPosition(0);
      } else {
        setPosition(1 + Math.round(journey.scrollLeft / journey.clientWidth));
      }
    };
    window.addEventListener('scroll', update, { passive: true });
    journey?.addEventListener('scroll', update, { passive: true });
    update();
    onCleanup(() => {
      window.removeEventListener('scroll', update);
      journey?.removeEventListener('scroll', update);
    });
  });

  return (
    <ul class={SITE_CLASS_NAME.positionBar}>
      {pages().map((page, index) => (
        <li><a class={SITE_CLASS_NAME.positionLink} href={`#${page.id}`} aria-label={`${index + 1}. ${page.label}`} aria-current={position() === index ? 'location' : undefined} onClick={props.onNavigate}>
          <span class="site-position-number">{String(index + 1).padStart(2, '0')}</span>
          <span class="site-position-label">{page.label}</span>
        </a></li>
      ))}
    </ul>
  );
}
