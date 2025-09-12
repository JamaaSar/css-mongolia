import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["mn", "en"],
  defaultLocale: "mn",
  localeDetection: false,
});
