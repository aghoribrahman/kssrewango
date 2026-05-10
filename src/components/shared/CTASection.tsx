import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { useLocalePath } from "@/hooks/useLocalePath";

interface CTASectionProps {
  eyebrow: string;
  heading: string;
  body: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  isHindi?: boolean;
  className?: string;
}

const CTASection = ({
  eyebrow,
  heading,
  body,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  isHindi,
  className = "bg-parchment-deep/30",
}: CTASectionProps) => {
  const { localePath } = useLocalePath();

  return (
    <SectionContainer className={className}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
            {eyebrow}
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6 ${isHindi ? "leading-[1.1]" : ""}`}>
            {heading}
          </h2>
          <p className="text-foreground/65 text-base md:text-lg leading-relaxed mb-10">
            {body}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to={localePath(primaryCtaLink)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-terracotta-deep px-7 py-3.5 rounded-full text-sm tracking-wide font-medium transition-colors duration-300"
            >
              {primaryCtaText}
              <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                to={localePath(secondaryCtaLink)}
                className="inline-flex items-center gap-2 border border-border text-foreground hover:bg-foreground/5 px-7 py-3.5 rounded-full text-sm tracking-wide transition-colors duration-300"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default CTASection;
