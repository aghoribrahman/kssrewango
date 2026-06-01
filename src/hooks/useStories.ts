import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export interface StoryItem {
  id: string;
  story_key: string;
  name_en: string;
  name_hi: string;
  district_en: string;
  district_hi: string;
  age: number;
  image_url: string;
  summary_en: string;
  summary_hi: string;
  content_en: string;
  content_hi: string;
  created_at: string;
}

export const useStories = () => {
  return useQuery<StoryItem[]>({
    queryKey: ["stories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("stories")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        throw new Error(error.message);
      }

      return data as StoryItem[];
    },
    staleTime: 1000 * 60 * 10, // Cache for 10 minutes
  });
};
