import ContentCard from "./content-card";

const events = [
  {
    title: "F*ck the Small Talk",
    author: "Epic Llama",
    location: "Secret Location",
    src: "/ftst.png",
    description:
      "F*ck the Small Talk is an out-of-the-box social experience where strangers come together for an evening of meaningful, deep, & curious conversations!",
    authorImage: "/epicLlama.jpg",
    tags: ["Fun", "Meetup"],
    date: "16 February 2024",
    href: "https://www.instagram.com/p/CyvjuRcIT1h/?img_index=7",
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
    href: "https://lu.ma/laurelespicnic8",
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
    href: "https://lu.ma/arttherapy10",
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
