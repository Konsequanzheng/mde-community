import ContentCard from "./content-card";

const events = [
  {
    title: "F*ck the Small Talk",
    author: "MDE Community",
    location: "Secret Location",
    src: "/ftst.png",
    description:
      "F*ck the Small Talk is an out-of-the-box social experience where strangers come together for an evening of meaningful, deep, & curious conversations!",
    authorImage: "/logo.png",
    tags: ["Fun", "Meetup"],
    date: "09 February 2024",
    href: "https://epicllama.typeform.com/ftstmedellin",
  },
  {
    title: "Laureles Neighbourhood Picnic",
    author: "MDE Community",
    location: "Parque del Rio",
    src: "/neighbourhoodPicnic.png",
    description:
      "Let's gather to get to know our friendly neighbours and share a night of some food and conversation.",
    authorImage: "/logo.png",
    tags: ["Fun", "Meetup"],
    date: "Every other Monday, 5-7pm",
    href: "https://linktr.ee/mdecommunity",
  },
  {
    title: "Art Therapy",
    author: "MDE Community",
    location: "The Community House",
    src: "/artTherapy.png",
    description:
      "We host Art Therapy sessions as a way to help decompress from life and just a simple way to meet the other people in the community.",
    authorImage: "/logo.png",
    tags: ["Arts & Crafts", "Meetup"],
    date: "Wednesdays, 5-7pm",
    href: "https://linktr.ee/mdecommunity",
  },
];

const EventCards = () => {
  return (
    <>
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
          date={event.date}
          href={event.href}
        />
      ))}
    </>
  );
};

export default EventCards;
