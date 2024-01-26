import Image from "next/image";
import { Urbanist } from "next/font/google";
import { cn } from "~/lib/utils";
import { Button } from "../_components/ui/button";
import CommunityCards from "../_components/community-cards";
import Link from "next/link";
import EventCards from "../_components/event-cards";
import WikiCards from "../_components/wiki-cards";
import NewsletterCard from "../_components/newsletter-card";

const urbanist = Urbanist({ weight: "800", subsets: ["latin"] });
const sectionHeaderStyle = cn(
  "text-4xl md:text-6xl text-center mb-8",
  urbanist.className,
);

export default async function Home() {
  return (
    <main className="-mt-40 flex flex-col items-center overflow-clip pt-40">
      {/* Hero section */}
      <div id="home" className="relative -z-10 w-[1500px]">
        <Image
          src="/bubble1.png"
          height={280}
          width={280}
          alt="Bubble1"
          className="absolute left-[300px] top-10 -z-10  sm:left-[280px] md:left-[100px] md:top-24 lg:left-24"
        />
        <Image
          src="/bubble2.png"
          height={150}
          width={150}
          alt="Bubble2"
          className="absolute left-[480px] top-[420px] -z-10 md:top-[450px]"
        />
        <Image
          src="/bubble3.png"
          height={250}
          width={250}
          alt="Bubble3"
          className="absolute right-[450px] top-[350px] -z-10 md:top-[450px] lg:right-96"
        />
        <Image
          src="/bubble4.png"
          height={200}
          width={200}
          alt="Bubble4"
          className="absolute right-[380px] top-20 -z-10 sm:right-80 md:right-44 md:top-32 lg:right-40"
        />
      </div>
      <div className="relative flex w-full flex-col items-center py-24 pb-52 md:pb-64 lg:pb-96">
        <Image
          src="/logo.png"
          height={120}
          width={120}
          alt="MDE Community Logo"
          className="mb-8"
        />
        <h1
          className={cn(
            "mb-8 text-center text-4xl md:text-6xl",
            urbanist.className,
          )}
        >
          Where Digital Nomads,
          <br /> Expats & Locals Meet
        </h1>
        <div className="flex gap-3">
          <Button variant="secondary" className="font-bold" asChild>
            <Link href="#events">View events</Link>
          </Button>
          <Button asChild>
            <Link href="#communities" className="font-bold">
              Join a community
            </Link>
          </Button>
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
        {/* <Swish className="absolute -z-50" /> */}
      </div>
      {/* Communities section */}
      <div
        id="communities"
        className="-mt-40 flex w-full flex-col items-center pb-32 pt-40"
      >
        <h2 className={sectionHeaderStyle}>Find Your Community</h2>
        <CommunityCards />
        <Button asChild>
          <Link href="https://mdecommunity.com/communities/">
            View all communities
          </Link>
        </Button>
        {/* TODO: Implement all communities page */}
      </div>
      {/* Events section */}
      <div
        id="events"
        className="-mt-28 flex w-full flex-col items-center pb-32 pt-28"
      >
        <h2 className={sectionHeaderStyle}>See What's Happening</h2>
        <div className="flex flex-wrap justify-center gap-3 pb-10">
          <EventCards />
        </div>
        {/* TODO: Implement all events page */}
        <Button asChild>
          <Link href="https://linktr.ee/mdecommunity">View all events</Link>
        </Button>
      </div>
      {/* Blog section */}
      <div
        id="blog"
        className="-mt-28 flex w-full flex-col justify-center pb-32 pt-28"
      >
        <h2 className={sectionHeaderStyle}>The Ultimate Medellin Guide 🇨🇴</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <WikiCards />
        </div>
      </div>
      {/* Mission section */}

      <div className="-mt-28 flex w-full flex-col items-center px-5 pb-32 pt-28 lg:px-20">
        <h3
          className={cn(
            "max-w-6xl py-8 text-center text-2xl md:text-4xl",
            urbanist.className,
          )}
        >
          We want to create and curate experiences that foster connection,{" "}
          <span className="bg-amber-100">
            providing opportunities for locals and foreigners alike to promote
            personal growth,
          </span>{" "}
          community building, and social impact.
        </h3>
      </div>
      {/* Donate section */}
      <div
        id="donate"
        className="-mt-40 flex flex-wrap-reverse items-center justify-center gap-20 p-12 pt-40"
      >
        <div className="flex max-w-[580px] flex-col">
          {/* TODO: the h1 can probably be done better but this does the job */}
          <h2 className={cn("text-4xl lg:text-6xl", urbanist.className)}>
            Your support
          </h2>
          <h2 className={cn("mt-2 text-4xl lg:text-6xl", urbanist.className)}>
            goes a long way...
          </h2>
          <div className="max-w-[470px] py-5">
            A healthy community is created through meaningful connections in
            safe environments. Support the creation of these spaces by choosing
            to donate for the MDE Community team.
          </div>
          <Button variant="tertiary" asChild>
            <Link
              href="https://mdecommunity.com/fundraiser/"
              target="_blank"
              className="font-bold"
            >
              Donate here 💜
            </Link>
          </Button>
        </div>
        <div>
          <Image
            src="/mde-community-team.png"
            height={550}
            width={550}
            alt="MDE Community Team"
            className="rounded-md"
          />
        </div>
        <Image
          src="/hero-swish.svg"
          height={2000}
          width={2000}
          alt="Hero Swish"
          className="absolute -z-50"
        />
        {/* <Swish className="absolute -z-50" /> */}
      </div>
      {/* Newsletter section */}
      <div className="p-20 pt-32">
        <NewsletterCard />
      </div>
    </main>
  );
}
