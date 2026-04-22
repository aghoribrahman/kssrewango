import { useParams } from "react-router-dom";
import { SUPPORTED_LOCALES, type Locale } from "@/i18n";

const isLocale = (v: string | undefined): v is Locale =>
  !!v && (SUPPORTED_LOCALES as readonly string[]).includes(v);

/** Returns the active locale and a helper to build locale-prefixed paths. */
export const useLocalePath = () => {
  const { lang } = useParams<{ lang: string }>();
  const locale: Locale = isLocale(lang) ? lang : "en";
  const localePath = (path: string = "") => {
    const clean = path.replace(/^\/+/, "");
    return clean ? `/${locale}/${clean}` : `/${locale}`;
  };
  return { locale, localePath };
};
