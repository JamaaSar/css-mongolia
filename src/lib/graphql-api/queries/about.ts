import {
  AboutUsPageSetting,
  Member,
  Project,
  ProjectIdType,
} from "graphql/generated";
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

export async function getTeamMembers(): Promise<Member[]> {
  const data = await fetchAPI(
    `
    query MyQuery {
      members {
        edges {
          node {
          databaseId
            memberCustomFields {
              nameMn
              name
              isBoardMember
              image {
                node {
                  mediaItemUrl
                }
              }
              bio
              bioMn
              position
              positionMn
            }
          }
        }
      }
    }
  `
  );
  if (data && data.members && data.members.edges) {
    if (data.members.edges.length > 0) {
      return data.members.edges.map((x) => x.node as Member);
    }
  }
  return [];
}
