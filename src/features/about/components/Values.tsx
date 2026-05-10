import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import GondPattern from "@/components/shared/GondPattern";
import { VALUES } from "../constants";

const Values = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  return (
    <SectionContainer className="bg-forest text-parchment overflow-hidden relative">
      <GondPattern className="absolute -top-10 right-0 w-[26rem] h-[26rem] text-amber-warm/15 pointer-events-none" />
      
      <div className="relative z-10">
        <SectionHeader
          eyebrow={t("about.values.eyebrow")}
          heading={t("about.values.heading")}
          isHindi={isHindi}
          dark
        />

        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`rounded-2xl bg-parchment/10 border border-parchment/20 p-8 ${value.large ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-warm/20 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-amber-warm" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl mb-3">
                      {t(value.titleKey)}
                    </h3>
                    <p className="text-parchment/70 leading-relaxed">
                      {t(value.descriptionKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Values;
