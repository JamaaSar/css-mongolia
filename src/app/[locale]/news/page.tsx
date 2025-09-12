import {
  getNewsLandingPageSettings,
  getNewsPosts,
} from "@/lib/graphql-api/queries/news";
import { getTranslated } from "@/lib/getTranslated";
import { H2 } from "../../../components/generic/Typography";
import NewsPage from "./NewsPage";

export default async function News({ params }) {
  const { locale } = await params;

  const news = await getNewsPosts();
  const setting = await getNewsLandingPageSettings();

  const filteredNews = news.filter((item) => {
    const lang = item.newsCustomFields.newsLanguage;
    return lang === "both" || lang === locale;
  });

  return (
    <div className="css-container 2xl:container">
      <H2
        title={getTranslated(
          locale,
          setting.newsLandingPageTitleMn,
          setting.newsLandingPageTitle
        )}
      />
      <NewsPage news={filteredNews} locale={locale} />
    </div>
  );
}
