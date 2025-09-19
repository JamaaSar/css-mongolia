import { Project, ProjectIdType, ProjectPageSetting } from "graphql/generated";
import { fetchAPI } from "../api";

export async function getProjectLandingPageSettings(): Promise<ProjectPageSetting> {
  const data = await fetchAPI(
    `query getProjectLandingPageSettings {
      pageSettings {
        projectPageSetting {
          projectLandingPageExcerpt
          projectLandingPageExcerptMn
          projectLandingPageTitle
          projectLandingPageTitleMn
        }
      }
    }
    `
  );
  return data.pageSettings.projectPageSetting || [];
}

export async function getProjects(): Promise<Project[]> {
  const data = await fetchAPI(
    `
    query getAllProjects {
    projects(first: 1000,  where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          databaseId
          dateGmt
          slug
          desiredSlug
          title
          projectCustomFields {
            excerpt
            excerptMn
            body
            bodyMn
            projectLanguage
            featuredImage {
              node {
                  mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
    `
  );
  // parse the data into Project objects
  if (data && data.projects && data.projects.edges) {
    if (data.projects.edges.length > 0) {
      return data.projects.edges.map((x) => x.node as Project);
    }
  }
  return [];
}

export async function getProjectFull(
  id,
  idType: ProjectIdType = ProjectIdType.Slug
): Promise<Project> {
  const data = await fetchAPI(
    `
    query project($id: ID!, $idType: ProjectIdType!) {
      project(id: $id, idType: $idType) {
        databaseId
        desiredSlug
        slug
        dateGmt
        title
        projectCustomFields {
          body
          bodyMn
          featuredImage {
            node {
                mediaItemUrl
            }
          }
        }
      }
    } 
    `,
    {
      variables: { id, idType },
    }
  ).catch((err) => console.error("Failed to fetch news", err));
  return data.project;
}

export async function getLatestProjectByLanguage(): Promise<{
  mongolianProject: Project[];
  englishProject: Project[];
}> {
  const allNews = await getProjects();

  const sortedNews = allNews
    .filter((news) => news.dateGmt)
    .sort(
      (a, b) => new Date(b.dateGmt).getTime() - new Date(a.dateGmt).getTime()
    );

  const getLanguage = (news: Project) =>
    news.projectCustomFields?.projectLanguage?.toLowerCase().trim();

  const englishProjects = sortedNews
    .filter((news) => {
      const lang = getLanguage(news);
      return lang === "eng" || lang === "both";
    })
    .slice(0, 4);

  const mongolianProjects = sortedNews
    .filter((news) => {
      const lang = getLanguage(news);
      return lang === "mn" || lang === "both";
    })
    .slice(0, 4);

  return {
    englishProject: englishProjects,
    mongolianProject: mongolianProjects,
  };
}
