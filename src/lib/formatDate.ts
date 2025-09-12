export function formatDate(value: string, locale = "fr-Fr") {
  const year = new Date(value).toLocaleDateString(locale, { year: "numeric" });
  const month = new Date(value).toLocaleDateString(locale, {
    month: "numeric",
  });
  const day = new Date(value).toLocaleDateString(locale, { day: "numeric" });
  return day + " / " + month + " / " + year;
}
