import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export interface CampSchedule {
  id: string;
  district_id: "sidhi" | "shahdol" | "umaria" | "anuppur" | "dindori" | "mandla";
  camp_name_en: string;
  camp_name_hi: string;
  next_date: string;
  active: boolean;
}

export const useCamps = () => {
  return useQuery<CampSchedule[]>({
    queryKey: ["camps_schedule"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("camps_schedule")
        .select("*")
        .eq("active", true)
        .order("next_date", { ascending: true });

      if (error) {
        throw new Error(error.message);
      }

      return data as CampSchedule[];
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};
