import { getTranslated } from "@/lib/getTranslated";
import {
  AboutUsPageSettingMembers,
  AboutUsPageSettingMissionVisionValues,
  AboutUsPageSettingStrategy,
  Member,
} from "graphql/generated";
import {
  getAboutUsPageSettings,
  getTeamMembers,
} from "@/lib/graphql-api/queries/about";
import { StrategySection } from "@/components/sections/StrategySection";
import { H1 } from "@/components/generic/Typography/H1";
import MembersPage from "./MembersPage";

export default async function NewsPage({ params }) {
  const { locale } = await params;

  const setting = await getAboutUsPageSettings();
  const members = await getTeamMembers();
  const missionVisionValues =
    setting.missionVisionValues as AboutUsPageSettingMissionVisionValues;
  const membersTitle = setting.members as AboutUsPageSettingMembers;
  const strategy = setting.strategy as AboutUsPageSettingStrategy[];
  const allMembers = members as Member[];
  console.log(membersTitle);
  return (
    <div className="css-home-container m-auto 2xl:container">
      <div className="mt-24">
        <H1
          title={getTranslated(
            locale,
            setting.aboutUsTitleMn,
            setting.aboutUsTitle
          )}
          descriptionHtml={getTranslated(
            locale,
            setting.aboutUsExcerptMn,
            setting.aboutUsExcerp
          )}
        />
      </div>

      <div className="flex gap-4 m-auto">
        <StrategySection
          missionVisionValues={missionVisionValues}
          strategy={strategy}
        />
      </div>
      <div>
        <MembersPage
          title={membersTitle}
          members={allMembers}
          locale={locale}
        />
      </div>
    </div>
  );
}
