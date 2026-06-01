import { useTranslation } from "react-i18next";

export const useTranslatedValue = () => {
  const { i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  const getTranslated = <T extends Record<string, any>>(
    obj: T | null | undefined,
    keyBase: string
  ): string => {
    if (!obj) return "";
    const key = isHindi ? `${keyBase}_hi` : `${keyBase}_en`;
    // Fallback to English value if translated value doesn't exist
    return obj[key] || obj[`${keyBase}_en`] || "";
  };

  return { isHindi, getTranslated };
};
