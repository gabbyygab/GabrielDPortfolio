import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered number count-up (React Bits CountUp pattern).
 *
 * Parses a display value like "5+", "1.20", "100+", or "1x" into a numeric
 * target, then animates 0 → target with an ease-out curve the first time it
 * enters the viewport. Honors reduced-motion (and unparseable values) by
 * rendering the final value immediately.
 */
function parseValue(value) {
  const match = String(value).match(/^([^\d.-]*)(-?\d*\.?\d+)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  return {
    prefix,
    suffix,
    target: parseFloat(numStr),
    decimals: numStr.includes('.') ? numStr.split('.')[1].length : 0,
  };
}

const format = (p, n) => `${p.prefix}${n.toFixed(p.decimals)}${p.suffix}`;

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function CountUp({ value, duration = 1600, className = '' }) {
  const ref = useRef(null);

  // Start at the zero-form when we're going to animate, else the final value.
  const [display, setDisplay] = useState(() => {
    const parsed = parseValue(value);
    if (!parsed || prefersReduced()) return value;
    return format(parsed, 0);
  });

  useEffect(() => {
    const el = ref.current;
    const parsed = parseValue(value);
    if (!el || !parsed || prefersReduced()) return;

    let raf = 0;
    let startTime = 0;
    const run = (ts) => {
      if (!startTime) startTime = ts;
      const t = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(format(parsed, parsed.target * eased));
      if (t < 1) raf = requestAnimationFrame(run);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          raf = requestAnimationFrame(run);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
