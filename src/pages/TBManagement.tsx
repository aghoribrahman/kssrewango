import ServiceLayout from "@/features/services/components/ServiceLayout";
import { ClipboardCheck, Truck, Users } from "lucide-react";

const TBManagement = () => {
  const icons = [<Truck key="1" />, <ClipboardCheck key="2" />, <Users key="3" />];

  return (
    <ServiceLayout
      pageKey="tbPage"
      aboutImage="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80"
      aboutImageAlt="TB patient support"
      serviceIcons={icons}
      servicesSectionTheme="dark"
      aboutSectionReverse={true}
    />
  );
};

export default TBManagement;
