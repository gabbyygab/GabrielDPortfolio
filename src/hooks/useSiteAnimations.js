import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REVEAL_SELECTOR = '.fade-in-up, .fade-in, .scale-in, .slide-in-left, .slide-in-right';

/**
 * Central scroll-animation controller.
 *
 * - Reveals: driven by ScrollTrigger.batch, toggling the existing `.animate-in`
 *   class so all the CSS transitions + per-element transitionDelay keep working —
 *   just with GSAP's smoother, batched viewport detection instead of a raw
 *   IntersectionObserver.
 * - Parallax: any element marked `data-parallax="<speed>"` drifts on scroll
 *   (scrubbed, GPU-only transforms) for subtle depth.
 *
 * Fully respects `prefers-reduced-motion`: motion is skipped and content is
 * shown immediately.
 */
export function useSiteAnimations() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      document
        .querySelectorAll(REVEAL_SELECTOR)
        .forEach((el) => el.classList.add('animate-in'));
      return;
    }

    const ctx = gsap.context(() => {
      // Smooth default for scrubbed triggers
      ScrollTrigger.config({ limitCallbacks: true });

      // ── Reveal-on-scroll (batched for natural stagger) ──────────
      // Reveal whenever an element enters the viewport from EITHER direction
      // (onEnter = scrolling down, onEnterBack = scrolling up) and reset once it
      // has fully left off-screen, so sections re-animate when you scroll back
      // up to them too.
      const reveal = (batch) =>
        batch.forEach((el) => el.classList.add('animate-in'));
      const reset = (batch) =>
        batch.forEach((el) => el.classList.remove('animate-in'));

      ScrollTrigger.batch(REVEAL_SELECTOR, {
        start: 'top 88%',
        once: false,
        onEnter: reveal,
        onEnterBack: reveal,
        onLeave: reset,
        onLeaveBack: reset,
      });

      // ── Parallax layers ─────────────────────────────────────────
      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.2;
        gsap.fromTo(
          el,
          { yPercent: -speed * 50 },
          {
            yPercent: speed * 50,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      });

      // Recalculate once fonts/images settle
      ScrollTrigger.refresh();
    });

    // Re-refresh after full load (images shift layout)
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
      ctx.revert();
    };
  }, []);
}
