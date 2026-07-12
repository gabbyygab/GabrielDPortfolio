import { useRef } from 'react';

/**
 * Magnetic button (modern-web-design cursor UX pattern).
 *
 * The element eases toward the pointer while hovered, then springs back on
 * leave. Transform-only + rAF-throttled, so it stays at 60fps. Auto-disabled
 * on coarse pointers (touch) and under reduced-motion.
 *
 * Renders a real <button> by default; pass `as="a"` for links.
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 0.4,
  as = 'button',
  ...props
}) {
  const Tag = as;
  const ref = useRef(null);
  const frame = useRef(0);

  const disabled = () =>
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleMove = (e) => {
    const el = ref.current;
    if (!el || disabled()) return;
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = 0;
    el.style.transform = 'translate(0px, 0px)';
  };

  return (
    <Tag
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={className}
      style={{ transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)', willChange: 'transform' }}
      {...props}
    >
      {children}
    </Tag>
  );
}
