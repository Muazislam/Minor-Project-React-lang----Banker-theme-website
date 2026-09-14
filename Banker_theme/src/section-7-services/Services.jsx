import Servicestemp from "./Servicetemp";

const data = [
  {
    icon: "link",
    title: "Business Consulting",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    link: "df",
  },
  {
    icon: "link",
    title: "Business Consulting",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    link: "df",
  },
  {
    icon: "link",
    title: "Business Consulting",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    link: "df",
  },
  {
    icon: "link",
    title: "Business Consulting",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    link: "df",
  },
  {
    icon: "link",
    title: "Business Consulting",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    link: "df",
  },
  {
    icon: "link",
    title: "Business Consulting",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    link: "df",
  },
];
function Services() {
  return (
    <section className="services">
      <h1>Our Services</h1>

      {data.map((element) => (
        <div
          key={element.icon}
          className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
        >
          <Servicestemp {...element} />
        </div>
      ))}
    </section>
  );
}

export default Services;
