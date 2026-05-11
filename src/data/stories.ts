import storyMeena from "@/assets/story-meena.webp";
import storyRamesh from "@/assets/story-ramesh.webp";
import storySavitri from "@/assets/story-savitri.webp";
import storyArjun from "@/assets/story-arjun.webp";

export interface Story {
  id: string;
  image: string;
  district: string;
  age: number;
  ageLabelKey: string;
}

export const STORIES: Story[] = [
  { id: "meena", image: storyMeena, district: "Dindori", age: 14, ageLabelKey: "stories.ageYears" },
  { id: "ramesh", image: storyRamesh, district: "Mandla", age: 52, ageLabelKey: "stories.ageYears" },
  { id: "savitri", image: storySavitri, district: "Anuppur", age: 31, ageLabelKey: "stories.ageYears" },
  { id: "arjun", image: storyArjun, district: "Shahdol", age: 9, ageLabelKey: "stories.ageYears" },
];
