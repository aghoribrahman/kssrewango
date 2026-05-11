import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GondPattern from "@/components/shared/GondPattern";
import { STORIES } from "@/data/stories";
import StoryCard from "@/features/stories/components/StoryCard";
import StoryDialog from "@/features/stories/components/StoryDialog";

const Stories = () => {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(null);
  const openStory = STORIES.find((s) => s.id === openId) ?? null;

  return (
    <>
      <Header />
      <main className="bg-parchment">
        {/* Editorial header */}
        <section className="relative pt-36 md:pt-44 pb-20 md:pb-24 px-6 md:px-10 overflow-hidden">
          <GondPattern className="absolute -top-20 -right-20 w-[28rem] h-[28rem] text-primary/10 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
              {t("stories.eyebrow")}
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[1.02] max-w-5xl">
              {t("stories.heading")}
            </h1>
            <p className="mt-7 max-w-2xl text-foreground/65 text-base md:text-lg leading-relaxed">
              {t("stories.subtitle")}
            </p>
          </div>
        </section>

        <section className="px-6 md:px-10 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 auto-rows-fr">
              {STORIES.map((story, i) => (
                <StoryCard key={story.id} story={story} index={i} onOpen={setOpenId} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-forest text-parchment py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-warm/90 mb-4">
              {t("stories.contributeEyebrow")}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-5">
              {t("stories.contributeHeading")}
            </h2>
            <p className="text-parchment/70 leading-relaxed">
              {t("stories.contributeBody")}
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <StoryDialog story={openStory} onClose={() => setOpenId(null)} />
    </>
  );
};

export default Stories;
