import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GondPattern from "@/components/GondPattern";
import ResourceCard from "@/components/ResourceCard";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { resources } from "@/data/resources";

const Resources = () => {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [langFilter, setLangFilter] = useState<"all" | "hi" | "en">("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredResources = resources.filter((res) => {
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLang = langFilter === "all" || res.language === langFilter;
    const matchesCategory = categoryFilter === "all" || res.category === categoryFilter;
    return matchesSearch && matchesLang && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-parchment">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-6 md:px-10 max-w-7xl mx-auto w-full">
        {/* Page Header */}
        <section className="relative mb-16 text-center">
          <GondPattern className="absolute -top-10 -left-10 w-40 h-40 text-forest/5 opacity-50" />
          <GondPattern className="absolute -bottom-10 -right-10 w-40 h-40 text-terracotta/5 opacity-50" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-terracotta font-medium mb-4 block">
              {t("resources.eyebrow")}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-earth-ink mb-6">
              {t("resources.heading")}
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
              {t("resources.subtitle")}
            </p>
          </motion.div>
        </section>

        {/* Filters & Search */}
        <section className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
              <Input
                placeholder={t("resources.search")}
                className="pl-10 bg-white/60 border-border/40 focus:ring-forest/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <Globe className="w-4 h-4 text-forest hidden md:block" />
              <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={(v) => setLangFilter(v as any)}>
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
            <Tabs defaultValue="all" className="w-auto" onValueChange={setCategoryFilter}>
              <TabsList className="bg-transparent h-auto p-0 gap-2">
                {["all", "prevention", "care", "nutrition", "rights"].map((cat) => (
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

        {/* Resource Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredResources.map((res) => (
              <motion.div
                key={res.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ResourceCard resource={res} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredResources.length === 0 && (
          <div className="text-center py-20 opacity-50">
            <p className="text-lg">No resources found matching your filters.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
