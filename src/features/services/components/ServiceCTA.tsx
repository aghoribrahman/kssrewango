import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLocalePath } from "@/hooks/useLocalePath";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceCTA = () => {
  const { t } = useTranslation();
  const { localePath } = useLocalePath();

  return (
    <section className="py-12 md:py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto bg-forest text-parchment rounded-3xl p-8 md:p-16 relative overflow-hidden text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-4 md:mb-6 leading-tight">
            {t("about.cta.heading")}
          </h2>
          <p className="text-parchment/70 max-w-2xl mx-auto mb-8 md:mb-10 text-base md:text-lg">
            {t("about.cta.body")}
          </p>
          <div className="flex flex-col xs:flex-row gap-4 justify-center items-stretch xs:items-center">
            <Link
              to={localePath("donate")}
              className="bg-amber-warm text-amber-950 px-8 py-3.5 md:py-4 rounded-full font-medium hover:bg-white transition-colors inline-flex items-center justify-center gap-2 text-sm md:text-base"
            >
              {t("about.cta.donate")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={localePath("volunteer")}
              className="border border-parchment/30 text-parchment px-8 py-3.5 md:py-4 rounded-full font-medium hover:bg-parchment/10 transition-colors text-sm md:text-base"
            >
              {t("nav.volunteer")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;
