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

interface EventCardProps {
  title: string;
  src: string;
  tags: string[];
  author: string;
  authorImage: string;
  location?: string;
  description: string;
}

const ContentCard = ({
  title,
  src,
  tags,
  author,
  authorImage,
  location,
  description,
}: EventCardProps) => {
  return (
    <Card>
      <CardHeader>
        <Image
          src={src}
          alt={`${title} Image`}
          height={200}
          width={300}
          className="rounded-md"
        />
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
      <CardContent className="-mt-4 w-80">
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default ContentCard;
