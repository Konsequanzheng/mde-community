import type { TypeBlogPostSkeleton } from "./types";
import type { Entry } from "contentful";
import type { Document as RichTextDocument } from "@contentful/rich-text-types";
import contentfulClient from "./contentfulClient";
import type { ContentImage } from "./contentImage";
import { parseContentfulContentImage } from "./contentImage";
import { parseContentfulAuthor, type Author } from "./author";

type BlogPostEntry = Entry<TypeBlogPostSkeleton, undefined, string>;

// Our simplified version of a BlogPost.
// We don't need all the data that Contentful gives us.
export interface BlogPost {
  title: string;
  slug: string;
  body: RichTextDocument | null;
  image: ContentImage | null;
  author: Author | null;
  date: Date | null;
}

// A function to transform a Contentful blog post
// into our own BlogPost object.
export function parseContentfulBlogPost(
  blogPostEntry?: BlogPostEntry,
): BlogPost | null {
  if (!blogPostEntry) {
    return null;
  }

  return {
    title: blogPostEntry.fields.title || "",
    slug: blogPostEntry.fields.slug,
    body: blogPostEntry.fields.body || null,
    image: parseContentfulContentImage(blogPostEntry.fields.image),
    author: parseContentfulAuthor(blogPostEntry.fields.author),
    date: blogPostEntry.fields.date
      ? new Date(blogPostEntry.fields.date)
      : null,
  };
}

// A function to fetch all blog posts.
// Optionally uses the Contentful content preview.
interface FetchBlogPostsOptions {
  preview: boolean;
}
export async function fetchBlogPosts({
  preview,
}: FetchBlogPostsOptions): Promise<BlogPost[]> {
  const contentful = contentfulClient({ preview });

  const blogPostsResult = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: "blogPost",
    include: 2,
    order: ["fields.title"],
  });

  return blogPostsResult.items.map(
    (blogPostEntry) => parseContentfulBlogPost(blogPostEntry)!,
  );
}

// A function to fetch a single blog post by its slug.
// Optionally uses the Contentful content preview.
interface FetchBlogPostOptions {
  slug: string;
  preview: boolean;
}
export async function fetchBlogPost({
  slug,
  preview,
}: FetchBlogPostOptions): Promise<BlogPost | null> {
  const contentful = contentfulClient({ preview });

  const blogPostsResult = await contentful.getEntries<TypeBlogPostSkeleton>({
    content_type: "blogPost",
    "fields.slug": slug,
    include: 2,
  });

  return parseContentfulBlogPost(blogPostsResult.items[0]);
}