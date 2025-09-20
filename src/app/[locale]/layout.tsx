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
import { getLogo, getSocialMedia } from "@/lib/graphql-api/queries/home";
import { ContactUsPageSettings, SocialMedia } from "graphql/generated";
import { getContactUsPageSettings } from "@/lib/graphql-api/queries/about";

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
  const socialItems = (await getSocialMedia()) as SocialMedia[];
  const logos = await getLogo();
  const setting = (await getContactUsPageSettings()) as ContactUsPageSettings;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${rubik.variable} ${roboto.variable} antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <NextIntlClientProvider messages={messages}>
        <body className="flex flex-col  min-h-screen">
          <Header locale={locale} socialItems={socialItems} logos={logos} />
          <main className="flex-grow bg-inherit pb-10 animate-fade-in opacity-0">
            {" "}
            {children}
          </main>
          <Footer
            locale={locale}
            socialItems={socialItems}
            logos={logos}
            addressMn={setting.addressMn}
            address={setting.address}
          />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
