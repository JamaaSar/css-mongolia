"use client";

import MissionIcon from "../MissionIcon";
import ValuesIcon from "../ValuesIcon";
import VisionIcon from "../VisionIcon";

export const StrategyCard = ({
  title,
  excerpt,
  type,
}: {
  title: string;
  excerpt: string;
  type: string;
}) => {
  return (
    <div
      className={`w-[348px] h-[262px] flex flex-col shadow rounded-md overflow-hidden shadow-lg cursor-pointer bg-white
    ${type === "values" && "h-[317px]"}`}
    >
      <div className="flex flex-col items-center gap-3 pt-4">
        {type === "mission" && <MissionIcon />}
        {type === "vision" && <VisionIcon />}
        {type === "values" && <ValuesIcon />}
        <h2 className="text-[22px] font-bold uppercase m-auto">{title}</h2>
      </div>
      <div className="px-6 pt-2 ">
        <div
          className="strategyBody"
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
        ></div>
      </div>
    </div>
  );
};
