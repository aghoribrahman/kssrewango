import { useTranslation } from "react-i18next";
import BurgundyRibbon from "../shared/BurgundyRibbon";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-parchment/80">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <BurgundyRibbon className="w-5 h-6" />
            <span className="font-serif text-base text-parchment">{t("org.name")}</span>
          </div>
          <p className="text-sm leading-relaxed text-parchment/60 max-w-xs">
            {t("footer.tagline")}
          </p>
        </div>

        <div className="text-sm space-y-2">
          <p className="text-parchment uppercase tracking-widest text-xs mb-3">
            Madhya Pradesh
          </p>
          <p className="text-parchment/60">Anuppur · Dindori · Mandla</p>
          <p className="text-parchment/60">Shahdol · Umaria · Sidhi</p>
        </div>

        <div className="text-sm space-y-2 md:text-right">
          <p className="text-parchment uppercase tracking-widest text-xs mb-3">
            Contact
          </p>
          <p className="text-parchment/60">hello@kiranseva.org</p>
          <p className="text-parchment/60">+91 00000 00000</p>
        </div>
      </div>

      <div className="border-t border-parchment/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between gap-2 text-[10px] text-parchment/50">
          <span>© {year} {t("org.name")}. {t("footer.rights")}</span>
          <span>Made with care for the communities of Madhya Pradesh.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
