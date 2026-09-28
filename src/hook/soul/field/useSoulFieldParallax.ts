import { onCleanup, onMount } from 'solid-js';
import type { Accessor } from 'solid-js';
import { SOUL_FIELD_SETTING } from '@evtp/constant/soul/field/SOUL_FIELD_SETTING';

export function useSoulFieldParallax(host: Accessor<HTMLElement | undefined>): void {
  onMount(() => {
    const element = host();
    if (element === undefined) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(pointer: fine)').matches) return;

    let frame = 0;
    let animation: Animation | undefined;
    let currentX = 0;
    let currentY = 0;

    const move = (event: PointerEvent): void => {
      if (frame !== 0) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const nextX = (event.clientX / window.innerWidth - 0.5) * -SOUL_FIELD_SETTING.parallaxDistance;
        const nextY = (event.clientY / window.innerHeight - 0.5) * -SOUL_FIELD_SETTING.parallaxDistance;
        animation?.cancel();
        animation = element.animate(
          [
            { transform: `translate3d(${currentX}px, ${currentY}px, 0)` },
            { transform: `translate3d(${nextX}px, ${nextY}px, 0)` },
          ],
          { duration: SOUL_FIELD_SETTING.parallaxDuration, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'forwards' },
        );
        currentX = nextX;
        currentY = nextY;
      });
    };

    window.addEventListener('pointermove', move, { passive: true });
    onCleanup(() => {
      window.removeEventListener('pointermove', move);
      window.cancelAnimationFrame(frame);
      animation?.cancel();
    });
  });
}
