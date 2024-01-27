import React from "react";
import Image from "next/image";
import { cn } from "~/lib/utils";
import { Button } from "../../_components/ui/button";
import Link from "next/link";
import { Urbanist } from "next/font/google";
import TestimonyCards from "../../_components/testimony-cards";

const urbanist = Urbanist({ weight: "800", subsets: ["latin"] });

const FundraiserPage = () => {
  return (
    <>
      <main className="-mt-40 flex flex-col items-center overflow-clip pt-40">
        {/* Hero section */}
        <div className="relative flex w-full flex-col items-center py-24">
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
            Help Us Build a Home <br />
            For the Community
          </h1>
          <p className="mb-8 max-w-xl text-center text-xl">
            Over the past year, MDE Community has united through events across
            the city. Now, we’re ready for the next chapter: a dedicated space
            to amplify our energy and foster creativity and connection. Help us
            transform a found house into our vibrant home!
          </p>
          <div className="flex gap-3">
            <Button
              variant="tertiary"
              size="lg"
              className="transition hover:scale-105"
              asChild
            >
              <Link href="https://ko-fi.com/mdecommunity">Donate Today</Link>
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
        {/* Stats section */}
        <div className="mb-5 flex flex-col items-center justify-center">
          <h2
            className={cn(
              "mb-8 text-center text-4xl md:text-6xl",
              urbanist.className,
            )}
          >
            Our Journey So Far...
          </h2>
          <div className="mb-8 text-center text-xl">
            We started MDE Community in February 2023
            <br /> and so far we have…
          </div>
          <Image
            src="/fundraiser/Stats-1.png"
            height={650}
            width={650}
            alt="MDE Community Stats"
            className="mb-8"
          />
        </div>
        {/* Community home section */}
        <div className="flex w-full flex-row items-center justify-between pb-8">
          <div className="flex-1">
            <Image
              src="/fundraiser/Casa-MDE.jpeg"
              layout="responsive"
              height={600}
              width={600}
              alt="MDE Community Home"
              className="mb-8"
            />
          </div>
          <div className="flex-1 pl-10">
            <h2 className={cn("mb-8 md:text-2xl", urbanist.className)}>
              A Community Home
            </h2>
            <p className="mb-10">
              The place for…
              <br />
              <br />
              📆 Events
              <br />
              🌞 Workshops
              <br />✨ Connections
              <br />
              <br />
              We will partner with local businesses to promote:
              <br />
              <br />
              ☕️ Culture
              <br />
              🌽 Food
              <br />
              🎨Art
              <br />
              <br />
              …and many more!
            </p>
            <Button
              variant="tertiary"
              size="lg"
              className="transition hover:scale-105"
              asChild
            >
              <Link href="https://ko-fi.com/mdecommunity">Donate Today</Link>
            </Button>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Image
            src="/fundraiser/MDE-Community-min.png"
            layout="responsive"
            width={1200}
            height={1200}
            alt="MDE Community Stats"
            className="mb-8"
          />
        </div>
        {/* Kind Words section */}
        <div className="mb-10 flex w-full flex-col items-center justify-center gap-8">
          <h2
            className={cn(
              "text-center text-2xl md:text-4xl",
              urbanist.className,
            )}
          >
            Kind Words From the Community
          </h2>
          <TestimonyCards />
          <Button
            variant="tertiary"
            size="lg"
            className="w-fit transition hover:scale-105"
            asChild
          >
            <Link href="https://ko-fi.com/mdecommunity">Donate Today</Link>
          </Button>
        </div>
      </main>
    </>
  );
};

export default FundraiserPage;
