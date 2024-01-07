import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";

interface CommunityCardProps {
  title: string;
  href: string;
  color?: string;
}

const communities = [
  {
    title: "🖼️ Arts & Culture Club",
    href: "https://mdecommunity.typeform.com/arts-culture",
    color: "bg-gray-100",
  },
  {
    title: "✍🏻 Writing Club",
    href: "https://mdecommunity.typeform.com/mdewritingclub",
    color: "bg-blue-100",
  },
  {
    title: "🏳️‍🌈 Pride Zone",
    href: "https://mdecommunity.typeform.com/pridezone",
    color: "bg-pink-100",
  },
  {
    title: "⛰️ Hiking",
    href: "https://mdecommunity.typeform.com/hiking",
    color: "bg-green-50",
  },
  {
    title: "🍳 Cooking Club",
    href: "https://mdecommunity.typeform.com/cookingclub",
    color: "bg-yellow-50",
  },
  {
    title: "👸🏽 Mujeres Group",
    href: "https://mdecommunity.typeform.com/mdemujeres",
    color: "bg-purple-100",
  },
  {
    title: "🚺 Women Over 50",
    href: "https://mdecommunity.typeform.com/mdewome50",
    color: "bg-amber-50",
  },
  {
    title: "🚴🏻‍♀️ Cycling Club",
    href: "https://mdecommunity.typeform.com/cyclingclub",
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
    <Link href={href} target="_blank">
      <div
        className={cn(
          "flex items-center justify-center rounded-full px-4 py-3 transition hover:scale-105",
          color,
        )}
      >
        {title}
      </div>
    </Link>
  );
};

export default CommunityCards;
