import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import BurgundyRibbon from "@/components/BurgundyRibbon";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocalePath } from "@/hooks/useLocalePath";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { locale, localePath } = useLocalePath();

  const isHome = location.pathname === `/${locale}` || location.pathname === `/${locale}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t("nav.stories"), to: localePath("stories") },
    { label: t("nav.resources"), to: localePath("resources") },
    { label: t("nav.donate"), to: localePath("donate") },
  ];

  const isActive = (to: string) =>
    location.pathname === to || location.pathname.startsWith(to + "/");

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "bg-parchment/90 backdrop-blur-md border-b border-border/60",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-2.5">
        <Link
          to={localePath()}
          className={cn(
            "flex items-center gap-2.5 transition-colors",
            transparent ? "text-parchment" : "text-foreground",
          )}
        >
          <BurgundyRibbon className="w-5 h-6 shrink-0" />
          <span className="text-sm md:text-base font-serif leading-tight">
            {t("org.name")}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-sm px-3.5 py-2 transition-colors duration-300",
                transparent
                  ? "text-parchment/85 hover:text-parchment"
                  : isActive(link.to)
                    ? "text-primary font-medium"
                    : "text-foreground/70 hover:text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-3">
            <LanguageSwitcher variant={transparent ? "dark" : "light"} />
          </div>
        </nav>

        <div className="lg:hidden flex items-center gap-2">
          <LanguageSwitcher variant={transparent ? "dark" : "light"} />
          <button
            className={cn(
              "w-10 h-10 flex items-center justify-center rounded-full transition-colors",
              transparent ? "text-parchment" : "text-foreground",
            )}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-parchment border-t border-border px-6 py-6 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "text-base py-3 border-b border-border/40 last:border-0",
                isActive(link.to) ? "text-primary font-medium" : "text-foreground/80",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
