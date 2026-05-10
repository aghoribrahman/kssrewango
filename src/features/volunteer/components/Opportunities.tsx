import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { OPPORTUNITIES } from "../constants";

const Opportunities = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  return (
    <SectionContainer className="bg-parchment-deep/30">
      <SectionHeader
        eyebrow={t("volunteer.opportunities.eyebrow")}
        heading={t("volunteer.opportunities.heading")}
        isHindi={isHindi}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OPPORTUNITIES.map((opportunity, i) => {
          const Icon = opportunity.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl bg-parchment-deep/60 border border-border/60 p-8 hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">
                {t(opportunity.titleKey)}
              </h3>
              <p className="text-foreground/65 leading-relaxed">
                {t(opportunity.descriptionKey)}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default Opportunities;
