import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import "../../assets/scss/index.scss";
import "../../assets/globals.css";
import { Header } from "@/components/layout/Header/header";
import { Roboto, Rubik } from "next/font/google";
import { Footer } from "@/components/layout/Footer/footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--rubik",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--roboto",
});

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${rubik.variable} ${roboto.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <NextIntlClientProvider messages={messages}>
        <body>
          <Header locale={locale} />
          <main className="grow bg-inherit pb-10"> {children}</main>
          <Footer locale={locale} />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
