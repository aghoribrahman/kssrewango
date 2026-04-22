import { useTranslation } from "react-i18next";
import CountUp from "@/components/CountUp";
import GondPattern from "@/components/GondPattern";

interface Stat {
  value: number;
  suffix: string;
  labelKey: string;
  helperKey: string;
}

const STATS: Stat[] = [
  { value: 50000, suffix: "+", labelKey: "impact.screenings.label", helperKey: "impact.screenings.helper" },
  { value: 12000, suffix: "+", labelKey: "impact.lives.label", helperKey: "impact.lives.helper" },
  { value: 6, suffix: "", labelKey: "impact.districts.label", helperKey: "impact.districts.helper" },
  { value: 240, suffix: "+", labelKey: "impact.camps.label", helperKey: "impact.camps.helper" },
];

const ImpactStats = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language === "hi" ? "hi-IN" : "en-IN";

  return (
    <section className="relative bg-forest text-parchment overflow-hidden py-14 md:py-20">
      <GondPattern
        className="absolute -top-10 right-0 w-[26rem] h-[26rem] text-amber-warm/15 pointer-events-none"
      />
      <GondPattern
        className="absolute -bottom-10 -left-10 w-[22rem] h-[22rem] text-terracotta/15 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-warm/90 mb-3">
            {t("impact.eyebrow")}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            {t("impact.heading")}
          </h2>
          <p className="mt-4 text-parchment/70 text-sm md:text-base leading-relaxed">
            {t("impact.subtitle")}
          </p>
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-parchment/10 rounded-2xl overflow-hidden">
          {STATS.map((stat) => (
            <div
              key={stat.labelKey}
              className="bg-forest p-5 md:p-6 flex flex-col gap-1.5"
            >
              <dd className="font-serif text-3xl md:text-5xl text-amber-warm leading-none">
                <CountUp end={stat.value} suffix={stat.suffix} locale={locale} />
              </dd>
              <dt className="text-sm md:text-base text-parchment font-medium mt-3">
                {t(stat.labelKey)}
              </dt>
              <p className="text-xs md:text-sm text-parchment/60 leading-relaxed">
                {t(stat.helperKey)}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ImpactStats;
