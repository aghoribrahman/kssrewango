import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

export interface ImpactStats {
  id: string;
  screenings: number;
  lives_touched: number;
  active_districts: number;
  camps_held: number;
}

export const useImpactStats = () => {
  return useQuery<ImpactStats>({
    queryKey: ["impact_stats"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("impact_stats")
        .select("*")
        .maybeSingle();

      if (error) {
        throw new Error(error.message);
      }

      return data as ImpactStats;
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};
