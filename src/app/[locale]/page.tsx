import { Banner } from "@/components/generic/banner/Banner";
import { H1 } from "@/components/generic/Typography/H1";
import { NewsSection } from "@/components/sections/NewsSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { getTranslated } from "@/lib/getTranslated";
import { getHomePage, getMenuActions } from "@/lib/graphql-api/queries/home";
import { MenuItem, News, Project } from "graphql/generated";
import { useMediaQuery } from "react-responsive";

export default async function HomePage({ params }) {
  const { locale } = await params;

  const data = await getHomePage();
  const news = data.newsSection.featuredNews.nodes as News[];
  const projects = data.projectSection.featuredProject.nodes as Project[];

  const filteredNews = news.filter((item) => {
    const lang = item.newsCustomFields.newsLanguage;
    return lang === "both" || lang === locale;
  });

  const filteredProjects = projects.filter((item) => {
    const lang = item.projectCustomFields.projectLanguage;
    return lang === "both" || lang === locale;
  });

  return (
    <div>
      <Banner banners={data.banners} />
      <div className="relative mt-10 sm:mt-[600px] css-home-container 2xl:container m-auto">
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
          news={filteredNews}
        />
        <ProjectSection
          title={getTranslated(
            locale,
            data.projectSection.projectTitleMn,
            data.projectSection.projectTitle
          )}
          projects={filteredProjects}
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
