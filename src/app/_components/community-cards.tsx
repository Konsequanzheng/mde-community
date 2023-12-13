import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";

interface CommunityCardProps {
  title: string;
  href: string;
  color?: string;
}

{
  /* TODO: ADD LINK TO COMMUNITIES */
}

const communities = [
  {
    title: "🖼️ Arts & Culture Club",
    href: "/art",
    color: "bg-gray-100",
  },
  {
    title: "✍🏻 Writing Club",
    href: "/writing",
    color: "bg-blue-100",
  },
  {
    title: "🏳️‍🌈 Pride Zone",
    href: "/pride",
    color: "bg-pink-100",
  },
  {
    title: "⛰️ Hiking",
    href: "/hiking",
    color: "bg-green-50",
  },
  {
    title: "🍳 Cooking Club",
    href: "/cooking",
    color: "bg-yellow-50",
  },
  {
    title: "👸🏽 Mujeres Group",
    href: "/muejeres",
    color: "bg-purple-100",
  },
  {
    title: "🚺 Women Over 50",
    href: "/women-over-50",
    color: "bg-amber-50",
  },
  {
    title: "🚴🏻‍♀️ Cycling Club",
    href: "/cycling",
    color: "bg-gray-100",
  },
];

const CommunityCards = () => {
  return (
    <div className="mb-8 flex w-4/6 max-w-[800px] flex-wrap justify-center gap-4">
      {communities.map((community) => (
        <CommunityCard
          key={community.title}
          title={community.title}
          href={community.href}
          color={community.color}
        />
      ))}
    </div>
  );
};

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

export default CommunityCards;
