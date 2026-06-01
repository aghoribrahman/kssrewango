import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GondPattern from "@/components/shared/GondPattern";
import { resources } from "@/data/resources";
import { useResources } from "@/hooks/useResources";
import { useTranslatedValue } from "@/hooks/useTranslatedValue";
import ResourceFilters from "@/features/resources/components/ResourceFilters";
import ResourceGrid from "@/features/resources/components/ResourceGrid";

const Resources = () => {
  const { t } = useTranslation();
  const { getTranslated } = useTranslatedValue();
  const { data: dbResources } = useResources();
  const [searchQuery, setSearchQuery] = useState("");
  const [langFilter, setLangFilter] = useState<"all" | "hi" | "en">("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const resourcesList = dbResources ? dbResources.map((res) => ({
    id: res.id,
    title: getTranslated(res, "title"),
    description: getTranslated(res, "description"),
    summary: getTranslated(res, "summary") || "",
    category: res.category,
    language: res.language,
    downloadUrl: res.download_url,
  })) : resources;

  const filteredResources = resourcesList.filter((res) => {
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLang = langFilter === "all" || res.language === langFilter || res.language === "both";
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

        <ResourceFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onLangFilterChange={setLangFilter}
          onCategoryFilterChange={setCategoryFilter}
        />

        <ResourceGrid resources={filteredResources} />
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
