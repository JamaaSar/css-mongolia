// src/app/[locale]/page.js
import { getTranslated } from "@/lib/getTranslated";
import { H2 } from "../../../components/generic/Typography";
import {
  getProjectLandingPageSettings,
  getProjects,
} from "@/lib/graphql-api/queries/project";
import ProjectPage from "./ProjectPage";

export default async function NewsPage({ params }) {
  const { locale } = await params;

  const projects = await getProjects();
  const setting = await getProjectLandingPageSettings();

  return (
    <div className="css-container 2xl:container">
      <H2
        title={getTranslated(
          locale,
          setting.projectLandingPageTitleMn,
          setting.projectLandingPageTitle
        )}
      />
      <ProjectPage projects={projects} locale={locale} />
    </div>
  );
}
