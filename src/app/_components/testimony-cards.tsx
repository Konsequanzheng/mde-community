import Image from "next/image";
import React from "react";
import { cn } from "~/lib/utils";

const testimonies = [
  {
    name: "Claudiu",
    image: "/fundraiser/Claudiu.jpeg",
    title: "Digital Nomad",
    textcolor: "text-black",
    bg: "bg-none",
    testimony:
      "I arrived in Medellin 4 months ago thinking I’ll stay for a month. After joining a few of the Medellin Community events, I felt like I have finally found my tribe and decided I want to live here now. Although I lived in a few other cities and countries across the globe, I never found this level of connection with both foreigners and locals like I found in Medellin.",
  },
  {
    name: "Juliana",
    image: "/fundraiser/Juliana.jpeg",
    title: "Local",
    textcolor: "text-white",
    bg: "bg-[#2D50AB]",
    testimony:
      "All of the events organised by the Medellin Community over the past few months have brought me many moments of joy, but more importantly, they have created a space for connection in which I could find again international travellers from whom to learn and with whom to grow. I feel open to share who I am in the Medellin Community because it’s a safe space. This community has brought into my life people who are now very important for me.",
  },
  {
    name: "Diego",
    image: "/fundraiser/Diego.jpeg",
    title: "Local",
    textcolor: "text-white",
    bg: "bg-[#CB525D]",
    testimony:
      "I always thought that whenever I’ll get an opportunity to work in another country, I will take it. But then I started seeing that more and more foreigners choose to live in Medellin and I wondered why. A few months ago, when I discovered Medellin Community, I understood - when you are part to a community full of people that have the same values and experiences, when you take part in events that grow you, then you feel that you truly belong and you want to stay. That’s why I chose to stay in Medellin now.",
  },
  {
    name: "April",
    image: "/fundraiser/April.png",
    title: "Digital Nomad",
    textcolor: "text-black",
    bg: "bg-none",
    testimony:
      "I’ve been travelling for a few year now and the Medellin Community is like no other. It’s so easy to meet like-minded people because of the communities that they’ve curated and the events that they’re organising. I’ve never felt so at home. It’s very beautiful to see it grow by the day and I’m grateful to be a part of this!",
  },
];

const TestimonyCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {testimonies.map((testimony) => {
        return (
          <TestimonyCard
            name={testimony.name}
            image={testimony.image}
            title={testimony.title}
            testimony={testimony.testimony}
            bg={testimony.bg}
            textcolor={testimony.textcolor}
          />
        );
      })}
    </div>
  );
};

interface TestimonyCardProps {
  name: string;
  image: string;
  title: string;
  testimony: string;
  bg: string;
  textcolor: string;
}
export const TestimonyCard = ({
  name,
  image,
  title,
  testimony,
  bg,
  textcolor,
}: TestimonyCardProps) => {
  return (
    <div
      className={cn(
        "min-w-s flex max-w-lg flex-col gap-5 rounded-xl border border-black p-5",
        bg,
        textcolor,
      )}
    >
      <div>{testimony}</div>
      <div className="flex flex-row items-center gap-5">
        <Image
          src={image}
          width={60}
          height={60}
          alt={name}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <div className="font-bold">{name}</div>
          <div>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCards;
