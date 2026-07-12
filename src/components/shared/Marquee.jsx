import { useEffect, useRef, useState } from 'react';

/**
 * Infinite marquee (Magic UI Marquee pattern).
 *
 * Renders content-width copies of the children with a fixed `gap`; each copy
 * slides by exactly its own width + the gap (`-100% - gap`), so the next
 * identical copy lands precisely where it began → seamless loop with tight,
 * consistent spacing (no stretched-out gaps, no trailing blank space).
 *
 * A ResizeObserver measures one copy vs. the container and renders just enough
 * copies to always cover the viewport. Edge fade + pause-on-hover live in CSS;
 * reduced-motion users get a static row.
 */
export default function Marquee({
  children,
  duration = 32,
  gap = '1rem',
  pauseOnHover = true,
  className = '',
}) {
  const containerRef = useRef(null);
  const groupRef = useRef(null);
  const [count, setCount] = useState(2);

  useEffect(() => {
    const container = containerRef.current;
    const group = groupRef.current;
    if (!container || !group) return;

    // setState only ever runs inside the (async) observer callback.
    const ro = new ResizeObserver(() => {
      const groupW = group.offsetWidth;
      const containerW = container.offsetWidth;
      if (groupW > 0) {
        const needed = Math.max(2, Math.ceil(containerW / groupW) + 1);
        setCount((c) => (c === needed ? c : needed));
      }
    });
    ro.observe(container);

    return () => ro.disconnect();
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={`marquee-track marquee-mask ${pauseOnHover ? 'marquee-pause' : ''} ${className}`}
      style={{ '--marquee-duration': `${duration}s`, '--marquee-gap': gap, gap }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          ref={i === 0 ? groupRef : null}
          className="marquee-group"
          style={{ gap }}
          aria-hidden={i > 0 ? 'true' : undefined}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
