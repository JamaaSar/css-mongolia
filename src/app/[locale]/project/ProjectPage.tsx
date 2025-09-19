"use client";

import { useState } from "react";
import Pagination from "@/components/generic/Pagination";
import { getTranslated } from "@/lib/getTranslated";
import { ProjectCard } from "@/components/card/ProjectCard";
import { Project } from "graphql/generated";

export default function ProjectPage({ projects, locale }) {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  const indexOfLastOrg = currentPage * cardsPerPage;
  const indexOfFirstOrg = indexOfLastOrg - cardsPerPage;

  // Pagination logic
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const currentProjects = projects.slice(indexOfFirstOrg, indexOfLastOrg);
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {currentProjects.map((data: Project) => (
          <ProjectCard
            key={data.databaseId}
            id={data.databaseId}
            slug={data.slug}
            title={data.title}
            excerpt={getTranslated(
              locale,
              data.projectCustomFields.excerptMn,
              data.projectCustomFields.excerpt
            )}
            featuredImage={
              data.projectCustomFields.featuredImage?.node?.mediaItemUrl
            }
          />
        ))}
      </div>
      <Pagination
        totalOrgs={projects.length}
        currentPage={currentPage}
        pagesToDisplay={cardsPerPage}
        paginate={(pageNumber) => paginate(pageNumber)}
      />
    </>
  );
}
