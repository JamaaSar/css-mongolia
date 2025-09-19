"use client";

import { useState } from "react";
import Pagination from "@/components/generic/Pagination";
import { getTranslated } from "@/lib/getTranslated";
import { Member, Project } from "graphql/generated";
import { MemberCard } from "@/components/card/MemberCard";
import { H2 } from "@/components/generic/Typography";

export default function MembersPage({ title, members, locale }) {
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 4;

  const indexOfLastOrg = currentPage * cardsPerPage;
  const indexOfFirstOrg = indexOfLastOrg - cardsPerPage;

  // Pagination logic
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const boardMembers = members.filter(
    (member) => member.memberCustomFields.isBoardMember === "true"
  );
  const orgMembers = members.filter(
    (member) => member.memberCustomFields.isBoardMember === "false"
  );
  const allMembers = orgMembers.slice(indexOfFirstOrg, indexOfLastOrg);

  return (
    <div>
      <H2
        title={getTranslated(
          locale,
          title.boardMembersTitleMn,
          title.boardMembersTitle
        )}
        descriptionHtml={getTranslated(
          locale,
          title.boardMembersExcerptMn,
          title.boardMembersExcerpt
        )}
        marginTop={false}
      />
      <div className="grid gap-4 grid-cols-1 xl:grid-cols-2 ">
        {boardMembers.map((data: Member) => (
          <MemberCard
            key={data.databaseId}
            name={getTranslated(
              locale,
              data.memberCustomFields.nameMn,
              data.memberCustomFields.name
            )}
            position={getTranslated(
              locale,
              data.memberCustomFields.positionMn,
              data.memberCustomFields.position
            )}
            isBoardMember={data.memberCustomFields.isBoardMember}
            bio={getTranslated(
              locale,
              data.memberCustomFields.bioMn,
              data.memberCustomFields.bio
            )}
            image={data.memberCustomFields.image?.node?.mediaItemUrl}
            linkedin={data.memberCustomFields.linkedin}
            twitter={data.memberCustomFields.twitter}
            facebook={data.memberCustomFields.facebook}
          />
        ))}
      </div>
      <H2
        title={getTranslated(locale, title.membersTitleMn, title.membersTitle)}
        descriptionHtml={getTranslated(
          locale,
          title.membersExcerptMn,
          title.membersExcerpt
        )}
      />
      <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
        {allMembers.map((data: Member) => (
          <MemberCard
            key={data.databaseId}
            name={getTranslated(
              locale,
              data.memberCustomFields.nameMn,
              data.memberCustomFields.name
            )}
            position={getTranslated(
              locale,
              data.memberCustomFields.positionMn,
              data.memberCustomFields.position
            )}
            isBoardMember={data.memberCustomFields.isBoardMember}
            bio={getTranslated(
              locale,
              data.memberCustomFields.bioMn,
              data.memberCustomFields.bio
            )}
            image={data.memberCustomFields.image?.node?.mediaItemUrl}
            linkedin={data.memberCustomFields.linkedin}
            twitter={data.memberCustomFields.twitter}
            facebook={data.memberCustomFields.facebook}
          />
        ))}
      </div>
      <Pagination
        totalOrgs={orgMembers.length}
        currentPage={currentPage}
        pagesToDisplay={cardsPerPage}
        paginate={(pageNumber) => paginate(pageNumber)}
      />
    </div>
  );
}
