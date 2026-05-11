import { useTranslation } from "react-i18next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import GondPattern from "@/components/shared/GondPattern";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { motion } from "framer-motion";
import ServiceStats from "@/features/services/components/ServiceStats";
import ServiceCTA from "@/features/services/components/ServiceCTA";
import { ClipboardCheck, Truck, Users } from "lucide-react";

const TBManagement = () => {
  const { t } = useTranslation();

  const services = (t("tbPage.services.items", { returnObjects: true }) as any[]);
  const icons = [<Truck key="1" />, <ClipboardCheck key="2" />, <Users key="3" />];

  return (
    <div className="min-h-screen bg-parchment">
      <Header />
      <main>
        <PageHero
          eyebrow={t("tbPage.eyebrow")}
          heading={t("tbPage.heading")}
          subtitle={t("tbPage.subtitle")}
        />

        {/* About Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 relative overflow-hidden">
          <GondPattern className="absolute -left-20 top-0 w-64 h-64 text-primary/5 rotate-[-12deg]" />
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-video lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl order-2 lg:order-1"
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80"
                  alt="TB patient support"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-ink/40 to-transparent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <SectionHeader
                  eyebrow={t("tbPage.eyebrow")}
                  heading={t("tbPage.about.title")}
                  subtitle={t("tbPage.about.description")}
                />
                <ServiceStats stats={t("tbPage.about.stats", { returnObjects: true }) as any[]} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Interventions */}
        <section className="py-16 md:py-24 px-6 md:px-10 bg-forest text-parchment relative overflow-hidden">
          <GondPattern className="absolute right-0 bottom-0 w-96 h-96 text-white/5 opacity-20" />
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeader
              eyebrow={t("nav.services")}
              heading={t("tbPage.services.title")}
              className="mx-auto text-center mb-16"
              dark
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-amber-warm/20 text-amber-warm flex items-center justify-center mb-6">
                    {icons[index]}
                  </div>
                  <h3 className="font-serif text-xl mb-4">{service.title}</h3>
                  <p className="text-parchment/70 leading-relaxed">{service.description}</p>
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

export default TBManagement;
