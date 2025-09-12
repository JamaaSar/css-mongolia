// src/app/[locale]/page.js
import { NewsCard } from "../../../components/card/NewsCard";
import {
  getNewsLandingPageSettings,
  getNewsPosts,
} from "@/lib/graphql-api/queries/news";
import { getTranslated } from "@/lib/getTranslated";
import { News, Project } from "graphql/generated";
import { H2 } from "../../../components/generic/Typography";
import { getProjects } from "@/lib/graphql-api/queries/project";
import { ProjectCard } from "@/components/card/ProjectCard";

export default async function NewsPage({ params }) {
  const { locale } = await params;

  const projects = await getProjects();
  console.log(projects);
  const setting = await getNewsLandingPageSettings();

  return (
    <div className="css-container">
      <H2
        title={getTranslated(
          locale,
          setting.newsLandingPageTitleMn,
          setting.newsLandingPageTitle
        )}
      />
      <div className="flex gap-4 m-auto">
        {projects.map((data: Project) => (
          <ProjectCard
            key={data.databaseId}
            title={data.title}
            excerpt={getTranslated(
              locale,
              data.projectCustomFields.excerptMn,
              data.projectCustomFields.excerpt
            )}
            featuredImage={
              data.projectCustomFields.featuredImage?.node?.mediaDetails
                .sizes !== null
                ? data.projectCustomFields.featuredImage.node?.mediaDetails
                    ?.sizes[0].sourceUrl
                : ""
            }
          />
        ))}
      </div>
    </div>
  );
}
