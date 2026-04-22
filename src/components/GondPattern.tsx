import { cn } from "@/lib/utils";

/** Subtle Gond-inspired dot/line motif used as section overlays and dividers. */
const GondPattern = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={cn("text-current", className)}
  >
    <defs>
      <pattern id="gond-tile" width="40" height="40" patternUnits="userSpaceOnUse">
        {/* radial dots */}
        <circle cx="20" cy="20" r="1.4" fill="currentColor" />
        <circle cx="20" cy="6" r="0.9" fill="currentColor" />
        <circle cx="20" cy="34" r="0.9" fill="currentColor" />
        <circle cx="6" cy="20" r="0.9" fill="currentColor" />
        <circle cx="34" cy="20" r="0.9" fill="currentColor" />
        {/* connecting strokes */}
        <path
          d="M20 8 L20 32 M8 20 L32 20"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.7"
        />
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="0.4" fill="none" opacity="0.6" />
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#gond-tile)" />
  </svg>
);

export default GondPattern;
