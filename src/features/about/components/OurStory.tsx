import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/shared/SectionContainer";

const OurStory = () => {
  const { t, i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  return (
    <SectionContainer className="bg-parchment-deep/30">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
            {t("about.story.eyebrow")}
          </p>
          <h2 className={`font-serif text-4xl md:text-5xl text-foreground leading-tight mb-8 ${isHindi ? "leading-[1.1]" : ""}`}>
            {t("about.story.heading")}
          </h2>
          <div className="space-y-5 text-foreground/75 leading-relaxed text-base">
            {(t("about.story.paragraphs", { returnObjects: true }) as string[]).map(
              (para, i) => (
                <p key={i}>{para}</p>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:pl-8"
        >
          <div className="rounded-2xl bg-parchment-deep/60 border border-border/60 p-8 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-2">
                {t("about.story.foundedLabel")}
              </p>
              <p className="font-serif text-3xl text-foreground">2023</p>
            </div>
            <div className="border-t border-border/40 pt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-2">
                {t("about.story.districtsLabel")}
              </p>
              <p className="font-serif text-3xl text-foreground">
                {t("about.story.districts")}
              </p>
            </div>
            <div className="border-t border-border/40 pt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-2">
                {t("about.story.campsLabel")}
              </p>
              <p className="font-serif text-3xl text-foreground">
                {t("about.story.camps")}
              </p>
            </div>
            <div className="border-t border-border/40 pt-8">
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-2">
                {t("about.story.screeningsLabel")}
              </p>
              <p className="font-serif text-3xl text-foreground">
                {t("about.story.screenings")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default OurStory;
