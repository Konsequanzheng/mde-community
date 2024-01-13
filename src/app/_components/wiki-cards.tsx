import { fetchBlogPosts } from "~/lib/contentful/blogPosts";
import ContentCard from "./content-card";
import { draftMode } from "next/headers";

const WikiCards = async () => {
  const blogPosts = await fetchBlogPosts({
    preview: draftMode().isEnabled,
    amount: 3,
  });

  return (
    <>
      {blogPosts.map((blogPost) => {
        return (
          <ContentCard
            key={blogPost.slug}
            title={blogPost.title}
            src={blogPost.image?.src}
            tags={blogPost.tags}
            author={blogPost.author?.name}
            authorImage={blogPost.author?.image?.src!}
            description={blogPost.teaser}
            href={`/wiki/${blogPost.slug}`}
          />
        );
      })}
    </>
  );
};

export default WikiCards;
