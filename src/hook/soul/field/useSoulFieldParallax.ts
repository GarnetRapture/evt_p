import { onCleanup, onMount } from 'solid-js';
import type { Accessor } from 'solid-js';
import { SOUL_FIELD_SETTING } from '@evtp/constant/soul/field/SOUL_FIELD_SETTING';

export function useSoulFieldParallax(host: Accessor<HTMLElement | undefined>): void {
  onMount(() => {
    const element = host();
    if (element === undefined) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(pointer: fine)').matches) return;
    const area = element.parentElement;
    if (area === null) return;
    element.style.transition = `transform ${SOUL_FIELD_SETTING.parallaxDuration}ms cubic-bezier(0.16, 1, 0.3, 1)`;

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    const move = (event: PointerEvent): void => {
      nextX = (event.clientX / window.innerWidth - 0.5) * -SOUL_FIELD_SETTING.parallaxDistance;
      nextY = (event.clientY / window.innerHeight - 0.5) * -SOUL_FIELD_SETTING.parallaxDistance;
      if (frame !== 0) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        element.style.transform = `translate3d(${nextX}px, ${nextY}px, 0)`;
      });
    };
    const leave = (): void => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      element.style.transform = '';
    };

    area.addEventListener('pointermove', move, { passive: true });
    area.addEventListener('pointerleave', leave);
    onCleanup(() => {
      area.removeEventListener('pointermove', move);
      area.removeEventListener('pointerleave', leave);
      window.cancelAnimationFrame(frame);
      element.style.transform = '';
      element.style.transition = '';
    });
  });
}
