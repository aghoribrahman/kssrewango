import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocalePath } from "@/hooks/useLocalePath";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { localePath } = useLocalePath();

  useEffect(() => {
    console.error("404 — route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-parchment px-6">
      <div className="text-center max-w-md">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">404</p>
        <h1 className="font-serif text-5xl text-foreground mb-4">Page not found</h1>
        <p className="text-foreground/60 mb-8">
          We couldn't find the page you were looking for.
        </p>
        <Link
          to={localePath()}
          className="inline-block bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm tracking-wide hover:bg-terracotta-deep transition-colors"
        >
          {t("nav.home")}
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
