import { cn } from "@/lib/utils";

/** Awareness ribbon mark used as the brand glyph. */
const BurgundyRibbon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 32"
    aria-hidden="true"
    className={cn("text-ribbon", className)}
    fill="none"
  >
    <path
      d="M7 2c-2.2 3.6-2.2 7.4 0 11l5 8 5-8c2.2-3.6 2.2-7.4 0-11"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 13l-2 5M15 13l2 5"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

export default BurgundyRibbon;
