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
    color: "bg-muejeres",
  },
  {
    title: "🍳 Cooking Club",
    href: "https://mdecommunity.typeform.com/cookingclub",
    color: "bg-cooking",
  },
  {
    title: "⛰️ Hiking",
    href: "https://mdecommunity.typeform.com/hiking",
    color: "bg-hiking",
  },

  {
    title: "🖼️ Arts & Culture Club",
    href: "https://mdecommunity.typeform.com/arts-culture",
    color: "bg-arts",
  },
  {
    title: "✍🏻 Writing Club",
    href: "https://mdecommunity.typeform.com/mdewritingclub",
    color: "bg-writing",
  },
  {
    title: "🏳️‍🌈 Pride Zone",
    href: "https://mdecommunity.typeform.com/pridezone",
    color: "bg-pride",
  },

  {
    title: "🚺 Women Over 50",
    href: "https://mdecommunity.typeform.com/mdewome50",
    color: "bg-womenover50",
  },
  {
    title: "🚴🏻‍♀️ Cycling Club",
    href: "https://mdecommunity.typeform.com/cyclingclub",
    color: "bg-cycling",
  },
];

const CommunityCards = () => {
  return (
    <div className="mb-8 flex w-4/6 max-w-[950px] flex-wrap justify-center gap-4">
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
