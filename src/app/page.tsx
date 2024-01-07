import Image from "next/image";
import Navbar from "./_components/navbar";
import { Roboto, Urbanist } from "next/font/google";
import { cn } from "~/lib/utils";
import { Button } from "./_components/ui/button";
import CommunityCards from "./_components/community-cards";
import Link from "next/link";
import { Input } from "./_components/ui/input";
import EventCards from "./_components/event-cards";
import WikiCards from "./_components/wiki-cards";

const urbanist = Urbanist({ weight: "800", subsets: ["latin"] });
const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export default async function Home() {
  return (
    <main className="-mt-40 flex flex-col items-center overflow-clip pt-40">
      <Navbar />
      {/* Hero section */}
      <div id="home" className="relative -z-10 w-[1500px]">
        <Image
          src="/bubble1.png"
          height={280}
          width={280}
          alt="Bubble1"
          className="absolute left-[300px] top-24 -z-10 sm:left-[280px] md:left-[100px] lg:left-24"
        />
        <Image
          src="/bubble2.png"
          height={150}
          width={150}
          alt="Bubble2"
          className="absolute left-[480px] top-[470px] -z-10"
        />
        <Image
          src="/bubble3.png"
          height={250}
          width={250}
          alt="Bubble3"
          className="absolute right-[450px] top-[450px] -z-10 lg:right-96"
        />
        <Image
          src="/bubble4.png"
          height={200}
          width={200}
          alt="Bubble4"
          className="absolute right-[380px] top-32 -z-10 sm:right-80 md:right-44 lg:right-40"
        />
      </div>
      <div className="relative flex w-full flex-col items-center p-24 pb-52 md:pb-64 lg:pb-96">
        <Image
          src="/logo.png"
          height={120}
          width={120}
          alt="MDE Community Logo"
          className="mb-8"
        />
        <h1
          className={cn(
            "mb-8 text-center text-5xl md:text-6xl",
            urbanist.className,
          )}
        >
          Where Digital Nomads,
          <br /> Expats & Locals Meet
        </h1>
        <div className="flex gap-3">
          <Button>
            <Link href={"#communities"} className="font-bold">
              Join a community
            </Link>
          </Button>
          <Button variant="secondary">
            <Link href={"#events"}>View events</Link>
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
        className="-mt-40 flex w-full flex-col items-center pb-32 pt-40 "
      >
        <h1
          className={cn(
            "mb-8 text-center text-5xl md:text-6xl",
            urbanist.className,
          )}
        >
          Find Your Community
        </h1>

        <CommunityCards />
      </div>
      {/* TODO: Implement all communities page */}
      {/* <Button>View all communities</Button> */}
      {/* Events section */}
      <div id="events" className="-mt-40 flex w-full flex-col pb-32 pt-40">
        {/* <div className="flex justify-between px-12 py-3 lg:px-64"> */}
        <div className="flex justify-center py-3">
          <h1 className={cn("mb-8 text-4xl md:text-6xl", urbanist.className)}>
            See What's Happening
          </h1>
          {/* TODO: Implement all events page */}
          {/* <Button>View all events</Button> */}
        </div>
        <div className="flex flex-wrap justify-center gap-3 ">
          <EventCards />
        </div>
      </div>
      {/* Blog section */}
      <div
        id="blog"
        className="-mt-40 flex w-full flex-col justify-center pb-32 pt-40"
      >
        <h1
          className={cn(
            "mb-8 p-8 text-center text-4xl md:text-6xl",
            urbanist.className,
          )}
        >
          The Ultimate Medellin Guide 🇨🇴
        </h1>
        <div className="flex flex-wrap justify-center gap-3">
          <WikiCards />
        </div>
      </div>
      {/* Mission section */}

      <div className="-mt-40 flex w-full flex-col items-center px-5 pb-32 pt-40 lg:px-20">
        <h1
          className={cn(
            "mb-8 max-w-7xl p-8 text-center text-2xl md:text-4xl",
            urbanist.className,
          )}
        >
          We want to create and curate experiences that foster connection,
          <span className="bg-amber-100">
            providing opportunities for locals and foreigners alike to promote
            personal growth,
          </span>{" "}
          community building, and social impact.
        </h1>
      </div>
      {/* Donate section */}
      <div
        id="donate"
        className="-mt-40 flex flex-wrap-reverse items-center justify-center gap-20 p-12 pt-40"
      >
        <div className="flex max-w-[580px] flex-col">
          <h1 className={cn("text-4xl lg:text-6xl", urbanist.className)}>
            Your support
            <br />
            goes a long way...
          </h1>
          <div className="max-w-[470px] py-5">
            A healthy community is created through meaningful connections in
            safe environments. Support the creation of these spaces by choosing
            to donate for the MDE Community team.
          </div>
          <Button variant="tertiary">
            <Link href="https://mdecommunity.com/fundraiser/" target="_blank">
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
      <div className="flex max-w-xl justify-center p-5">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-[#CB525D] p-16 text-white">
          <div className="text-4xl">👋🏽👋🏻👋🏾👋🏼👋🏿</div>
          <div className={cn("text-center text-3xl", roboto.className)}>
            Sign up to our
            <br />
            newsletter
          </div>
          <div className="text-center">
            Hear about the cool stuff happening in Medellín. We'll also be
            giving away some special passes and discounts to some events so stay
            tuned!
          </div>

          <Input type="email" placeholder="Email address" />
          <Button variant="tertiary" type="submit">
            Keep me updated
          </Button>
        </div>
      </div>
    </main>
  );
}
