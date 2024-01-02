import Image from "next/image";
import { Roboto, Urbanist } from "next/font/google";
import { cn } from "~/lib/utils";
import { Button } from "../_components/ui/button";
import CommunityCards from "../_components/community-cards";
import ContentCard from "../_components/content-card";
import Link from "next/link";
import { Input } from "../_components/ui/input";

const urbanist = Urbanist({ weight: "800", subsets: ["latin"] });
const roboto = Roboto({ weight: "700", subsets: ["latin"] });

export default async function Home() {
  const events = [
    {
      title: "F*ck the Small Talk",
      author: "Epic Llama",
      location: "Secret Location",
      src: "/ftst.png",
      description:
        "F*ck the Small Talk is an out-of-the-box social experience where strangers come together for an evening of meaningful, deep, & curious conversations!",
      authorImage: "/logo.png",
      tags: ["Fun", "Meetup"],
    },
    {
      title: "F*ck the Small Talk",
      author: "Epic Llama",
      location: "Secret Location",
      src: "/ftst.png",
      description:
        "F*ck the Small Talk is an out-of-the-box social experience where strangers come together for an evening of meaningful, deep, & curious conversations!",
      authorImage: "/logo.png",
      tags: ["Fun", "Meetup"],
    },
    {
      title: "F*ck the Small Talk",
      author: "Epic Llama",
      location: "Secret Location",
      src: "/ftst.png",
      description:
        "F*ck the Small Talk is an out-of-the-box social experience where strangers come together for an evening of meaningful, deep, & curious conversations!",
      authorImage: "/logo.png",
      tags: ["Fun", "Meetup"],
    },
  ];

  return (
    <main className="flex flex-col items-center overflow-clip">
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
          WHERE DIGITAL NOMADS,
          <br /> EXPATS & LOCALS MEET
        </h1>
        <div className="flex gap-3">
          <Button>
            <Link href={"#communities"}>Join a community</Link>
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
      <div id="communities" className="flex w-full flex-col items-center pb-32">
        <h1
          className={cn(
            "mb-8 text-center text-5xl md:text-6xl",
            urbanist.className,
          )}
        >
          FIND YOUR COMMUNITY
        </h1>

        <CommunityCards />
      </div>
      {/* TODO: Implement all communities page */}
      {/* <Button>View all communities</Button> */}
      {/* Events section */}
      <div id="events" className="flex w-full flex-col pb-32">
        {/* <div className="flex justify-between px-12 py-3 lg:px-64"> */}
        <div className="mb-8 flex items-center justify-center">
          <h1 className={cn("pr-8 text-4xl md:text-6xl", urbanist.className)}>
            SEE WHAT'S HAPPENING
          </h1>
          {/* TODO: Implement all events page */}
          {/* <Button>View all events</Button> */}
        </div>
        <div className="flex flex-wrap justify-center gap-3 xl:px-64">
          {events.map((event, index) => (
            <ContentCard
              key={index}
              title={event.title}
              src={event.src}
              tags={event.tags}
              author={event.author}
              authorImage={event.authorImage}
              location={event.location}
              description={event.description}
            />
          ))}
        </div>
      </div>
      {/* Blog section */}
      <div id="blog" className="flex w-full flex-col justify-center pb-32">
        <div className="mb-8 flex items-center justify-center">
          <h1 className={cn("pr-8 text-4xl md:text-6xl", urbanist.className)}>
            THE ULTIMATE MEDELLIN GUIDE 🇨🇴
          </h1>

          {/* <Link href={"/wiki"}>
            <Button>See more</Button>
          </Link> */}
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {events.map((event, index) => (
            <ContentCard
              key={index}
              title={event.title}
              src={event.src}
              tags={event.tags}
              author={event.author}
              authorImage={event.authorImage}
              description={event.description}
            />
          ))}
        </div>
      </div>
      {/* Mission section */}

      <div className="flex w-full flex-col items-center px-5 pb-32 lg:px-20">
        <h1
          className={cn(
            "mb-8 p-8 text-center text-2xl md:text-4xl",
            urbanist.className,
          )}
        >
          WE WANT TO CREATE AND CURATE EXPERIENCES THAT FOSTER CONNECTION,
          <span className="bg-amber-100">
            PROVIDING OPPORTUNITIES FOR LOCALS AND FOREIGNERS ALIKE TO PROMOTE
            PERSONAL GROWTH,
          </span>{" "}
          COMMUNITY BUILDING, AND SOCIAL IMPACT.
        </h1>
      </div>
      {/* Donate section */}
      <div
        id="donate"
        className="flex flex-wrap-reverse items-center justify-center gap-10 p-12"
      >
        <div className="flex max-w-[580px] flex-col">
          <h1 className={cn("text-4xl lg:text-6xl", urbanist.className)}>
            YOUR SUPPORT
            <br />
            GOES A LONG WAY...
          </h1>
          <div className="py-5">
            A healthy community is created through meaningful connections in
            safe environments. Support the creation of these spaces by choosing
            to donate for the MDE Community team.
          </div>
          <Button className="w-fit">
            <Link href={"#donate"}>Donate here 💜</Link>
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
          <Button variant="newsletter" type="submit">
            Keep me updated
          </Button>
        </div>
      </div>
    </main>
  );
}
