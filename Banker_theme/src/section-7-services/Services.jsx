import Servicestemp from "./Servicetemp";

const data = [
  {
    icon: "🏦",
    title: "Investment Banking",
    description:
      "Advisory, capital raising, and strategic financial solutions for corporations and institutions worldwide.",
    link: "#",
  },
  {
    icon: "💼",
    title: "Asset Management",
    description:
      "Professional management of investments across equities, fixed income, and alternative assets.",
    link: "#",
  },
  {
    icon: "🏢",
    title: "Commercial Banking",
    description:
      "Comprehensive banking services for businesses, including loans, cash management, and credit solutions.",
    link: "#",
  },
  {
    icon: "👔",
    title: "Wealth Management",
    description:
      "Personalized wealth planning, investment strategies, and advisory for high-net-worth individuals.",
    link: "#",
  },
  {
    icon: "💳",
    title: "Treasury Services",
    description:
      "Liquidity, payments, and risk mitigation services to optimize corporate treasury operations.",
    link: "#",
  },
  {
    icon: "⚖️",
    title: "Risk Management",
    description:
      "Comprehensive risk analytics and mitigation strategies for market, credit, and operational exposures.",
    link: "#",
  },
];

function Services() {
  return (
    <section className="services py-5">
      <style>{`\n        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');\n        .services {\n          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n          overflow-x: hidden;\n        }\n        .services h2 {\n          font-weight: 800;\n          font-size: clamp(2rem, 5vw, 3rem);\n          color: #0f172a;\n          text-align: center;\n          margin-bottom: 2rem;\n        }\n        .services .card {\n          background: #fff;\n          border: 1px solid #e5e7eb;\n          border-radius: 0.75rem;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.06);\n          width: 100%;\n          max-width: 22rem;\n          word-break: break-word;\n          overflow-wrap: break-word;\n        }\n        .services .card-title {\n          font-weight: 700;\n          color: #0f172a;\n        }\n        .services .card-text {\n          color: #475569;\n          font-size: 0.95rem;\n        }\n        .services .card-link {\n          color: #0284c7;\n          font-weight: 600;\n          text-decoration: none;\n        }\n        .services .card-link:hover {\n          text-decoration: underline;\n        }\n      `}</style>
      <div className="container px-3">
        <h2>Our Services</h2>
        <div className="row g-4 justify-content-center">
          {data.map((element) => (
            <div
              key={element.icon}
              className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
            >
              <Servicestemp {...element} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
