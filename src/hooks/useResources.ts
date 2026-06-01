import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export interface ResourceItem {
  id: string;
  title_en: string;
  title_hi: string;
  description_en: string;
  description_hi: string;
  category: "prevention" | "care" | "nutrition" | "rights" | "tb";
  language: "hi" | "en" | "both";
  download_url: string;
  summary_en?: string;
  summary_hi?: string;
  active: boolean;
  created_at: string;
}

export const useResources = () => {
  return useQuery<ResourceItem[]>({
    queryKey: ["resources"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("resources")
        .select("*")
        .eq("active", true)
        .order("created_at", { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      return data as ResourceItem[];
    },
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
  });
};
