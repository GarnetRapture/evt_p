import { onCleanup, onMount } from 'solid-js';
import type { SiteSectionSceneProps } from '@evtp/type/component/site/SiteSectionSceneProps';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';
import { SiteEmblem } from '@evtp/component/site/brand/SiteEmblem';

export function SiteSectionScene(props: SiteSectionSceneProps) {
  let scene: HTMLDivElement | undefined;
  onMount(() => {
    const section = scene?.closest('section');
    const journey = section?.closest(`.${SITE_CLASS_NAME.journey}`);
    if (!section || !journey) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      section.style.backgroundImage = `linear-gradient(90deg, rgba(6, 10, 24, 0.89), rgba(6, 10, 24, 0.58) 54%, rgba(6, 10, 24, 0.72)), linear-gradient(0deg, rgba(6, 10, 24, 0.75), transparent 55%), url("${props.imageUrl}")`;
      observer.disconnect();
    }, { root: journey, rootMargin: '0px 100% 0px 100%' });
    observer.observe(section);
    onCleanup(() => observer.disconnect());
  });

  return (
    <div class={SITE_CLASS_NAME.sectionScene} data-motion="reveal" ref={(element) => { scene = element; }}>
      <div class={SITE_CLASS_NAME.sectionSceneContent}>
        <span class={SITE_CLASS_NAME.sectionEmblem} aria-hidden="true"><SiteEmblem /></span>
        {props.children}
      </div>
    </div>
  );
}
