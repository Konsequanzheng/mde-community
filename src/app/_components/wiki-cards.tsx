import ContentCard from "./content-card";

const events = [
  {
    title: "Exploring Children's Education Options in Medellín",
    author: "Diego Oritz",
    src: "/kidsPlayingPiano.png",
    description:
      "Affordable quality education, children friendly environment, and top-notch services are just a few reasons for you to choose Medellín as the best place for your child’s education...",
    authorImage: "/DiegoOritz.png",
    tags: ["Expat life", "Parenting", "Children", "Education"],
    href: "/wiki/exploring-childrens-education-options-in-medellin",
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
          href={event.href}
        />
      ))}
    </>
  );
};

export default WikiCards;
