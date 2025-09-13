"use client";

import { getTranslated } from "@/lib/getTranslated";
import { useLocale } from "next-intl";
import {
  AboutUsPageSettingMissionVisionValues,
  AboutUsPageSettingStrategy,
} from "graphql/generated";
import { StrategyCard } from "../card/StrategyCard";

export const StrategySection = ({
  missionVisionValues,
  strategy,
}: {
  missionVisionValues: AboutUsPageSettingMissionVisionValues;
  strategy: AboutUsPageSettingStrategy[];
}) => {
  const locale = useLocale();

  return (
    <div className="w-full  m-auto justify-center py-8">
      <div className="flex flex-col flex-wrap sm:flex-row gap-4 m-auto place-content-center items-center">
        {missionVisionValues.vision && (
          <StrategyCard
            type="vision"
            title={getTranslated(
              locale,
              missionVisionValues.vision.titleMn,
              missionVisionValues.vision.title
            )}
            excerpt={getTranslated(
              locale,
              missionVisionValues.vision.excerptMn,
              missionVisionValues.vision.excerpt
            )}
          />
        )}

        {missionVisionValues.mission && (
          <StrategyCard
            type="mission"
            title={getTranslated(
              locale,
              missionVisionValues.mission.titleMn,
              missionVisionValues.mission.title
            )}
            excerpt={getTranslated(
              locale,
              missionVisionValues.mission.excerptMn,
              missionVisionValues.mission.excerpt
            )}
          />
        )}

        {missionVisionValues.values && (
          <StrategyCard
            type="values"
            title={getTranslated(
              locale,
              missionVisionValues.values.titleMn,
              missionVisionValues.values.title
            )}
            excerpt={getTranslated(
              locale,
              missionVisionValues.values.excerptMn,
              missionVisionValues.values.excerpt
            )}
          />
        )}
      </div>
      <div className="mt-8">
        {strategy.map((item, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-xl md:text-[26px] font-bold uppercase mb-2">
              {getTranslated(locale, item.titleMn, item.title)}
            </h3>
            <div
              className="strategyBody"
              dangerouslySetInnerHTML={{
                __html: getTranslated(locale, item.excerptMn, item.excerpt),
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
