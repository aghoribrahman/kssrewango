import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
  className?: string;
}

const labels: Record<Locale, string> = {
  en: "EN",
  hi: "हिं",
};

const fullLabels: Record<Locale, string> = {
  en: "English",
  hi: "हिंदी",
};

const LanguageSwitcher = ({ variant = "light", className }: LanguageSwitcherProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n, t } = useTranslation();

  const current = (SUPPORTED_LOCALES as readonly string[]).includes(i18n.language)
    ? (i18n.language as Locale)
    : "en";

  const switchTo = (next: Locale) => {
    if (next === current) return;
    const segments = location.pathname.split("/").filter(Boolean);
    if ((SUPPORTED_LOCALES as readonly string[]).includes(segments[0])) {
      segments[0] = next;
    } else {
      segments.unshift(next);
    }
    navigate("/" + segments.join("/") + location.search + location.hash);
  };

  const baseTrack =
    variant === "light"
      ? "bg-foreground/5 border-foreground/10"
      : "bg-background/10 border-background/20";
  const activeChip =
    variant === "light"
      ? "bg-primary text-primary-foreground shadow-sm"
      : "bg-background text-foreground";
  const idleChip =
    variant === "light"
      ? "text-foreground/60 hover:text-foreground"
      : "text-background/70 hover:text-background";

  return (
    <div
      role="group"
      aria-label={t("language.label")}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border p-0.5 backdrop-blur-sm",
        baseTrack,
        className,
      )}
    >
      {SUPPORTED_LOCALES.map((loc) => {
        const isActive = current === loc;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => switchTo(loc)}
            aria-pressed={isActive}
            aria-label={fullLabels[loc]}
            className={cn(
              "min-w-[2.25rem] rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-all duration-300",
              isActive ? activeChip : idleChip,
              loc === "hi" && "font-devanagari text-sm leading-none",
            )}
          >
            {labels[loc]}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
