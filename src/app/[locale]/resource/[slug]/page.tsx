// src/app/[locale]/page.js
import { ProjectIdType } from "graphql/generated";
import { H2 } from "@/components/generic/Typography";
import { getTranslated } from "@/lib/getTranslated";
import { CalendarDateRangeIcon } from "@heroicons/react/24/solid";
import { formatDate } from "@/lib/formatDate";
import { getProjectFull } from "@/lib/graphql-api/queries/project";

export default async function ProjectPostPage({ params }) {
  const { slug, locale } = await params;
  const isPostId = slug.match(/^[0-9]+$/);

  const post = await getProjectFull(
    slug,
    isPostId ? ProjectIdType.DatabaseId : ProjectIdType.Slug
  );

  return (
    <div>
      <article>
        {/* <BreadCrumb breadCrumbItems={breadCrumbItems} /> */}
        <div className="css-container 2xl:container m-auto">
          <div className="article_news">
            <H2 className="uppercase" title={post.title} />
            <div className="subSection">
              <div className="authorsSection">
                {/* {post?.authors && (
                          <>
                            {post?.authors?.map((author: any) => (
                              <a key={Math.random()} className="authors" href={author.authorLink} target="_blank">
                                {' '}
                                {author.name}
                                <span className="custom_comma">,</span>
                              </a>
                            ))}
                          </>
                        )} */}
              </div>
              <span className="flex gap-4">
                <CalendarDateRangeIcon className="w-6 h-6" />
                {formatDate(post?.dateGmt)}
              </span>
            </div>
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
      </article>
    </div>
  );
}
