import { useTranslation } from "react-i18next";
import { X } from "lucide-react";
import BurgundyRibbon from "@/components/shared/BurgundyRibbon";
import type { Story } from "@/data/stories";

interface StoryDialogProps {
  story: Story | null;
  onClose: () => void;
  translationBase?: "stories" | "gallery";
}

const StoryDialog = ({ story, onClose, translationBase = "stories" }: StoryDialogProps) => {
  const { t } = useTranslation();
  if (!story) return null;

  const headlineKey = translationBase === "stories" ? "headline" : "title";
  const bodyKey = translationBase === "stories" ? "body" : "desc";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="story-dialog-title"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-earth-ink/90 backdrop-blur-md p-0 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-parchment w-full max-w-5xl rounded-none sm:rounded-xl md:rounded-2xl shadow-2xl overflow-hidden max-h-[100vh] sm:max-h-[95vh] md:max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t("stories.close")}
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-parchment/80 backdrop-blur-sm text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md border border-border/50"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
          {/* Image Section */}
          <div className="relative w-full md:w-[45%] h-[40vh] sm:h-[50vh] md:h-full shrink-0">
            <img
              src={story.image}
              alt={t(`${translationBase}.items.${story.id}.alt`, { defaultValue: story.id })}
              className="w-full h-full object-cover"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden pointer-events-none" />
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-12 md:overflow-y-auto bg-parchment">
            <div className="max-w-2xl mx-auto md:mx-0">
              {(story.district || story.age > 0) && (
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary font-bold">
                    {story.district}
                  </p>
                  {story.age > 0 && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-primary/30" />
                      <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary/70">
                        {story.age} {t(story.ageLabelKey)}
                      </p>
                    </>
                  )}
                </div>
              )}
              
              <h2
                id="story-dialog-title"
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.1] mb-6"
              >
                {t(`${translationBase}.items.${story.id}.${headlineKey}`)}
              </h2>

              <div className="space-y-5 text-foreground/80 leading-relaxed text-base sm:text-lg">
                {translationBase === "stories" ? (
                  (t(`${translationBase}.items.${story.id}.${bodyKey}`, { returnObjects: true }) as string[]).map(
                    (para, i) => <p key={i} className="first-letter:text-3xl first-letter:font-serif first-letter:mr-1 first-letter:float-left md:first-letter:text-initial md:first-letter:font-inherit md:first-letter:mr-0 md:first-letter:float-none">{para}</p>
                  )
                ) : (
                  <p>{t(`${translationBase}.items.${story.id}.${bodyKey}`)}</p>
                )}
              </div>

              <div className="mt-10 pt-6 border-t border-border/60 flex items-center gap-3 text-xs sm:text-sm text-foreground/60 italic">
                <BurgundyRibbon className="w-5 h-6 text-primary/80" />
                <span>{t(translationBase === "stories" ? "stories.dignity" : "gallery.dignity", { defaultValue: "Field Journal Record" })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDialog;
