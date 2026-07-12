import { useEffect, useRef } from 'react';

/**
 * Lightweight pointer-driven 3D tilt (web3d "lightweight-3d-effects" pattern).
 *
 * Pure CSS transforms driven by rAF — no Three.js, no dependency. Adds a subtle
 * sense of depth/parallax to a card as the pointer moves across it.
 *
 * Disabled automatically on touch devices and when reduced-motion is preferred.
 */
export function useTilt({ max = 8, scale = 1.02, perspective = 900 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    if (reduced || coarse) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;

    const render = () => {
      frame = 0;
      el.style.transform =
        `perspective(${perspective}px) rotateX(${targetY}deg) rotateY(${targetX}deg) scale(${scale})`;
    };

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = px * max * 2;
      targetY = -py * max * 2;
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      el.style.transform =
        `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    el.classList.add('tilt-el');
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [max, scale, perspective]);

  return ref;
}
