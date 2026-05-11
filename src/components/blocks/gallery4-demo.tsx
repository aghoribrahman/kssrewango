"use client"

import { useTranslation } from "react-i18next";
import { Gallery4, GalleryItem } from "./gallery4";

export const Gallery4Demo = () => {
  const { t } = useTranslation("translation");

  const items: GalleryItem[] = [
    {
      id: 1,
      url: "/gallery/1.webp",
      title: t("gallery.items.camp1.title"),
      description: t("gallery.items.camp1.desc"),
    },
    {
      id: 2,
      url: "/gallery/2.webp",
      title: t("gallery.items.news1.title"),
      description: t("gallery.items.news1.desc"),
    },
    {
      id: 3,
      url: "/gallery/4.webp",
      title: t("gallery.items.camp3.title"),
      description: t("gallery.items.camp3.desc"),
    },
    {
      id: 4,
      url: "/gallery/6.webp",
      title: t("gallery.items.news2.title"),
      description: t("gallery.items.news2.desc"),
    },
    {
      id: 5,
      url: "/gallery/7.webp",
      title: t("gallery.items.camp5.title"),
      description: t("gallery.items.camp5.desc"),
    },
  ];

  return (
    <Gallery4
      title={t("gallery.heading")}
      subtitle={t("gallery.subtitle")}
      items={items}
    />
  );
};
