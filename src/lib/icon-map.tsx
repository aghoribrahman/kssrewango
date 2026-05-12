import { 
  ShieldCheck, 
  Heart, 
  Users, 
  Truck, 
  ClipboardCheck, 
  LineChart, 
  Apple, 
  Home,
  Activity,
  Stethoscope,
  ArrowRight,
  Info
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export const IconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "heart": Heart,
  "users": Users,
  "truck": Truck,
  "clipboard-check": ClipboardCheck,
  "line-chart": LineChart,
  "apple": Apple,
  "home": Home,
  "activity": Activity,
  "stethoscope": Stethoscope,
  "arrow-right": ArrowRight,
  "info": Info,
};

export type IconName = keyof typeof IconMap;

export const getIcon = (name: string, fallback: LucideIcon = Info) => {
  return IconMap[name] || fallback;
};
