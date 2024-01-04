import ContentCard from "./content-card";

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

const WikiCards = () => {
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
          description={event.description}
        />
      ))}
    </>
  );
};

export default WikiCards;
