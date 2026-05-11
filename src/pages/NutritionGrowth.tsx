import { useTranslation } from "react-i18next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import GondPattern from "@/components/shared/GondPattern";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";
import ServiceStats from "@/features/services/components/ServiceStats";
import ServiceCTA from "@/features/services/components/ServiceCTA";
import { Apple, LineChart, Home } from "lucide-react";

const NutritionGrowth = () => {
  const { t } = useTranslation();

  const services = (t("nutritionPage.services.items", { returnObjects: true }) as any[]);
  const icons = [<LineChart key="1" />, <Apple key="2" />, <Home key="3" />];

  return (
    <div className="min-h-screen bg-parchment">
      <Header />
      <main>
        <PageHero
          eyebrow={t("nutritionPage.eyebrow")}
          heading={t("nutritionPage.heading")}
          subtitle={t("nutritionPage.subtitle")}
        />

        {/* About Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 relative overflow-hidden">
          <GondPattern className="absolute right-0 bottom-0 w-80 h-80 text-primary/5" />
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <SectionHeader
                  eyebrow={t("nutritionPage.eyebrow")}
                  heading={t("nutritionPage.about.title")}
                  subtitle={t("nutritionPage.about.description")}
                />
                <ServiceStats stats={t("nutritionPage.about.stats", { returnObjects: true }) as any[]} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-video lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80"
                  alt="Nutritional food"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-ink/40 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Programs */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-terracotta/5 relative">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              eyebrow={t("nav.services")}
              heading={t("nutritionPage.services.title")}
              className="mx-auto text-center mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 hover:border-terracotta/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-terracotta/10 text-terracotta flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {icons[index]}
                  </div>
                  <h3 className="font-serif text-xl mb-4 text-earth-ink">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ServiceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default NutritionGrowth;
