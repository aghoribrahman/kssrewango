import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TESTIMONIALS } from "../constants";

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  return (
    <SectionContainer className="bg-parchment">
      <SectionHeader
        eyebrow={t("volunteer.testimonials.eyebrow")}
        heading={t("volunteer.testimonials.heading")}
        isHindi={isHindi}
      />

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, i) => (
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
    </SectionContainer>
  );
};

export default Testimonials;
