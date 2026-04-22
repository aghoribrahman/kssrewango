import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  locale?: string;
}

/** Counts from 0 → end when the element scrolls into view. Honors prefers-reduced-motion. */
const CountUp = ({ end, duration = 1800, suffix = "", locale = "en-IN" }: CountUpProps) => {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            if (reduced) {
              setValue(end);
              return;
            }
            const startTime = performance.now();
            const tick = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(end * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration, started]);

  return (
    <span ref={ref} aria-label={`${end.toLocaleString(locale)}${suffix}`}>
      {value.toLocaleString(locale)}
      {suffix}
    </span>
  );
};

export default CountUp;
