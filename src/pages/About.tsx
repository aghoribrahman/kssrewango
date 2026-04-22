import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Heart, Shield, Users, BookOpen, Target, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GondPattern from "@/components/GondPattern";
import BurgundyRibbon from "@/components/BurgundyRibbon";
import { useLocalePath } from "@/hooks/useLocalePath";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  const { t, i18n } = useTranslation();
  const { localePath } = useLocalePath();
  const isHindi = i18n.language === "hi";

  const missionCards = [
    {
      icon: Heart,
      titleKey: "about.mission.cards.care.title",
      descriptionKey: "about.mission.cards.care.description",
    },
    {
      icon: BookOpen,
      titleKey: "about.mission.cards.awareness.title",
      descriptionKey: "about.mission.cards.awareness.description",
    },
    {
      icon: Shield,
      titleKey: "about.mission.cards.dignity.title",
      descriptionKey: "about.mission.cards.dignity.description",
    },
  ];

  const values = [
    {
      icon: Users,
      titleKey: "about.values.items.community.title",
      descriptionKey: "about.values.items.community.description",
      large: true,
    },
    {
      icon: Target,
      titleKey: "about.values.items.transparency.title",
      descriptionKey: "about.values.items.transparency.description",
      large: false,
    },
    {
      icon: Award,
      titleKey: "about.values.items.impact.title",
      descriptionKey: "about.values.items.impact.description",
      large: false,
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
                {t("about.eyebrow")}
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.02] max-w-5xl ${isHindi ? "leading-[1.1]" : ""}`}
            >
              {t("about.heading")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-2xl text-foreground/65 text-base md:text-lg leading-relaxed"
            >
              {t("about.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 md:py-28 px-6 md:px-10 bg-parchment-deep/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
                  {t("about.story.eyebrow")}
                </p>
                <h2 className={`font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8 ${isHindi ? "leading-[1.1]" : ""}`}>
                  {t("about.story.heading")}
                </h2>
                <div className="space-y-5 text-foreground/75 leading-relaxed text-base">
                  {(t("about.story.paragraphs", { returnObjects: true }) as string[]).map(
                    (para, i) => (
                      <p key={i}>{para}</p>
                    )
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:pl-8"
              >
                <div className="rounded-2xl bg-parchment-deep/60 border border-border/60 p-8 space-y-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-2">
                      {t("about.story.foundedLabel")}
                    </p>
                    <p className="font-serif text-3xl text-foreground">2023</p>
                  </div>
                  <div className="border-t border-border/40 pt-8">
                    <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-2">
                      {t("about.story.districtsLabel")}
                    </p>
                    <p className="font-serif text-3xl text-foreground">
                      {t("about.story.districts")}
                    </p>
                  </div>
                  <div className="border-t border-border/40 pt-8">
                    <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-2">
                      {t("about.story.campsLabel")}
                    </p>
                    <p className="font-serif text-3xl text-foreground">
                      {t("about.story.camps")}
                    </p>
                  </div>
                  <div className="border-t border-border/40 pt-8">
                    <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-2">
                      {t("about.story.screeningsLabel")}
                    </p>
                    <p className="font-serif text-3xl text-foreground">
                      {t("about.story.screenings")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
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
                {t("about.mission.eyebrow")}
              </p>
              <h2 className={`font-serif text-4xl md:text-5xl text-foreground leading-tight ${isHindi ? "leading-[1.1]" : ""}`}>
                {t("about.mission.heading")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {missionCards.map((card, i) => {
                const Icon = card.icon;
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
                    <h3 className="font-serif text-2xl text-foreground mb-3">
                      {t(card.titleKey)}
                    </h3>
                    <p className="text-foreground/65 leading-relaxed">
                      {t(card.descriptionKey)}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section (Bento Grid) */}
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
                {t("about.values.eyebrow")}
              </p>
              <h2 className={`font-serif text-4xl md:text-5xl leading-tight ${isHindi ? "leading-[1.1]" : ""}`}>
                {t("about.values.heading")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, i) => {
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
                {t("about.cta.eyebrow")}
              </p>
              <h2 className={`font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6 ${isHindi ? "leading-[1.1]" : ""}`}>
                {t("about.cta.heading")}
              </h2>
              <p className="text-foreground/65 text-base md:text-lg leading-relaxed mb-10">
                {t("about.cta.body")}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to={localePath("donate")}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-terracotta-deep px-7 py-3.5 rounded-full text-sm tracking-wide font-medium transition-colors duration-300"
                >
                  {t("about.cta.donate")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to={localePath("stories")}
                  className="inline-flex items-center gap-2 border border-border text-foreground hover:bg-foreground/5 px-7 py-3.5 rounded-full text-sm tracking-wide transition-colors duration-300"
                >
                  {t("about.cta.stories")}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
