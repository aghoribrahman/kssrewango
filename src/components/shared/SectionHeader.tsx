import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  isHindi?: boolean;
  className?: string;
  headingClassName?: string;
  dark?: boolean;
}

export const SectionHeader = ({
  eyebrow,
  heading,
  subtitle,
  isHindi,
  className = "mb-12",
  headingClassName = "",
  dark = false,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${className}`}
    >
      {eyebrow && (
        <p className={`text-xs uppercase tracking-[0.3em] mb-5 ${dark ? "text-amber-warm/90" : "text-primary"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-4xl md:text-5xl leading-tight ${dark ? "text-parchment" : "text-foreground"} ${isHindi ? "leading-[1.1]" : ""} ${headingClassName}`}>
        {heading}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${dark ? "text-parchment/70" : "text-foreground/65"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
