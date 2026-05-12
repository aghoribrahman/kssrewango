import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLocalePath } from "@/hooks/useLocalePath";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateIn from "@/components/shared/AnimateIn";

const ServiceCTA = () => {
  const { t } = useTranslation();
  const { localePath } = useLocalePath();

  return (
    <section className="py-12 md:py-20 px-6 md:px-10">
      <div className="max-w-5xl mx-auto bg-forest text-parchment rounded-3xl p-8 md:p-16 relative overflow-hidden text-center">
        <AnimateIn
          direction="none"
          className="relative z-10"
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-4 md:mb-6 leading-tight">
            {t("about.cta.heading")}
          </h2>
          <p className="text-parchment/70 max-w-2xl mx-auto mb-8 md:mb-10 text-base md:text-lg">
            {t("about.cta.body")}
          </p>
          <div className="flex flex-col xs:flex-row gap-4 justify-center items-stretch xs:items-center">
            <Button asChild variant="amber" rounded="full" size="lg">
              <Link to={localePath("donate")}>
                {t("about.cta.donate")}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" rounded="full" size="lg" className="border border-parchment/30 text-parchment hover:bg-parchment/10">
              <Link to={localePath("volunteer")}>
                {t("nav.volunteer")}
              </Link>
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default ServiceCTA;
