// lib/menuItems.ts

export const getMenuItems = (
  t: (key: string) => string,
  cleanedPath: string
) => [
  { title: t("menu.homepage"), href: "/", isActive: cleanedPath === "/" },
  {
    title: t("menu.newspage"),
    href: "/news",
    isActive: cleanedPath.includes("news"),
  },
  {
    title: t("menu.project"),
    href: "/project",
    isActive: cleanedPath.includes("project"),
  },
  // {
  //   title: t("menu.resource"),
  //   href: "/resource",
  //   isActive: cleanedPath.includes("resource"),
  // },
  {
    title: t("menu.about-us"),
    href: "/about-us",
    isActive: cleanedPath.includes("about-us"),
  },
  {
    title: t("menu.contact-us"),
    href: "/contact-us",
    isActive: cleanedPath.includes("contact-us"),
  },
];
