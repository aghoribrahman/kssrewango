import { useTranslation } from "react-i18next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import GondPattern from "@/components/shared/GondPattern";
import { SectionHeader } from "@/components/shared/SectionHeader";
import AnimateIn from "@/components/shared/AnimateIn";
import ServiceStats from "@/features/services/components/ServiceStats";
import ServiceCTA from "@/features/services/components/ServiceCTA";
import { ReactNode } from "react";

interface ServiceLayoutProps {
  pageKey: string;
  aboutImage: string;
  aboutImageAlt: string;
  serviceIcons: ReactNode[];
  aboutSectionReverse?: boolean;
  servicesSectionTheme?: "light" | "dark" | "terracotta" | "forest";
}

const ServiceLayout = ({
  pageKey,
  aboutImage,
  aboutImageAlt,
  serviceIcons,
  aboutSectionReverse = false,
  servicesSectionTheme = "light",
}: ServiceLayoutProps) => {
  const { t } = useTranslation();
  const services = (t(`${pageKey}.services.items`, { returnObjects: true }) as any[]);
  const aboutStats = (t(`${pageKey}.about.stats`, { returnObjects: true }) as any[]);

  const themes = {
    light: {
      section: "bg-white/50",
      card: "bg-white hover:shadow-md border-border/50",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      text: "text-foreground",
      subtitle: "text-foreground/70",
      darkHeader: false,
    },
    dark: {
      section: "bg-forest text-parchment",
      card: "bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/15",
      iconBg: "bg-amber-warm/20",
      iconColor: "text-amber-warm",
      text: "text-parchment",
      subtitle: "text-parchment/70",
      darkHeader: true,
    },
    terracotta: {
       section: "bg-terracotta/5",
       card: "bg-white hover:border-terracotta/30 border-border/50 hover:shadow-sm",
       iconBg: "bg-terracotta/10",
       iconColor: "text-terracotta",
       text: "text-earth-ink",
       subtitle: "text-foreground/70",
       darkHeader: false,
    },
    forest: {
       section: "bg-forest/5",
       card: "bg-white hover:shadow-md border-border/50",
       iconBg: "bg-primary/10",
       iconColor: "text-primary",
       text: "text-earth-ink",
       subtitle: "text-foreground/70",
       darkHeader: false,
    }
  };

  const theme = themes[servicesSectionTheme];

  return (
    <div className="min-h-screen bg-parchment">
      <Header />
      <main>
        <PageHero
          eyebrow={t(`${pageKey}.eyebrow`)}
          heading={t(`${pageKey}.heading`)}
          subtitle={t(`${pageKey}.subtitle`)}
        />

        {/* About Section */}
        <section className="py-16 md:py-24 px-6 md:px-10 relative overflow-hidden">
          <GondPattern className={`absolute w-64 h-64 text-primary/5 ${aboutSectionReverse ? "-left-20 top-0 rotate-[-12deg]" : "right-0 bottom-0"}`} />
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimateIn
                direction={aboutSectionReverse ? "right" : "left"}
                className={aboutSectionReverse ? "order-1 lg:order-2" : ""}
              >
                <SectionHeader
                  eyebrow={t(`${pageKey}.eyebrow`)}
                  heading={t(`${pageKey}.about.title`)}
                  subtitle={t(`${pageKey}.about.description`)}
                />
                <ServiceStats stats={aboutStats} />
              </AnimateIn>
              <AnimateIn
                direction="none"
                className={`relative aspect-video lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl ${aboutSectionReverse ? "order-2 lg:order-1" : ""}`}
              >
                <img
                  src={aboutImage}
                  alt={aboutImageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-ink/40 to-transparent" />
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className={`py-16 md:py-24 px-6 md:px-10 relative overflow-hidden ${theme.section}`}>
          {servicesSectionTheme === "dark" && <GondPattern className="absolute right-0 bottom-0 w-96 h-96 text-white/5 opacity-20" />}
          <div className="max-w-7xl mx-auto relative z-10">
            <SectionHeader
              eyebrow={t("nav.services")}
              heading={t(`${pageKey}.services.title`)}
              className="mx-auto text-center mb-16"
              dark={theme.darkHeader}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {services.map((service, index) => (
                <AnimateIn
                  key={index}
                  delay={index * 0.1}
                  className={`p-8 rounded-3xl border transition-all group ${theme.card}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${theme.iconBg} ${theme.iconColor}`}>
                    {serviceIcons[index]}
                  </div>
                  <h3 className={`font-serif text-xl mb-4 ${theme.text}`}>{service.title}</h3>
                  <p className={`leading-relaxed ${theme.subtitle}`}>{service.description}</p>
                </AnimateIn>
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

export default ServiceLayout;
