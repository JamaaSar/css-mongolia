// src/app/[locale]/page.js
import { getNewsFull } from "@/lib/graphql-api/queries/news";
import { News, NewsIdType } from "graphql/generated";
import { H2 } from "@/components/generic/Typography";
import { getTranslated } from "@/lib/getTranslated";
import { CalendarDateRangeIcon } from "@heroicons/react/24/solid";
import { formatDate } from "@/lib/formatDate";

export default async function NewsPostPage({ params }) {
  const { slug, locale } = await params;
  const isPostId = slug.match(/^[0-9]+$/);

  console.log("isPostId", isPostId);
  console.log("slug", slug);

  const post = await getNewsFull(
    slug,
    isPostId ? NewsIdType.DatabaseId : NewsIdType.Slug
  );

  return (
    <div>
      <article>
        {/* <BreadCrumb breadCrumbItems={breadCrumbItems} /> */}
        <div className="css-container 2xl:container m-auto">
          <div className="article_news">
            <H2
              className="uppercase"
              title={getTranslated(
                locale,
                post?.newsCustomFields.titleMn,
                post?.newsCustomFields.title
              )}
            />
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
                  post.newsCustomFields.bodyMn,
                  post.newsCustomFields.body
                ),
              }}
            ></div>
          </div>
        </div>
      </article>
    </div>
  );
}
