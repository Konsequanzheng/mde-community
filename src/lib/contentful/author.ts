import type { TypeAuthorSkeleton } from "./types";
import type { Entry, UnresolvedLink } from "contentful";
import type { ContentImage } from "./contentImage";
import { parseContentfulContentImage } from "./contentImage";

type AuthorEntry =
  | Entry<TypeAuthorSkeleton, undefined, string>
  | UnresolvedLink<"Entry">;

// Our simplified version of an Author.
// We don't need all the data that Contentful gives us.
export interface Author {
  name: string;
  image: ContentImage | null;
}

// A function to transform a Contentful blog post
// into our own Author object.
export function parseContentfulAuthor(
  authorEntry?: AuthorEntry,
): Author | null {
  if (!authorEntry || !("fields" in authorEntry)) {
    return null;
  }

  return {
    name: authorEntry.fields.name ?? "",
    image: parseContentfulContentImage(authorEntry.fields.image),
  };
}
