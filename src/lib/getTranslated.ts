export function getTranslated(locale: string, mn: string, en: string) {
  return locale === "mn" ? mn : en;
}
