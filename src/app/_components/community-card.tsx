import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";

interface CommunityCardProps {
  title: string;
  href: string;
  color?: string;
}

const CommunityCard = ({
  title,
  href,
  color = "bg-gray-100",
}: CommunityCardProps) => {
  return (
    <Link href={href}>
      <div
        className={cn(
          "flex items-center justify-center rounded-full px-4 py-3",
          color,
        )}
      >
        {title}
      </div>
    </Link>
  );
};

export default CommunityCard;
