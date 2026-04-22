import { useEffect, type ReactNode } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LOCALES, type Locale } from "./index";

const isLocale = (value: string | undefined): value is Locale =>
  !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);

/** Wraps locale-prefixed routes; syncs i18next + <html lang/dir>. */
export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (isLocale(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    if (isLocale(lang)) {
      document.documentElement.lang = lang;
    }
  }, [lang, i18n]);

  if (!isLocale(lang)) {
    return <Navigate to="/en" replace />;
  }

  return <>{children}</>;
};

/** Redirects bare "/" to the user's preferred locale (defaults to en). */
export const RootLocaleRedirect = () => {
  const stored = typeof window !== "undefined" ? window.localStorage.getItem("i18nextLng") : null;
  const initial =
    stored && isLocale(stored)
      ? stored
      : typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("hi")
        ? "hi"
        : "en";
  const location = useLocation();
  return <Navigate to={`/${initial}${location.search}${location.hash}`} replace />;
};
