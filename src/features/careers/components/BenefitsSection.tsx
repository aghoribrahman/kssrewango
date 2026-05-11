import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { BENEFITS } from "../constants";

interface BenefitsSectionProps {
  isHindi: boolean;
}

const BenefitsSection = ({ isHindi }: BenefitsSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-parchment-deep/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
            {t("careers.benefits.eyebrow")}
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl text-foreground leading-tight ${isHindi ? "leading-[1.1]" : ""}`}>
            {t("careers.benefits.heading")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-2xl bg-parchment-deep/60 border border-border/60 p-8 hover:border-primary/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {t(benefit.titleKey)}
                </h3>
                <p className="text-foreground/65 leading-relaxed text-sm">
                  {t(benefit.descriptionKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
