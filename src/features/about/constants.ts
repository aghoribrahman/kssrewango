import { Heart, Shield, Users, BookOpen, Target, Award } from "lucide-react";

export const MISSION_CARDS = [
  {
    icon: Heart,
    titleKey: "about.mission.cards.care.title",
    descriptionKey: "about.mission.cards.care.description",
  },
  {
    icon: BookOpen,
    titleKey: "about.mission.cards.awareness.title",
    descriptionKey: "about.mission.cards.awareness.description",
  },
  {
    icon: Shield,
    titleKey: "about.mission.cards.dignity.title",
    descriptionKey: "about.mission.cards.dignity.description",
  },
];

export const VALUES = [
  {
    icon: Users,
    titleKey: "about.values.items.community.title",
    descriptionKey: "about.values.items.community.description",
    large: true,
  },
  {
    icon: Target,
    titleKey: "about.values.items.transparency.title",
    descriptionKey: "about.values.items.transparency.description",
    large: false,
  },
  {
    icon: Award,
    titleKey: "about.values.items.impact.title",
    descriptionKey: "about.values.items.impact.description",
    large: false,
  },
];
