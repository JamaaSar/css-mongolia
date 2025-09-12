"use client";

import { getTranslated } from "@/lib/getTranslated";
import { H2 } from "../generic/Typography";
import { useLocale, useTranslations } from "next-intl";
import { RessourceCard } from "../card/RessourceCard";
import { Carousel } from "../generic/Carousel";

export const RessourceSection = ({
  title,
  ressources,
}: {
  title: string;
  ressources: [];
}) => {
  const locale = useLocale();
  const t = useTranslations();

  const extraButton = {
    title: t("see-more"),
    url: "/resource",
  };
  return (
    <div>
      <H2 title={title} extraButton={extraButton} />
      <Carousel
        items={ressources}
        renderItem={(data, index) => (
          <RessourceCard
            key={data.id + index}
            title={getTranslated(
              locale,
              data.resourceCustomField.titleMn,
              data.resourceCustomField.title
            )}
            excerpt={getTranslated(
              locale,
              data.resourceCustomField.excerptMn,
              data.resourceCustomField.excerpt
            )}
            featuredImage={
              data.resourceCustomField.featuredImage?.node.mediaItemUrl
            }
          />
        )}
      />
    </div>
  );
};
