import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";

interface EventCardProps {
  title: string;
  src: string;
  tags: string[];
  author: string;
  authorImage: string;
  location?: string;
  description: string;
  href?: string;
}

const ContentCard = ({
  title,
  src,
  tags,
  author,
  authorImage,
  location,
  description,
  href,
}: EventCardProps) => {
  return (
    <Link href={href ? href : "/"}>
      <Card className="h-[480px] w-[335px] transition ease-in-out hover:scale-105">
        <CardHeader>
          <div className="h-40 w-72">
            <Image
              src={src}
              alt={`${title} Image`}
              height={200}
              width={300}
              className="m-full h-full rounded-md object-cover"
            />
          </div>
          <div className="flex gap-1 p-1">
            {tags.map((tag) => {
              return <Badge variant={"eventCard"}>{tag}</Badge>;
            })}
          </div>
          <CardTitle>{title}</CardTitle>
          <div className="flex gap-1 py-1">
            <Image
              src={authorImage}
              alt={`${author} Image`}
              height={25}
              width={25}
              className="rounded-full"
            />
            <div>{author}</div>
          </div>
          {location ? <CardDescription>📍{location}</CardDescription> : null}
        </CardHeader>
        <CardContent className="-mt-4">
          <p>{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ContentCard;
