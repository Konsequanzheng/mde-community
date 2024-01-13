import { draftMode } from "next/headers";

import Link from "next/link";
import { fetchAllBlogPosts } from "~/lib/contentful/blogPosts";

async function Home() {
  // Fetch blog posts using the content preview
  // if draft mode is enabled:
  const blogPosts = await fetchAllBlogPosts({
    preview: draftMode().isEnabled,
  });

  return (
    <main className="p-[6vw]">
      <div className="prose">
        <h1>My Contentful Blog</h1>
        <ul>
          {blogPosts.map((blogPost) => {
            return (
              <li key={blogPost.slug}>
                {blogPost.image && (
                  <div className="h-20 w-32">
                    <img
                      src={blogPost.image.src}
                      // Use the Contentful Images API to render
                      // responsive images. No next/image required:
                      srcSet={`${blogPost.image.src}?w=300 1x, ${blogPost.image.src} 2x`}
                      width={300}
                      height={300}
                      alt={blogPost.image.alt}
                      className="object-cover"
                    />
                  </div>
                )}
                <Link href={`/wiki/${blogPost.slug}`}>{blogPost.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default Home;
