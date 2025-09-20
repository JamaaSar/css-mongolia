// src/app/[locale]/page.js
import { ProjectIdType } from "graphql/generated";
import { H2 } from "@/components/generic/Typography";
import { getTranslated } from "@/lib/getTranslated";
import { CalendarDateRangeIcon } from "@heroicons/react/24/solid";
import { formatDate } from "@/lib/formatDate";
import { getProjectFull } from "@/lib/graphql-api/queries/project";
import { redirect } from "@/i18n/navigation";

export default async function ProjectPostPage({ params }) {
  const { slug, locale } = await params;
  const isPostId = slug.match(/^[0-9]+$/);

  const post = await getProjectFull(
    slug,
    isPostId ? ProjectIdType.DatabaseId : ProjectIdType.Slug
  );
  const projectLanguage = post?.projectCustomFields?.projectLanguage ?? null;

  if (
    projectLanguage &&
    projectLanguage !== "both" &&
    projectLanguage !== locale
  ) {
    return redirect({
      href: "/news",
      locale: locale,
    });
  }
  return (
    <div>
      <article>
        {/* <BreadCrumb breadCrumbItems={breadCrumbItems} /> */}
        <div className="css-container 2xl:container m-auto">
          <div className="news-main-content">
            <div className="article_news">
              <H2 className="uppercase" title={post.title} />
              <div className="subSection">
                <span className="flex gap-4">
                  <CalendarDateRangeIcon className="w-6 h-6" />
                  {formatDate(post?.dateGmt)}
                </span>
              </div>
              <div className="flex flex-col gap-6 xl:flex-row  w-full items-start">
                <img
                  src={post.projectCustomFields.featuredImage.node.mediaItemUrl}
                  alt="featured"
                  className="mx-auto content-start max-w-[460px]"
                />
                <div
                  className="articleBody"
                  dangerouslySetInnerHTML={{
                    __html: getTranslated(
                      locale,
                      post.projectCustomFields.bodyMn,
                      post.projectCustomFields.body
                    ),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
