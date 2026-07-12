import { useRef } from 'react';

/**
 * Spotlight card — a radial glow follows the pointer across the surface
 * (modern-web-design micro-interaction). The glow itself lives in CSS
 * (`.spotlight-card::before`); here we just feed it live `--spot-x/y` vars,
 * throttled to one update per animation frame.
 *
 * Renders as a `<div>` by default; pass `as` to change the element.
 */
export default function SpotlightCard({
  children,
  className = '',
  as = 'div',
  ...props
}) {
  const Tag = as;
  const ref = useRef(null);
  const frame = useRef(0);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el || frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
    });
  };

  return (
    <Tag
      ref={ref}
      onPointerMove={handleMove}
      className={`spotlight-card ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
