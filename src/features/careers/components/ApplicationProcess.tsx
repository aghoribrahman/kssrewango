import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import GondPattern from "@/components/shared/GondPattern";
import { STEPS } from "../constants";

interface ApplicationProcessProps {
  isHindi: boolean;
}

const ApplicationProcess = ({ isHindi }: ApplicationProcessProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-forest text-parchment overflow-hidden relative">
      <GondPattern className="absolute -top-10 right-0 w-[26rem] h-[26rem] text-amber-warm/15 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-amber-warm/90 mb-5">
            {t("careers.process.eyebrow")}
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl leading-tight ${isHindi ? "leading-[1.1]" : ""}`}>
            {t("careers.process.heading")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </section>
  );
};

export default ApplicationProcess;
