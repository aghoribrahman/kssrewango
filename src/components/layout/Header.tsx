import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, HeartPulse } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocalePath } from "@/hooks/useLocalePath";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [getInvolvedOpen, setGetInvolvedOpen] = useState(false);
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

  const regularLinks = [
    { label: t("nav.stories"), to: localePath("stories") },
    { label: t("nav.resources"), to: localePath("resources") },
    { label: t("nav.about"), to: localePath("about") },
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
            "flex items-center gap-2 transition-colors",
            transparent ? "text-parchment" : "text-foreground",
          )}
        >
          <HeartPulse className={cn("w-6 h-6 shrink-0", transparent ? "text-amber-warm" : "text-primary")} />
          <span className="text-sm md:text-base font-serif leading-tight">
            {t("org.name")}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {regularLinks.map((link) => (
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

          {/* Get Involved Dropdown */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "text-sm px-3.5 py-2 transition-colors duration-300 inline-flex items-center gap-1",
                  transparent
                    ? "text-parchment/85 hover:text-parchment"
                    : "text-foreground/70 hover:text-foreground",
                )}
              >
                {t("nav.getInvolved")}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={8} className="bg-parchment border-border/60 w-max max-w-[90vw]">
              <DropdownMenuItem asChild>
                <Link
                  to={localePath("careers")}
                  className={cn(
                    "w-full cursor-pointer",
                    isActive(localePath("careers")) ? "text-primary font-medium" : "text-foreground"
                  )}
                >
                  {t("nav.careers")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  to={localePath("volunteer")}
                  className={cn(
                    "w-full cursor-pointer",
                    isActive(localePath("volunteer")) ? "text-primary font-medium" : "text-foreground"
                  )}
                >
                  {t("nav.volunteer")}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to={localePath("donate")}
            className={cn(
              "text-sm px-3.5 py-2 transition-colors duration-300",
              transparent
                ? "text-parchment/85 hover:text-parchment"
                : isActive(localePath("donate"))
                  ? "text-primary font-medium"
                  : "text-foreground/70 hover:text-foreground",
            )}
          >
            {t("nav.donate")}
          </Link>

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
          {regularLinks.map((link) => (
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

          {/* Get Involved - Mobile */}
          <div className="border-b border-border/40">
            <button
              onClick={() => setGetInvolvedOpen((v) => !v)}
              className="w-full text-base py-3 flex items-center justify-between text-foreground/80 hover:text-foreground transition-colors"
              aria-expanded={getInvolvedOpen}
              aria-label="Toggle Get Involved submenu"
            >
              <span>{t("nav.getInvolved")}</span>
              <motion.div
                animate={{ rotate: getInvolvedOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
            <AnimatePresence>
              {getInvolvedOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 pb-3 flex flex-col gap-1">
                    <Link
                      to={localePath("careers")}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "text-base py-2 px-2 rounded-lg transition-colors",
                        isActive(localePath("careers"))
                          ? "text-primary font-medium bg-primary/5"
                          : "text-foreground/70 hover:text-foreground hover:bg-foreground/5",
                      )}
                    >
                      {t("nav.careers")}
                    </Link>
                    <Link
                      to={localePath("volunteer")}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "text-base py-2 px-2 rounded-lg transition-colors",
                        isActive(localePath("volunteer"))
                          ? "text-primary font-medium bg-primary/5"
                          : "text-foreground/70 hover:text-foreground hover:bg-foreground/5",
                      )}
                    >
                      {t("nav.volunteer")}
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to={localePath("donate")}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "text-base py-3",
              isActive(localePath("donate")) ? "text-primary font-medium" : "text-foreground/80",
            )}
          >
            {t("nav.donate")}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
