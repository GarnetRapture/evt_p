import { onCleanup, onMount, type JSX } from 'solid-js';
import { SITE_CLASS_NAME } from '@evtp/constant/ui/class/SITE_CLASS_NAME';

export function SiteJourney(props: { children: JSX.Element }) {
  let viewport: HTMLDivElement | undefined;

  onMount(() => {
    if (!viewport) return;
    const track = viewport;
    let lastMove = 0;
    const move = (event: WheelEvent): void => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.ctrlKey) return;
      const width = track.clientWidth;
      const index = Math.round(track.scrollLeft / width);
      const page = track.children[0]?.children[index] as HTMLElement | undefined;
      if (!page) return;
      const scrollingDown = event.deltaY > 0;
      const atEdge = scrollingDown
        ? page.scrollTop + page.clientHeight >= page.scrollHeight - 2
        : page.scrollTop <= 2;
      if (!atEdge) {
        event.preventDefault();
        page.scrollBy({ top: event.deltaY, behavior: 'instant' });
        return;
      }
      const next = index + (scrollingDown ? 1 : -1);
      if (next < 0 || next >= track.children[0]!.children.length) return;
      event.preventDefault();
      if (performance.now() - lastMove < 650) return;
      lastMove = performance.now();
      track.scrollTo({ left: next * width, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    };
    track.addEventListener('wheel', move, { passive: false });
    onCleanup(() => track.removeEventListener('wheel', move));
  });

  return <div class={SITE_CLASS_NAME.journey} ref={(element) => { viewport = element; }}><div class={SITE_CLASS_NAME.journeyTrack}>{props.children}</div></div>;
}
