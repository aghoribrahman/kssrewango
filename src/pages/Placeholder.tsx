import { useTranslation } from "react-i18next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Placeholder = ({ titleKey }: { titleKey: string }) => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <main className="min-h-[80vh] flex items-center justify-center px-6 pt-32 pb-20 bg-parchment">
        <div className="max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4">
            {t("org.name")}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
            {t(titleKey)}
          </h1>
          <p className="text-foreground/60 leading-relaxed">
            This page is being prepared. The bilingual foundations are in place — content arrives next.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Placeholder;
