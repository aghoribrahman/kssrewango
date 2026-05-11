import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface CareersCTAProps {
  isHindi: boolean;
}

const CareersCTA = ({ isHindi }: CareersCTAProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-parchment-deep/30">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
            {t("careers.cta.eyebrow")}
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6 ${isHindi ? "leading-[1.1]" : ""}`}>
            {t("careers.cta.heading")}
          </h2>
          <p className="text-foreground/65 text-base md:text-lg leading-relaxed mb-10">
            {t("careers.cta.body")}
          </p>
          <a
            href="mailto:careers@kiranseva.org"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-terracotta-deep px-7 py-3.5 rounded-full text-sm tracking-wide font-medium transition-colors duration-300"
          >
            {t("careers.cta.button")}
            <Mail className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersCTA;
