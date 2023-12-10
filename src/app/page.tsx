import Image from "next/image";
import Navbar from "./_components/navbar";
import { Urbanist } from "next/font/google";
import { cn } from "~/lib/utils";
import { Button } from "./_components/ui/button";

const urbanist = Urbanist({ weight: "800", subsets: ["latin"] });

export default async function Home() {
  const communities = [
    {
      title: "🖼️ Arts & Culture Club",
      href: "",
      color: "bg-gray-100",
    },
    {
      title: "✍🏻 Writing Club",
      href: "",
      color: "bg-blue-100",
    },
    {
      title: "🏳️‍🌈 Pride Zone",
      href: "",
      color: "bg-pink-100",
    },
    {
      title: "⛰️ Hiking",
      href: "",
      color: "bg-green-50",
    },
    {
      title: "🍳 Cooking Club",
      href: "",
      color: "bg-yellow-50",
    },
    {
      title: "👸🏽 Mujeres Group",
      href: "",
      color: "bg-purple-100",
    },
    {
      title: "🚺 Women Over 50",
      href: "",
      color: "bg-amber-50",
    },
    {
      title: "🚴🏻‍♀️ Cycling Club",
      href: "",
      color: "bg-gray-100",
    },
  ];
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      {/* Hero section */}
      <div className="flex flex-col items-center p-24 pb-96">
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
        <Image
          src="/bubble1.png"
          height={200}
          width={200}
          alt="Bubble1"
          className="absolute left-0 -z-10"
        />
        <Image
          src="/bubble2.png"
          height={150}
          width={150}
          alt="Bubble2"
          className="absolute bottom-48 left-96 -z-10"
        />
        <Image
          src="/bubble3.png"
          height={250}
          width={250}
          alt="Bubble3"
          className="absolute bottom-44 right-60 -z-10"
        />
        <Image
          src="/bubble4.png"
          height={200}
          width={200}
          alt="Bubble4"
          className="absolute right-10 top-32 -z-10"
        />
      </div>
      {/* Communities section */}
      <div className="flex w-full flex-col items-center pb-52">
        <h1 className={cn("mb-8 text-center text-6xl", urbanist.className)}>
          FIND YOUR COMMUNITY
        </h1>
        <div className="mb-8 flex w-4/6 flex-wrap justify-center gap-4">
          {/* TODO: ADD LINK TO COMMUNITIES */}
          {communities.map((community, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center justify-center rounded-full px-4 py-3",
                community.color,
              )}
            >
              {community.title}
            </div>
          ))}
        </div>
        <Button>View all communities</Button>
      </div>
    </main>
  );
}
