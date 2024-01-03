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
  body: EntryFieldTypes.RichText;
  image?: EntryFieldTypes.AssetLink;
  author: EntryFieldTypes.EntryLink<TypeAuthorSkeleton>;
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
