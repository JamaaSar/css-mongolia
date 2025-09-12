"use client";

import { getTranslated } from "@/lib/getTranslated";
import { H2 } from "../generic/Typography";
import { useLocale, useTranslations } from "next-intl";
import { ProjectCard } from "../card/ProjectCard";
import { Carousel } from "../generic/Carousel";
import { Project } from "graphql/generated";

export const ProjectSection = ({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) => {
  const locale = useLocale();
  const t = useTranslations();

  const extraButton = {
    title: t("see-more"),
    url: "/project",
  };

  return (
    <div>
      <H2 title={title} extraButton={extraButton} />
      <Carousel
        items={projects}
        renderItem={(data, index) => (
          <ProjectCard
            key={data.databaseId + index}
            id={data.databaseId}
            slug={data.slug}
            title={data.title}
            excerpt={getTranslated(
              locale,
              data.projectCustomFields.excerptMn,
              data.projectCustomFields.excerpt
            )}
            featuredImage={
              data.projectCustomFields.featuredImage.node.mediaItemUrl
            }
          />
        )}
      />
    </div>
  );
};
