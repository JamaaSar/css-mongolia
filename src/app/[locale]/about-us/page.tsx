import { getTranslated } from "@/lib/getTranslated";
import {
  AboutUsPageSettingMissionVisionValues,
  AboutUsPageSettingStrategy,
} from "graphql/generated";
import { getAboutUsPageSettings } from "@/lib/graphql-api/queries/about";
import { StrategySection } from "@/components/sections/StrategySection";

export default async function NewsPage({ params }) {
  const { locale } = await params;

  const setting = await getAboutUsPageSettings();
  const missionVisionValues =
    setting.missionVisionValues as AboutUsPageSettingMissionVisionValues;
  const strategy = setting.strategy as AboutUsPageSettingStrategy[];

  return (
    <div className="css-home-container m-auto 2xl:container">
      <h1 className="mt-24">
        {getTranslated(locale, setting.aboutUsTitleMn, setting.aboutUsTitle)}
      </h1>
      <p className="excerpt">
        {getTranslated(locale, setting.aboutUsExcerptMn, setting.aboutUsExcerp)}
      </p>
      <div className="flex gap-4 m-auto">
        <StrategySection
          missionVisionValues={missionVisionValues}
          strategy={strategy}
        />
      </div>
    </div>
  );
}
