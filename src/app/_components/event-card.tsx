import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

interface EventCardProps {
  title: string;
  src: string;
  tags: string[];
  author: string;
  authorImage: string;
  location: string;
  description: string;
}

const EventCard = ({
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
        <CardTitle>{title}</CardTitle>
        <CardDescription>📍{location}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default EventCard;
