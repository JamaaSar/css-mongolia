import { AboutUsPageSetting, Project, ProjectIdType } from "graphql/generated";
import { fetchAPI } from "../api";

export async function getAboutUsPageSettings(): Promise<AboutUsPageSetting> {
  const data = await fetchAPI(
    `query getAboutUsPageSettings {
      aboutUsPageSettings {
        aboutUsPageSetting {
          aboutUsTitle
          aboutUsTitleMn
          aboutUsExcerp
          aboutUsExcerptMn
          missionVisionValues{
            mission {
              excerpt
              excerptMn
              title
              titleMn
            }
            vision {
              excerpt
              excerptMn
              title
              titleMn
            }
            values {
              excerpt
              excerptMn
              title
              titleMn
            }
          }
          strategy {
            excerpt
            excerptMn
            title
            titleMn
          }
        }
      }
    }
    `
  );
  return data.aboutUsPageSettings.aboutUsPageSetting || [];
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
