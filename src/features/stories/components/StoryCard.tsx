import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Story } from "@/data/stories";

interface StoryCardProps {
  story: Story;
  index: number;
  onOpen: (id: string) => void;
}

const StoryCard = ({ story, index, onOpen }: StoryCardProps) => {
  const { t } = useTranslation();
  const isFeatured = index === 0;

  return (
    <article
      className={cn(
        "group relative animate-fade-up",
        isFeatured ? "sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2" : "",
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
            isFeatured ? "aspect-[4/5] sm:aspect-[5/6] md:aspect-[5/6]" : "aspect-[4/5]",
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
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-parchment/90 text-foreground text-xs sm:text-xs md:text-sm tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {story.district}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-7 text-parchment">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-warm/90 mb-3">
              {t(`stories.items.${story.id}.name`)} ·{" "}
              <span>
                {story.age} {t(story.ageLabelKey)}
              </span>
            </p>
            <h3
              className={cn(
                "font-serif leading-tight",
                isFeatured ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl" : "text-lg sm:text-xl md:text-xl lg:text-2xl",
              )}
            >
              {t(`stories.items.${story.id}.headline`)}
            </h3>
            <div className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm md:text-base text-parchment/85 group-hover:text-amber-warm transition-colors">
              {t("stories.read")}
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </button>
    </article>
  );
};

export default StoryCard;
