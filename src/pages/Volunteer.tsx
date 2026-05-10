import { useTranslation } from "react-i18next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import Opportunities from "@/features/volunteer/components/Opportunities";
import Testimonials from "@/features/volunteer/components/Testimonials";
import Steps from "@/features/volunteer/components/Steps";
import VolunteerForm from "@/features/volunteer/components/VolunteerForm";
import CTASection from "@/components/shared/CTASection";

const Volunteer = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  return (
    <>
      <Header />
      <main className="bg-parchment">
        <PageHero
          eyebrow={t("volunteer.eyebrow")}
          heading={t("volunteer.heading")}
          subtitle={t("volunteer.subtitle")}
          isHindi={isHindi}
        />
        <Opportunities />
        <Testimonials />
        <Steps />
        <VolunteerForm />
        <CTASection
          eyebrow={t("volunteer.cta.eyebrow")}
          heading={t("volunteer.cta.heading")}
          body={t("volunteer.cta.body")}
          primaryCtaText={t("volunteer.cta.button")}
          primaryCtaLink="donate"
          isHindi={isHindi}
          className="bg-forest text-parchment"
        />
      </main>
      <Footer />
    </>
  );
};

export default Volunteer;
