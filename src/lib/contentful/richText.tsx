/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { BLOCKS, INLINES, type Inline } from "@contentful/rich-text-types";
import type {
  Document as RichTextDocument,
  Node,
} from "@contentful/rich-text-types";
import {
  documentToReactComponents,
  type Options,
} from "@contentful/rich-text-react-renderer";
import Image from "next/image";

const renderOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <p>
          {children}
          <br />
        </p>
      );
    },
    [INLINES.EMBEDDED_ENTRY]: (node: Node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if ((node as Inline).data.target.sys.contentType.sys.id === "blogPost") {
        return (
          <a href={`/blog/${(node as Inline).data.target.fields.slug}`}>
            {(node as Inline).data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="text-3xl">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="text-xl">{children}</h3>;
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul className="list-disc pl-8">{children}</ul>;
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return <ol className="list-decimal pl-8">{children}</ol>;
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <li>{children}</li>;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if ((node as any).data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{(node as any).data.target.fields.code}</code>
          </pre>
        );
      }

      if ((node as any).data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <div className="w-96">
            <iframe
              src={(node as any).data.target.fields.embedUrl}
              height="100%"
              width="100%"
              title={(node as any).data.target.fields.title}
              allowFullScreen={true}
            />
          </div>
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <Image
          src={`https:${(node as any).data.target.fields.file.url}`}
          height={(node as any).data.target.fields.file.details.image.height}
          width={(node as any).data.target.fields.file.details.image.width}
          alt={(node as any).data.target.fields.description}
        />
      );
    },
  },
};

type RichTextProps = {
  document: RichTextDocument | null;
};

function RichText({ document }: RichTextProps) {
  if (!document) {
    return null;
  }

  return <>{documentToReactComponents(document, renderOptions)}</>;
}

export default RichText;
