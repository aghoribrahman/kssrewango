import { useTranslation } from "react-i18next";
import { FileText, Download, Share2, Info } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Resource } from "@/data/resources";

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const { t } = useTranslation();

  const shareOnWhatsApp = () => {
    const text = `${t("resources.card.share")}: ${resource.title}\n${window.location.origin}${resource.downloadUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <Card className="group bg-parchment/50 border-border/40 hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col h-full">
      <CardHeader className="pb-2.5 relative">
        <div className="absolute top-3 right-3 flex gap-1.5">
          <Badge variant="outline" className="bg-white/50 text-[9px] px-1.5 py-0 uppercase tracking-wider">
            {resource.category}
          </Badge>
          <Badge className="bg-amber-warm text-amber-950 text-[9px] px-1.5 py-0 uppercase tracking-wider">
            {resource.language === "hi" ? "हिंदी" : "EN"}
          </Badge>
        </div>
        <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
          <FileText className="w-5 h-5 text-forest" />
        </div>
        <CardTitle className="font-serif text-earth-ink text-lg leading-tight">
          {resource.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow pb-4">
        <p className="text-xs text-foreground/70 leading-relaxed">
          {resource.description}
        </p>
      </CardContent>

      <CardFooter className="pt-3 border-t border-border/20 flex gap-1.5">
        <Button 
          variant="default" 
          size="sm" 
          className="flex-1 bg-forest hover:bg-forest-deep text-parchment gap-1.5 h-8 text-xs"
          asChild
        >
          <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer" download>
            <Download className="w-3 h-3" />
            {t("resources.card.download")}
          </a>
        </Button>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                className="shrink-0 w-8 h-8 border-border/40 hover:bg-forest/5"
                onClick={shareOnWhatsApp}
              >
                <Share2 className="w-3.5 h-3.5 text-forest" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("resources.card.share")}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="shrink-0 w-8 h-8 text-foreground/40 hover:text-forest"
              >
                <Info className="w-3.5 h-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-[200px]">
              <p className="text-xs font-medium mb-1">{t("resources.card.summary")}</p>
              <p className="text-[11px] leading-snug opacity-90">{resource.summary}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
