import ServiceLayout from "@/features/services/components/ServiceLayout";
import { Apple, LineChart, Home } from "lucide-react";

const NutritionGrowth = () => {
  const icons = [<LineChart key="1" />, <Apple key="2" />, <Home key="3" />];

  return (
    <ServiceLayout
      pageKey="nutritionPage"
      aboutImage="https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80"
      aboutImageAlt="Nutritional food"
      serviceIcons={icons}
      servicesSectionTheme="terracotta"
    />
  );
};

export default NutritionGrowth;
