import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";

type Props = {
  totalOrgs: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  pagesToDisplay: number;
};

const Pagination: FC<Props> = ({
  totalOrgs,
  paginate,
  pagesToDisplay,
  currentPage,
}) => {
  // Calculate number of pages required
  const pageCount = Math.ceil(totalOrgs / pagesToDisplay);
  const pageNumbers = [-2, -1, 0, 1, 2]
    .map((v) => currentPage + v)
    .filter((page) => page > 0 && page <= pageCount);

  if (pageCount <= 1) return null;

  // Switch pages and handle out of range numbers
  const pageSwitch = (number) => {
    if (number === "..." || number === 0 || number > pageCount) {
      return;
    } else {
      paginate(number);
    }
  };

  return (
    <nav className="pagination-wrapper">
      {currentPage > 1 ? (
        <li
          className=" paginationButton "
          onClick={() => pageSwitch(currentPage - 1)}
        >
          <ChevronLeftIcon className="h-6 w-6 text-[#030c13]" />
        </li>
      ) : (
        <div className="w-[90px]"></div>
      )}
      <ul className="pagination">
        {!pageNumbers.includes(1) && (
          <>
            <li key={1}>
              <a
                className={
                  currentPage === 1
                    ? "pageNumber pagination_active"
                    : "pageNumber"
                }
                onClick={() => pageSwitch(1)}
              >
                {1}
              </a>
            </li>
            {!pageNumbers.includes(2) && (
              <li key={"sep"}>
                <a className={"pageNumber"}>...</a>
              </li>
            )}
          </>
        )}

        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a
                className={
                  currentPage === number
                    ? "pageNumber pagination_active"
                    : "pageNumber"
                }
                onClick={() => pageSwitch(number)}
              >
                {number}
              </a>
            </li>
          );
        })}

        {!pageNumbers.includes(pageCount) && (
          <>
            {!pageNumbers.includes(pageCount - 1) && (
              <li key={"sep"}>
                <a className={"pageNumber"}>...</a>
              </li>
            )}
            <li key={pageCount}>
              <a
                className={
                  currentPage === pageCount
                    ? "pageNumber pagination_active"
                    : "pageNumber"
                }
                onClick={() => pageSwitch(pageCount)}
              >
                {pageCount}
              </a>
            </li>
          </>
        )}
      </ul>
      {currentPage !== pageCount ? (
        <li
          className="paginationButton "
          onClick={() => pageSwitch(currentPage + 1)}
        >
          <ChevronRightIcon className="h-6 w-6 text-[#030c13]" />
        </li>
      ) : (
        <div className="w-[90px]"></div>
      )}
    </nav>
  );
};

export default Pagination;
