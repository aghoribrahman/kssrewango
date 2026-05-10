import { useTranslation } from "react-i18next";
import { Activity, Stethoscope, Apple } from "lucide-react";
import { motion } from "framer-motion";

const PILLARS = [
  {
    id: "sickle",
    icon: Activity,
    color: "var(--ribbon)",
  },
  {
    id: "tb",
    icon: Stethoscope,
    color: "var(--tb)",
  },
  {
    id: "nutrition",
    icon: Apple,
    color: "var(--nutrition)",
  },
];

const ServicePillars = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-parchment relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white/50 border border-border/50 hover:border-border transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `hsl(${pillar.color} / 0.1)` }}
                >
                  <Icon className="w-7 h-7" style={{ color: `hsl(${pillar.color})` }} />
                </div>
                <h3 className="font-serif text-2xl mb-4 text-foreground">
                  {t(`home.pillars.${pillar.id}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`home.pillars.${pillar.id}.description`)}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium transition-colors" style={{ color: `hsl(${pillar.color})` }}>
                  <span className="w-8 h-px bg-current opacity-30" />
                  {t("home.cta.learn")}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicePillars;
