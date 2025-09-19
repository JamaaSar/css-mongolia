import { Banner } from "@/components/generic/banner/Banner";
import { H1 } from "@/components/generic/Typography/H1";
import { NewsSection } from "@/components/sections/NewsSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { getTranslated } from "@/lib/getTranslated";
import { getHomePage } from "@/lib/graphql-api/queries/home";
import { getLatestNewsByLanguage } from "@/lib/graphql-api/queries/news";
import { getLatestProjectByLanguage } from "@/lib/graphql-api/queries/project";
import { News, Project } from "graphql/generated";

export default async function HomePage({ params }) {
  const { locale } = await params;

  const data = await getHomePage();
  const news = data.newsSection.featuredNews.nodes as News[];
  const projects = data.projectSection.featuredProject.nodes as Project[];
  const { english, mongolian } = await getLatestNewsByLanguage();
  const { englishProject, mongolianProject } =
    await getLatestProjectByLanguage();

  const filteredNews = news.filter((item) => {
    const lang = item.newsCustomFields.newsLanguage;
    return lang === "both" || lang === locale;
  });

  const lastFourNews =
    locale === "en" ? english : locale === "mn" ? mongolian : [];
  const lastFourProjects =
    locale === "en" ? englishProject : locale === "mn" ? mongolianProject : [];

  const filteredProjects = projects.filter((item) => {
    const lang = item.projectCustomFields.projectLanguage;
    return lang === "both" || lang === locale;
  });

  return (
    <div>
      <Banner banners={data.banners} />
      <div className="relative mt-10 sm:mt-20 css-home-container 2xl:container m-auto">
        <H1
          title={getTranslated(locale, data.titleMn, data.title)}
          descriptionHtml={getTranslated(locale, data.excerptMn, data.excerpt)}
        />
        <NewsSection
          title={getTranslated(
            locale,
            data.newsSection.newsTitleMn,
            data.newsSection.newsTitle
          )}
          news={lastFourNews}
        />
        <ProjectSection
          title={getTranslated(
            locale,
            data.projectSection.projectTitleMn,
            data.projectSection.projectTitle
          )}
          projects={lastFourProjects}
        />
        {/* <RessourceSection
          title={getTranslated(
            locale,
            data.ressourceSection.ressourceTitleMn,
            data.ressourceSection.ressourceTitle
          )}
          ressources={data.ressourceSection.featuredRessource.nodes}
        /> */}
      </div>
    </div>
  );
}
