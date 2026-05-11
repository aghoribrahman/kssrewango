import { useTranslation } from "react-i18next";
import { Search, Globe, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ResourceFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onLangFilterChange: (lang: "all" | "hi" | "en") => void;
  onCategoryFilterChange: (category: string) => void;
}

const ResourceFilters = ({
  searchQuery,
  onSearchChange,
  onLangFilterChange,
  onCategoryFilterChange,
}: ResourceFiltersProps) => {
  const { t } = useTranslation();

  return (
    <section className="mb-12 space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
          <Input
            placeholder={t("resources.search")}
            className="pl-10 bg-white/60 border-border/40 focus:ring-forest/20"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Globe className="w-4 h-4 text-forest hidden md:block" />
          <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={(v) => onLangFilterChange(v as any)}>
            <TabsList className="bg-white/60 border border-border/40">
              <TabsTrigger value="all" className="text-xs">{t("resources.filter.all")}</TabsTrigger>
              <TabsTrigger value="hi" className="text-xs">{t("resources.filter.hindi")}</TabsTrigger>
              <TabsTrigger value="en" className="text-xs">{t("resources.filter.english")}</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="flex items-center gap-4 border-t border-border/20 pt-6 overflow-x-auto no-scrollbar">
        <Filter className="w-4 h-4 text-terracotta shrink-0" />
        <Tabs defaultValue="all" className="w-auto" onValueChange={onCategoryFilterChange}>
          <TabsList className="bg-transparent h-auto p-0 gap-2">
            {["all", "prevention", "care", "nutrition", "tb", "rights"].map((cat) => (
              <TabsTrigger 
                key={cat} 
                value={cat}
                className="data-[state=active]:bg-primary data-[state=active]:text-parchment border border-border/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all"
              >
                {t(`resources.filter.categories.${cat}`)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
};

export default ResourceFilters;
