import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeAuthorSkeleton } from "./TypeAuthor";

export interface TypeBlogPostFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  author: EntryFieldTypes.EntryLink<TypeAuthorSkeleton>;
  tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  image?: EntryFieldTypes.AssetLink;
  body: EntryFieldTypes.RichText;
  teaser: EntryFieldTypes.Symbol;
  date?: EntryFieldTypes.Date;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  "blogPost"
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;
