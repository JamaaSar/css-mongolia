import { Banner } from "@/components/generic/banner/Banner";
import { NewsSection } from "@/components/sections/NewsSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { getTranslated } from "@/lib/getTranslated";
import { getHomePage } from "@/lib/graphql-api/queries/home";
import { News, Project } from "graphql/generated";
import { useMediaQuery } from "react-responsive";

export default async function HomePage({ params }) {
  const { locale } = await params;

  const data = await getHomePage();
  const news = data.newsSection.featuredNews.nodes as News[];
  const projects = data.projectSection.featuredProject.nodes as Project[];

  return (
    <div>
      <Banner banners={data.banners} />
      <div className="relative mt-10 sm:mt-[600px] css-home-container 2xl:container m-auto">
        <h1> {getTranslated(locale, data.titleMn, data.title)} </h1>
        <p className="excerpt">
          {getTranslated(locale, data.excerptMn, data.excerpt)}
        </p>
        <NewsSection
          title={getTranslated(
            locale,
            data.newsSection.newsTitleMn,
            data.newsSection.newsTitle
          )}
          news={news}
        />
        <ProjectSection
          title={getTranslated(
            locale,
            data.projectSection.projectTitleMn,
            data.projectSection.projectTitle
          )}
          projects={projects}
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
