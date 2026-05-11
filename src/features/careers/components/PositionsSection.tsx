import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { POSITIONS } from "../constants";

interface PositionsSectionProps {
  isHindi: boolean;
}

const PositionsSection = ({ isHindi }: PositionsSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-parchment">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
            {t("careers.positions.eyebrow")}
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl text-foreground leading-tight ${isHindi ? "leading-[1.1]" : ""}`}>
            {t("careers.positions.heading")}
          </h2>
        </motion.div>

        <div className="space-y-4">
          {POSITIONS.map((position, i) => (
            <motion.div
              key={position.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-parchment-deep/60 border border-border/60 p-6 md:p-8 hover:border-primary/40 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-grow">
                  <h3 className="font-serif text-2xl text-foreground mb-3">
                    {t(position.titleKey)}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{t(position.locationKey)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{t(position.typeKey)}</span>
                    </div>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-terracotta-deep px-6 py-3 rounded-full text-sm font-medium transition-colors shrink-0">
                  {t("careers.positions.apply")}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositionsSection;
