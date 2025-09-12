import { getTranslated } from "@/lib/getTranslated";
import { H2 } from "../../../components/generic/Typography";
import {
  getProjectLandingPageSettings,
  getProjects,
} from "@/lib/graphql-api/queries/project";

export default async function NewsPage({ params }) {
  const { locale } = await params;

  const projects = await getProjects();
  const setting = await getProjectLandingPageSettings();

  return <div className="css-container 2xl:container">soon..</div>;
}
