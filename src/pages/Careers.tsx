import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Heart, Briefcase, GraduationCap, Users, MapPin, Clock, ArrowRight, Mail } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GondPattern from "@/components/shared/GondPattern";
import BurgundyRibbon from "@/components/shared/BurgundyRibbon";
import { useLocalePath } from "@/hooks/useLocalePath";
import { Link } from "react-router-dom";

const Careers = () => {
  const { t, i18n } = useTranslation();
  const { localePath } = useLocalePath();
  const isHindi = i18n.language === "hi";

  const benefits = [
    {
      icon: Heart,
      titleKey: "careers.benefits.mission.title",
      descriptionKey: "careers.benefits.mission.description",
    },
    {
      icon: Users,
      titleKey: "careers.benefits.community.title",
      descriptionKey: "careers.benefits.community.description",
    },
    {
      icon: GraduationCap,
      titleKey: "careers.benefits.growth.title",
      descriptionKey: "careers.benefits.growth.description",
    },
    {
      icon: Briefcase,
      titleKey: "careers.benefits.culture.title",
      descriptionKey: "careers.benefits.culture.description",
    },
  ];

  const positions = [
    {
      id: "chw",
      titleKey: "careers.positions.chw.title",
      locationKey: "careers.positions.chw.location",
      typeKey: "careers.positions.chw.type",
    },
    {
      id: "coordinator",
      titleKey: "careers.positions.coordinator.title",
      locationKey: "careers.positions.coordinator.location",
      typeKey: "careers.positions.coordinator.type",
    },
    {
      id: "analyst",
      titleKey: "careers.positions.analyst.title",
      locationKey: "careers.positions.analyst.location",
      typeKey: "careers.positions.analyst.type",
    },
    {
      id: "communications",
      titleKey: "careers.positions.communications.title",
      locationKey: "careers.positions.communications.location",
      typeKey: "careers.positions.communications.type",
    },
    {
      id: "medical",
      titleKey: "careers.positions.medical.title",
      locationKey: "careers.positions.medical.location",
      typeKey: "careers.positions.medical.type",
    },
  ];

  const steps = [
    {
      number: "01",
      titleKey: "careers.process.step1.title",
      descriptionKey: "careers.process.step1.description",
    },
    {
      number: "02",
      titleKey: "careers.process.step2.title",
      descriptionKey: "careers.process.step2.description",
    },
    {
      number: "03",
      titleKey: "careers.process.step3.title",
      descriptionKey: "careers.process.step3.description",
    },
    {
      number: "04",
      titleKey: "careers.process.step4.title",
      descriptionKey: "careers.process.step4.description",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-parchment">
        {/* Hero Section */}
        <section className="relative pt-36 md:pt-44 pb-20 md:pb-24 px-6 md:px-10 overflow-hidden">
          <GondPattern className="absolute -top-20 -right-20 w-[28rem] h-[28rem] text-primary/10 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-5"
            >
              <BurgundyRibbon className="w-4 h-5" />
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                {t("careers.eyebrow")}
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.02] max-w-5xl ${isHindi ? "leading-[1.1]" : ""}`}
            >
              {t("careers.heading")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-2xl text-foreground/65 text-base md:text-lg leading-relaxed"
            >
              {t("careers.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Why Work With Us Section */}
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
              {benefits.map((benefit, i) => {
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

        {/* Open Positions Section */}
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
              {positions.map((position, i) => (
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

        {/* Application Process Section */}
        <section className="py-20 md:py-28 px-6 md:px-10 bg-forest text-parchment overflow-hidden">
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
              {steps.map((step, i) => (
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

        {/* CTA Section */}
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
      </main>
      <Footer />
    </>
  );
};

export default Careers;
