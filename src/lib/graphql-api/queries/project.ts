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
    projects(first: 1000) {
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
                mediaDetails {
                  sizes(include: [MEDIUM, MEDIUM_LARGE]) {
                    sourceUrl
                    name
                  }
                }
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
              mediaDetails {
                sizes(include: [MEDIUM, MEDIUM_LARGE, LARGE]) {
                  name
                  sourceUrl
                }
              }
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
