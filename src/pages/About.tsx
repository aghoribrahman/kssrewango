import { useTranslation } from "react-i18next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import OurStory from "@/features/about/components/OurStory";
import MissionVision from "@/features/about/components/MissionVision";
import Values from "@/features/about/components/Values";
import CTASection from "@/components/shared/CTASection";

const About = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  return (
    <>
      <Header />
      <main className="bg-parchment">
        <PageHero
          eyebrow={t("about.eyebrow")}
          heading={t("about.heading")}
          subtitle={t("about.subtitle")}
          isHindi={isHindi}
        />
        <OurStory />
        <MissionVision />
        <Values />
        <CTASection
          eyebrow={t("about.cta.eyebrow")}
          heading={t("about.cta.heading")}
          body={t("about.cta.body")}
          primaryCtaText={t("about.cta.donate")}
          primaryCtaLink="donate"
          secondaryCtaText={t("about.cta.stories")}
          secondaryCtaLink="stories"
          isHindi={isHindi}
        />
      </main>
      <Footer />
    </>
  );
};

export default About;
