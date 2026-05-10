import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import GondPattern from "@/components/shared/GondPattern";
import { STEPS } from "../constants";

const Steps = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  return (
    <SectionContainer className="bg-forest text-parchment overflow-hidden relative">
      <GondPattern className="absolute -top-10 right-0 w-[26rem] h-[26rem] text-amber-warm/15 pointer-events-none" />
      
      <div className="relative z-10">
        <SectionHeader
          eyebrow={t("volunteer.steps.eyebrow")}
          heading={t("volunteer.steps.heading")}
          isHindi={isHindi}
          dark
        />

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-serif text-amber-warm/20 mb-4">
                {step.number}
              </div>
              <h3 className="font-serif text-2xl mb-3">
                {t(step.titleKey)}
              </h3>
              <p className="text-parchment/70 leading-relaxed">
                {t(step.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Steps;
