import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, HeartPulse } from "lucide-react";
import GondPattern from "@/components/shared/GondPattern";
import { useLocalePath } from "@/hooks/useLocalePath";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const { localePath } = useLocalePath();
  const isHindi = i18n.language === "hi";

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-forest-deep">
      {/* Layered organic background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest to-earth-ink"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18] mix-blend-screen"
      >
        <div
          className="absolute -top-32 -left-20 w-[42rem] h-[42rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--terracotta) / 0.55), transparent 65%)" }}
        />
        <div
          className="absolute bottom-[-10rem] right-[-6rem] w-[36rem] h-[36rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--amber-warm) / 0.45), transparent 65%)" }}
        />
      </div>

      {/* Gond motif overlays */}
      <GondPattern
        className="absolute -top-10 -right-10 w-[28rem] h-[28rem] text-amber-warm/15 hidden md:block"
      />
      <GondPattern
        className="absolute -bottom-16 -left-16 w-[22rem] h-[22rem] text-terracotta/15"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-center gap-3 mb-8 animate-fade-up">
          <HeartPulse className="w-5 h-5 text-amber-warm" />
          <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-amber-warm/90">
            {t("home.tagline")}
          </span>
        </div>

        <h1
          className="font-serif text-parchment leading-[0.95] mb-8 animate-fade-up max-w-4xl"
          style={{ animationDelay: "120ms" }}
        >
          <span className={`block text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] ${isHindi ? "leading-[1.1]" : ""}`}>
            {t("home.missionLine1")}
          </span>
          <span
            className={`block text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] text-amber-warm italic ${isHindi ? "not-italic leading-[1.1]" : ""}`}
          >
            {t("home.missionLine2")}
          </span>
          <span className={`block text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] ${isHindi ? "leading-[1.1]" : ""}`}>
            {t("home.missionLine3")}
          </span>
        </h1>

        <div
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-end animate-fade-up"
          style={{ animationDelay: "260ms" }}
        >
          <p className="text-parchment/75 text-base md:text-lg leading-relaxed max-w-xl">
            {t("home.subtitle")}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to={localePath("donate")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-terracotta-deep px-7 py-3.5 rounded-full text-sm tracking-wide font-medium transition-colors duration-300"
            >
              {t("home.cta.donate")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={localePath("stories")}
              className="inline-flex items-center gap-2 border border-parchment/40 text-parchment hover:bg-parchment/10 px-7 py-3.5 rounded-full text-sm tracking-wide transition-colors duration-300"
            >
              {t("home.cta.learn")}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background/40 pointer-events-none"
      />
    </section>
  );
};

export default Hero;
