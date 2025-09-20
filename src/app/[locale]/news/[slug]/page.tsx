import { getNewsFull } from "@/lib/graphql-api/queries/news";
import { NewsIdType } from "graphql/generated";
import { H2 } from "@/components/generic/Typography";
import { getTranslated } from "@/lib/getTranslated";
import { CalendarDateRangeIcon } from "@heroicons/react/24/solid";
import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import { redirect } from "@/i18n/navigation";

export default async function NewsPostPage({ params }) {
  const { slug, locale } = await params;
  const isPostId = slug.match(/^[0-9]+$/);

  const post = await getNewsFull(
    slug,
    isPostId ? NewsIdType.DatabaseId : NewsIdType.Slug
  );

  const newsLanguage = post?.newsCustomFields?.newsLanguage ?? null;

  if (newsLanguage && newsLanguage !== "both" && newsLanguage !== locale) {
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
              <H2
                className="uppercase"
                title={getTranslated(
                  locale,
                  post?.newsCustomFields.titleMn,
                  post?.newsCustomFields.title
                )}
              />
              <div className="subSection">
                <span className="flex gap-4">
                  <CalendarDateRangeIcon className="w-6 h-6" />
                  {formatDate(post?.dateGmt)}
                </span>
              </div>
              {/* <img
                src={post.newsCustomFields.featuredImage.node.mediaItemUrl}
                alt="featured"
                className="mx-auto my-4"
              /> */}
              <Image
                src={post.newsCustomFields.featuredImage.node.mediaItemUrl}
                width={0}
                height={0}
                sizes="60vw"
                className="mx-auto my-4 w-full max-w-[700px] "
                alt="featured"
              />

              <div
                className="articleBody relative"
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
        </div>
      </article>
    </div>
  );
}
