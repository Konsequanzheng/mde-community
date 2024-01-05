import type { Metadata, ResolvingMetadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { fetchBlogPost, fetchBlogPosts } from "~/lib/contentful/blogPosts";
import RichText from "~/lib/contentful/richText";
import Image from "next/image";
import NewsletterCard from "~/app/_components/newsletter-card";

interface BlogPostPageParams {
  slug: string;
}

interface BlogPostPageProps {
  params: BlogPostPageParams;
}

// Tell Next.js about all our blog posts so
// they can be statically generated at build time.
export async function generateStaticParams(): Promise<BlogPostPageParams[]> {
  const blogPosts = await fetchBlogPosts({ preview: false });

  return blogPosts.map((post) => ({ slug: post.slug }));
}

// For each blog post, tell Next.js which metadata
// (e.g. page title) to display.
export async function generateMetadata(
  { params }: BlogPostPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const blogPost = await fetchBlogPost({
    slug: params.slug,
    preview: draftMode().isEnabled,
  });

  if (!blogPost) {
    return notFound();
  }

  return {
    title: blogPost.title,
  };
}

// The actual BlogPostPage component.
async function BlogPostPage({ params }: BlogPostPageProps) {
  // Fetch a single blog post by slug,
  // using the content preview if draft mode is enabled:
  const blogPost = await fetchBlogPost({
    slug: params.slug,
    preview: draftMode().isEnabled,
  });

  if (!blogPost) {
    // If a blog post can't be found,
    // tell Next.js to render a 404 page.
    return notFound();
  }

  return (
    <div className="flex flex-col items-center">
      <div className="h-80 w-full max-w-6xl">
        {blogPost.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <Image
            src={`https:${blogPost.image.src}`}
            // Use the Contentful Images API to render
            // responsive images. No next/image required:
            width={blogPost.image.width}
            height={blogPost.image.height}
            alt={blogPost.image.alt}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="mt-8 flex w-full max-w-6xl flex-col justify-center px-12 py-8 sm:flex-row">
        {/* Sidebar section */}

        {/* <div className="mx-6 mb-5 flex h-32 w-80 sm:w-1/4"></div> */}
        {/* <div className="mx-6 mb-5 flex h-32 w-80 flex-col rounded-3xl bg-rose-500 bg-opacity-5 p-6 sm:w-1/4">
          <h1 className="font-bold">Jump to section:</h1>
        </div> */}
        {/* Text section */}
        <div className="flex w-3/4 flex-col pb-24">
          {/* Title */}
          <h1 className="text-4xl font-bold">{blogPost.title}</h1>

          {/* Author */}
          <div className="py-5">
            {blogPost.author && (
              <div className="flex items-center gap-3">
                <div className="h-16 w-16">
                  <Image
                    src={`https:${blogPost.author.image?.src}`}
                    width={50}
                    height={50}
                    alt={blogPost.author.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <b className="text-xl">{blogPost.author.name}</b>
                  <div>{blogPost.date ? blogPost.date.toDateString() : ""}</div>
                </div>
              </div>
            )}
          </div>

          <RichText document={blogPost.body} />
        </div>
      </div>
      <NewsletterCard />
    </div>
  );
}

export default BlogPostPage;
