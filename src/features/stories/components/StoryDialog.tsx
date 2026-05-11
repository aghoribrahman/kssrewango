import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import BurgundyRibbon from "@/components/shared/BurgundyRibbon";
import type { Story } from "@/data/stories";

interface StoryDialogProps {
  story: Story | null;
  onClose: () => void;
}

const StoryDialog = ({ story, onClose }: StoryDialogProps) => {
  const { t } = useTranslation();
  if (!story) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-dialog-title"
      className="fixed inset-0 z-[60] flex items-stretch md:items-center justify-center bg-earth-ink/80 backdrop-blur-sm p-0 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-parchment w-full max-w-4xl rounded-none sm:rounded-lg md:rounded-2xl grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-0 max-h-[95vh] md:max-h-[90vh] overflow-y-auto md:overflow-hidden"
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

        <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-auto md:h-full">
          <img
            src={story.image}
            alt={t(`stories.items.${story.id}.alt`)}
            className="w-full h-full object-cover"
            width={1024}
            height={1280}
          />
        </div>

        <div className="p-4 sm:p-6 md:p-8 lg:p-10 md:overflow-y-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
            {story.district} · {story.age} {t(story.ageLabelKey)}
          </p>
          <h2
            id="story-dialog-title"
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-5"
          >
            {t(`stories.items.${story.id}.headline`)}
          </h2>
          <div className="space-y-4 text-foreground/75 leading-relaxed text-sm sm:text-base md:text-base">
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

export default StoryDialog;
