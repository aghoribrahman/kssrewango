import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Heart, Stethoscope, BookOpen, Languages, HandHeart, Laptop, Users, Quote, ArrowRight, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GondPattern from "@/components/GondPattern";
import BurgundyRibbon from "@/components/BurgundyRibbon";
import { useLocalePath } from "@/hooks/useLocalePath";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Volunteer = () => {
  const { t, i18n } = useTranslation();
  const { localePath } = useLocalePath();
  const isHindi = i18n.language === "hi";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interests: {
      medical: false,
      educator: false,
      translator: false,
      fundraising: false,
      remote: false,
    },
  });

  const opportunities = [
    {
      icon: Stethoscope,
      titleKey: "volunteer.opportunities.medical.title",
      descriptionKey: "volunteer.opportunities.medical.description",
    },
    {
      icon: BookOpen,
      titleKey: "volunteer.opportunities.educator.title",
      descriptionKey: "volunteer.opportunities.educator.description",
    },
    {
      icon: Languages,
      titleKey: "volunteer.opportunities.translator.title",
      descriptionKey: "volunteer.opportunities.translator.description",
    },
    {
      icon: HandHeart,
      titleKey: "volunteer.opportunities.fundraising.title",
      descriptionKey: "volunteer.opportunities.fundraising.description",
    },
    {
      icon: Laptop,
      titleKey: "volunteer.opportunities.remote.title",
      descriptionKey: "volunteer.opportunities.remote.description",
    },
  ];

  const testimonials = [
    {
      id: "priya",
      quoteKey: "volunteer.testimonials.priya.quote",
      nameKey: "volunteer.testimonials.priya.name",
      roleKey: "volunteer.testimonials.priya.role",
    },
    {
      id: "rajesh",
      quoteKey: "volunteer.testimonials.rajesh.quote",
      nameKey: "volunteer.testimonials.rajesh.name",
      roleKey: "volunteer.testimonials.rajesh.role",
    },
    {
      id: "anjali",
      quoteKey: "volunteer.testimonials.anjali.quote",
      nameKey: "volunteer.testimonials.anjali.name",
      roleKey: "volunteer.testimonials.anjali.role",
    },
  ];

  const steps = [
    {
      number: "01",
      titleKey: "volunteer.steps.step1.title",
      descriptionKey: "volunteer.steps.step1.description",
    },
    {
      number: "02",
      titleKey: "volunteer.steps.step2.title",
      descriptionKey: "volunteer.steps.step2.description",
    },
    {
      number: "03",
      titleKey: "volunteer.steps.step3.title",
      descriptionKey: "volunteer.steps.step3.description",
    },
  ];

  const handleInterestChange = (key: keyof typeof formData.interests) => {
    setFormData((prev) => ({
      ...prev,
      interests: {
        ...prev.interests,
        [key]: !prev.interests[key],
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a success message
    alert(t("volunteer.form.success"));
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      interests: {
        medical: false,
        educator: false,
        translator: false,
        fundraising: false,
        remote: false,
      },
    });
  };

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
                {t("volunteer.eyebrow")}
              </p>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.02] max-w-5xl ${isHindi ? "leading-[1.1]" : ""}`}
            >
              {t("volunteer.heading")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-2xl text-foreground/65 text-base md:text-lg leading-relaxed"
            >
              {t("volunteer.subtitle")}
            </motion.p>
          </div>
        </section>

        {/* Volunteer Opportunities Section */}
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
                {t("volunteer.opportunities.eyebrow")}
              </p>
              <h2 className={`font-serif text-4xl md:text-5xl text-foreground leading-tight ${isHindi ? "leading-[1.1]" : ""}`}>
                {t("volunteer.opportunities.heading")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.map((opportunity, i) => {
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
          </div>
        </section>

        {/* Testimonials Section */}
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
                {t("volunteer.testimonials.eyebrow")}
              </p>
              <h2 className={`font-serif text-4xl md:text-5xl text-foreground leading-tight ${isHindi ? "leading-[1.1]" : ""}`}>
                {t("volunteer.testimonials.heading")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-2xl bg-parchment-deep/60 border border-border/60 p-8"
                >
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground/75 leading-relaxed mb-6 italic">
                    {t(testimonial.quoteKey)}
                  </p>
                  <div className="pt-4 border-t border-border/40">
                    <p className="font-serif text-lg text-foreground">
                      {t(testimonial.nameKey)}
                    </p>
                    <p className="text-sm text-foreground/60">
                      {t(testimonial.roleKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Join Section */}
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
                {t("volunteer.steps.eyebrow")}
              </p>
              <h2 className={`font-serif text-4xl md:text-5xl leading-tight ${isHindi ? "leading-[1.1]" : ""}`}>
                {t("volunteer.steps.heading")}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
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

        {/* Interest Form Section */}
        <section className="py-20 md:py-28 px-6 md:px-10 bg-parchment-deep/30">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
                {t("volunteer.form.eyebrow")}
              </p>
              <h2 className={`font-serif text-4xl md:text-5xl text-foreground leading-tight ${isHindi ? "leading-[1.1]" : ""}`}>
                {t("volunteer.form.heading")}
              </h2>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="rounded-2xl bg-parchment-deep/60 border border-border/60 p-8 md:p-10 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("volunteer.form.name")}</Label>
                  <Input
                    id="name"
                    placeholder={t("volunteer.form.namePlaceholder")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("volunteer.form.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("volunteer.form.emailPlaceholder")}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t("volunteer.form.phone")}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t("volunteer.form.phonePlaceholder")}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white/50"
                />
              </div>

              <div className="space-y-3">
                <Label>{t("volunteer.form.interests")}</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { key: "medical", label: t("volunteer.form.medical") },
                    { key: "educator", label: t("volunteer.form.educator") },
                    { key: "translator", label: t("volunteer.form.translator") },
                    { key: "fundraising", label: t("volunteer.form.fundraising") },
                    { key: "remote", label: t("volunteer.form.remote") },
                  ].map((item) => (
                    <div key={item.key} className="flex items-center space-x-2">
                      <Checkbox
                        id={item.key}
                        checked={formData.interests[item.key as keyof typeof formData.interests]}
                        onCheckedChange={() => handleInterestChange(item.key as keyof typeof formData.interests)}
                      />
                      <Label htmlFor={item.key} className="text-sm cursor-pointer">
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t("volunteer.form.message")}</Label>
                <Textarea
                  id="message"
                  placeholder={t("volunteer.form.messagePlaceholder")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="bg-white/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 bg-primary hover:bg-terracotta-deep text-parchment rounded-full gap-2 text-base"
              >
                {t("volunteer.form.submit")}
                <Send className="w-4 h-4" />
              </Button>
            </motion.form>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 px-6 md:px-10 bg-forest text-parchment">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-amber-warm/90 mb-5">
                {t("volunteer.cta.eyebrow")}
              </p>
              <h2 className={`font-serif text-4xl md:text-5xl leading-tight mb-6 ${isHindi ? "leading-[1.1]" : ""}`}>
                {t("volunteer.cta.heading")}
              </h2>
              <p className="text-parchment/70 text-base md:text-lg leading-relaxed mb-10">
                {t("volunteer.cta.body")}
              </p>
              <Link
                to={localePath("donate")}
                className="inline-flex items-center gap-2 bg-amber-warm text-amber-950 hover:bg-amber-soft px-7 py-3.5 rounded-full text-sm tracking-wide font-medium transition-colors duration-300"
              >
                {t("volunteer.cta.button")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Volunteer;
