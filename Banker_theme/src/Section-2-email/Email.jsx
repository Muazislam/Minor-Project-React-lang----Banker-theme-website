import myimage1 from "../assets/bank1.jpg";
import Emailtemp from "./Emailtemp";

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
];

function Email() {
  return (
    <section className="email py-5">
      <div>
        <style>{`\n        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');\n        .services {\n          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n          overflow-x: hidden;\n        }\n        .services h2 {\n          font-weight: 800;\n          font-size: clamp(2rem, 5vw, 3rem);\n          color: #0f172a;\n          text-align: center;\n          margin-bottom: 2rem;\n        }\n        .services .card {\n          background: #fff;\n          border: 1px solid #e5e7eb;\n          border-radius: 0.75rem;\n          box-shadow: 0 2px 8px rgba(0,0,0,0.06);\n          width: 100%;\n          max-width: 22rem;\n          word-break: break-word;\n          overflow-wrap: break-word;\n        }\n        .services .card-title {\n          font-weight: 700;\n          color: #0f172a;\n        }\n        .services .card-text {\n          color: #475569;\n          font-size: 0.95rem;\n        }\n        .services .card-link {\n          color: #0284c7;\n          font-weight: 600;\n          text-decoration: none;\n        }\n        .services .card-link:hover {\n          text-decoration: underline;\n        }\n      `}</style>
        <div className="container px-3">
          <h2>Our Services</h2>
          <div className="row g-4 justify-content-center">
            {data.map((element) => (
              <div
                key={element.icon}
                className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
              >
                <Emailtemp {...element} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main feature Section (Image + Content) */}
      <div className="row align-items-center g-4">
        {/* left image column */}
        <div className="col-lg-6">
          <img
            src={myimage1}
            alt="Amorization Computation"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Content coloumn */}

        <div className="col-lg-6 ps-lg-5">
          <h2 className="fw-normal text-dark mb-4">Amorization Computation</h2>
          <p className="text-secondary mb-4">
            A small river named duden flows by their place and supplies it with
            the necessary regeliable.
          </p>

          {/* Checklist */}

          <ul className="list-unstyled text-secondary mb-4">
            <li className="mb-2">
              <i className="bi bi-check2 me-2"></i>Officia quaerat eaque neque
            </li>
            <li className="mb-2">
              <i className="bi bi-check2 me-2"></i>jdkd quaerat eaque neque
            </li>
            <li className="mb-2">
              <i className="bi bi-check2 me-2"></i>kdjfkjd quaerat eaque neque
            </li>
          </ul>

          {/* Email Form Input */}

          <form className="d-flex flex-sm-row flex-column gap-2 align-items-stretch">
            <input
              type="email"
              className="form-control rounded-pill px-4 py-2 border-secondary-subtle"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="btn text-white rounded-pill px-4 py-2 text-nowrap"
              style={{ backgroundColor: "#d87050" }}
            >
              Submit Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Email;
