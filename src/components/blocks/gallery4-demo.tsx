import { Gallery4 } from "@/components/blocks/gallery4"
import { useTranslation } from "react-i18next";

function Gallery4Demo() {
  const { t } = useTranslation();

  const items = [
    {
      id: "screening",
      title: t("programs.items.screening.title"),
      description: t("programs.items.screening.description"),
      href: "#",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1080",
    },
    {
      id: "nutrition",
      title: t("programs.items.nutrition.title"),
      description: t("programs.items.nutrition.description"),
      href: "#",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1080",
    },
    {
      id: "education",
      title: t("programs.items.education.title"),
      description: t("programs.items.education.description"),
      href: "#",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1080",
    },
    {
      id: "support",
      title: t("programs.items.support.title"),
      description: t("programs.items.support.description"),
      href: "#",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1080",
    },
    {
      id: "volunteer",
      title: t("programs.items.volunteer.title"),
      description: t("programs.items.volunteer.description"),
      href: "#",
      image: "https://images.unsplash.com/photo-1559027615-cd169c59d9b4?auto=format&fit=crop&q=80&w=1080",
    },
  ];

  return <Gallery4 items={items} />;
}

export { Gallery4Demo };
