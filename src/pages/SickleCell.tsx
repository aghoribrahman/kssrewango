import ServiceLayout from "@/features/services/components/ServiceLayout";
import { Heart, ShieldCheck, Users } from "lucide-react";

const SickleCell = () => {
  const icons = [<ShieldCheck key="1" />, <Heart key="2" />, <Users key="3" />];

  return (
    <ServiceLayout
      pageKey="sickleCellPage"
      aboutImage="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
      aboutImageAlt="Laboratory screening"
      serviceIcons={icons}
      servicesSectionTheme="forest"
      aboutSectionReverse={true}
    />
  );
};

export default SickleCell;
