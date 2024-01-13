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
    title: "👸🏽 Mujeres Group",
    href: "https://mdecommunity.typeform.com/mdemujeres",
    color: "bg-purple-200",
  },
  {
    title: "🍳 Cooking Club",
    href: "https://mdecommunity.typeform.com/cookingclub",
    color: "bg-yellow-100",
  },
  {
    title: "⛰️ Hiking",
    href: "https://mdecommunity.typeform.com/hiking",
    color: "bg-lime-200",
  },

  {
    title: "🖼️ Arts & Culture Club",
    href: "https://mdecommunity.typeform.com/arts-culture",
    color: "bg-blue-200",
  },
  {
    title: "✍🏻 Writing Club",
    href: "https://mdecommunity.typeform.com/mdewritingclub",
    color: "bg-[#F3838D]",
  },
  {
    title: "🏳️‍🌈 Pride Zone",
    href: "https://mdecommunity.typeform.com/pridezone",
    color: "bg-pink-200",
  },

  {
    title: "🚺 Women Over 50",
    href: "https://mdecommunity.typeform.com/mdewome50",
    color: "bg-amber-50",
  },
  {
    title: "🚴🏻‍♀️ Cycling Club",
    href: "https://mdecommunity.typeform.com/cyclingclub",
    color: "bg-orange-300",
  },
];

const CommunityCards = () => {
  return (
    <div className="mb-8 flex w-4/6 max-w-[900px] flex-wrap justify-center gap-4">
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
          "flex items-center justify-center rounded-full px-4 py-3 text-lg transition hover:scale-105",
          color,
        )}
      >
        {title}
      </div>
    </Link>
  );
};

export default CommunityCards;
