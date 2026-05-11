import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GondPattern from "@/components/shared/GondPattern";
import { GALLERY_ITEMS } from "@/data/gallery";
import StoryCard from "@/features/stories/components/StoryCard";
import StoryDialog from "@/features/stories/components/StoryDialog";

const Gallery = () => {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(null);
  const openStory = GALLERY_ITEMS.find((s) => s.id === openId) ?? null;

  return (
    <>
      <Header />
      <main className="bg-parchment pt-20">
        {/* Editorial header */}
        <section className="relative pt-12 md:pt-20 pb-12 md:pb-16 px-6 md:px-10 overflow-hidden">
          <GondPattern className="absolute -top-20 -right-20 w-[24rem] h-[24rem] text-primary/10 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
              {t("gallery.eyebrow")}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.02] max-w-4xl">
              {t("gallery.heading")}
            </h1>
            <p className="mt-6 max-w-2xl text-foreground/65 text-base md:text-lg leading-relaxed">
              {t("gallery.subtitle")}
            </p>
          </div>
        </section>

        {/* Gallery Grid - Reusing StoryCard */}
        <section className="px-6 md:px-10 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 auto-rows-fr">
              {GALLERY_ITEMS.map((item, i) => (
                <StoryCard 
                  key={item.id} 
                  story={item} 
                  index={i} 
                  onOpen={setOpenId} 
                  translationBase="gallery"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StoryDialog 
        story={openStory} 
        onClose={() => setOpenId(null)} 
        translationBase="gallery"
      />
    </>
  );
};

export default Gallery;
