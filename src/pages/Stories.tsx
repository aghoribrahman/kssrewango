import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GondPattern from "@/components/GondPattern";
import BurgundyRibbon from "@/components/BurgundyRibbon";
import { STORIES, type Story } from "@/data/stories";
import { cn } from "@/lib/utils";

const StoryCard = ({
  story,
  index,
  onOpen,
}: {
  story: Story;
  index: number;
  onOpen: (id: string) => void;
}) => {
  const { t } = useTranslation();
  const isFeatured = index === 0;

  return (
    <article
      className={cn(
        "group relative animate-fade-up",
        isFeatured ? "md:col-span-2 md:row-span-2" : "",
      )}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button
        type="button"
        onClick={() => onOpen(story.id)}
        className="block w-full text-left"
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl bg-parchment-deep",
            isFeatured ? "aspect-[4/5] md:aspect-[5/6]" : "aspect-[4/5]",
          )}
        >
          <img
            src={story.image}
            alt={t(`stories.items.${story.id}.alt`)}
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-earth-ink/85 via-earth-ink/20 to-transparent"
          />
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parchment/90 text-foreground text-xs tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {story.district}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-parchment">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-warm/90 mb-3">
              {t(`stories.items.${story.id}.name`)} ·{" "}
              <span>
                {story.age} {t(story.ageLabelKey)}
              </span>
            </p>
            <h3
              className={cn(
                "font-serif leading-tight",
                isFeatured ? "text-3xl md:text-5xl" : "text-xl md:text-2xl",
              )}
            >
              {t(`stories.items.${story.id}.headline`)}
            </h3>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-parchment/85 group-hover:text-amber-warm transition-colors">
              {t("stories.read")}
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </button>
    </article>
  );
};

const StoryDialog = ({
  story,
  onClose,
}: {
  story: Story | null;
  onClose: () => void;
}) => {
  const { t } = useTranslation();
  if (!story) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-dialog-title"
      className="fixed inset-0 z-[60] flex items-stretch md:items-center justify-center bg-earth-ink/80 backdrop-blur-sm p-0 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-parchment w-full max-w-4xl md:rounded-2xl overflow-hidden grid md:grid-cols-2 max-h-screen md:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t("stories.close")}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-parchment/90 text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[4/5] md:aspect-auto md:h-full">
          <img
            src={story.image}
            alt={t(`stories.items.${story.id}.alt`)}
            className="w-full h-full object-cover"
            width={1024}
            height={1280}
          />
        </div>

        <div className="p-7 md:p-10 overflow-y-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
            {story.district} · {story.age} {t(story.ageLabelKey)}
          </p>
          <h2
            id="story-dialog-title"
            className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-5"
          >
            {t(`stories.items.${story.id}.headline`)}
          </h2>
          <div className="space-y-4 text-foreground/75 leading-relaxed text-base">
            {(t(`stories.items.${story.id}.body`, { returnObjects: true }) as string[]).map(
              (para, i) => (
                <p key={i}>{para}</p>
              ),
            )}
          </div>
          <div className="mt-7 pt-5 border-t border-border flex items-center gap-2 text-xs text-foreground/55">
            <BurgundyRibbon className="w-4 h-5" />
            <span>{t("stories.dignity")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7 auto-rows-fr">
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
