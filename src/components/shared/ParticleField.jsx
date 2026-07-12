import { useEffect, useRef } from 'react';

/**
 * Interactive particle constellation (lightweight-3d-effects style).
 *
 * A performance-focused 2D canvas: pointer-reactive nodes connected by fading
 * links, giving an "interactive 3D-ish" depth feel without shipping a WebGL /
 * Three.js bundle. Optimizations:
 *   - devicePixelRatio capped at 2
 *   - particle count scales with viewport area (and halved on touch/low-core)
 *   - render loop pauses via IntersectionObserver when the hero is off-screen
 *   - fully skipped under prefers-reduced-motion
 */
export default function ParticleField({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let particles = [];
    let raf = 0;
    let running = true;
    const pointer = { x: -9999, y: -9999 };

    const lowPower =
      window.matchMedia('(pointer: coarse)').matches ||
      (navigator.hardwareConcurrency || 8) < 4;

    const isDark = () => document.documentElement.classList.contains('dark');

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const base = Math.round((width * height) / 22000);
      const count = Math.min(lowPower ? 34 : 70, Math.max(18, base));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8,
      }));
    };

    const LINK_DIST = 130;

    const draw = () => {
      raf = 0;
      if (!running) return;

      ctx.clearRect(0, 0, width, height);
      const dark = isDark();
      const dotColor = dark ? 'rgba(52,211,153,' : 'rgba(16,185,129,';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gentle pointer attraction
        const dxp = pointer.x - p.x;
        const dyp = pointer.y - p.y;
        const distP = Math.hypot(dxp, dyp);
        if (distP < 150) {
          const f = (150 - distP) / 150;
          p.vx += (dxp / distP) * f * 0.04;
          p.vy += (dyp / distP) * f * 0.04;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${dotColor}0.55)`;
        ctx.fill();

        // Links
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `${dotColor}${(1 - dist / LINK_DIST) * 0.28})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    start();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);

    // Pause when hero scrolls out of view
    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running) start();
        else stop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVisibility = () => {
      running = !document.hidden;
      if (running) start();
      else stop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  );
}
