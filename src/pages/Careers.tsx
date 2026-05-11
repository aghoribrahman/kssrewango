import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GondPattern from "@/components/shared/GondPattern";
import BurgundyRibbon from "@/components/shared/BurgundyRibbon";
import BenefitsSection from "@/features/careers/components/BenefitsSection";
import PositionsSection from "@/features/careers/components/PositionsSection";
import ApplicationProcess from "@/features/careers/components/ApplicationProcess";
import CareersCTA from "@/features/careers/components/CareersCTA";

const Careers = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  return (
    <>
      <Header />
      <main className="bg-parchment">
        {/* Hero Section */}
        <section className="relative pt-36 md:pt-44 pb-20 md:pb-24 px-6 md:px-10 overflow-hidden">
          <GondPattern className="absolute -top-20 -right-20 w-[28rem] h-[28rem] text-primary/10 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-5"
            >
              <BurgundyRibbon className="w-4 h-5" />
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                {t("careers.eyebrow")}
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.02] max-w-5xl ${isHindi ? "leading-[1.1]" : ""}`}
            >
              {t("careers.heading")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-2xl text-foreground/65 text-base md:text-lg leading-relaxed"
            >
              {t("careers.subtitle")}
            </motion.p>
          </div>
        </section>

        <BenefitsSection isHindi={isHindi} />
        <PositionsSection isHindi={isHindi} />
        <ApplicationProcess isHindi={isHindi} />
        <CareersCTA isHindi={isHindi} />
      </main>
      <Footer />
    </>
  );
};

export default Careers;
