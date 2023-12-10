import Image from "next/image";
import Navbar from "./_components/navbar";
import { Urbanist } from "next/font/google";
import { cn } from "~/lib/utils";
import { Button } from "./_components/ui/button";
import CommunityCard from "./_components/community-card";
import EventCard from "./_components/event-card";

const urbanist = Urbanist({ weight: "800", subsets: ["latin"] });

export default async function Home() {
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
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      {/* Hero section */}
      <div className="relative -z-10 w-[1500px]">
        <Image
          src="/bubble1.png"
          height={200}
          width={200}
          alt="Bubble1"
          className="absolute left-[450px] top-20 -z-10 lg:left-12"
        />
        <Image
          src="/bubble2.png"
          height={150}
          width={150}
          alt="Bubble2"
          className="absolute left-[480px] top-[450px] -z-10"
        />
        <Image
          src="/bubble3.png"
          height={250}
          width={250}
          alt="Bubble3"
          className="absolute right-96 top-[450px] -z-10 lg:right-96"
        />
        <Image
          src="/bubble4.png"
          height={200}
          width={200}
          alt="Bubble4"
          className="absolute right-[450px] top-32 -z-10 lg:right-10"
        />
      </div>
      <div className="relative flex w-full flex-col items-center p-24 pb-96">
        <Image
          src="/logo.png"
          height={120}
          width={120}
          alt="MDE Community Logo"
          className="mb-8"
        />
        <h1 className={cn("mb-8 text-center text-6xl", urbanist.className)}>
          WHERE DIGITAL NOMADS,
          <br /> EXPATS & LOCALS MEET
        </h1>
        <div className="flex gap-3">
          <Button>Join a community</Button>
          <Button variant="secondary">View events</Button>
        </div>

        {/* Background and bubble images */}
        {/* TODO: Change file names for better SEO */}
        <Image
          src="/hero-swish.svg"
          height={2000}
          width={2000}
          alt="Hero Swish"
          className="absolute -z-50"
        />
      </div>
      {/* Communities section */}
      <div className="flex w-full flex-col items-center pb-32">
        <h1 className={cn("mb-8 text-center text-6xl", urbanist.className)}>
          FIND YOUR COMMUNITY
        </h1>
        <div className="mb-8 flex w-4/6 flex-wrap justify-center gap-4">
          {/* TODO: ADD LINK TO COMMUNITIES */}
          {communities.map((community) => (
            <CommunityCard
              title={community.title}
              href={community.href}
              color={community.color}
            />
          ))}
        </div>
        <Button>View all communities</Button>
      </div>
      {/* Events section */}
      <div className="flex w-full flex-col">
        <div className="flex justify-between px-28">
          <h1 className={cn("mb-8 text-center text-6xl", urbanist.className)}>
            SEE WHAT'S HAPPENING
          </h1>
          <Button>View all events</Button>
        </div>
        <div className="flex gap-3">
          <EventCard
            title="F*ck the Small Talk"
            author="Epic Llama"
            location="Secret Location"
            src="/ftst.png"
            description="F*ck the Small Talk is an out-of-the-box social experience where strangers come together for an evening of meaningful, deep, & curious conversations!"
          />
        </div>
      </div>
    </main>
  );
}
