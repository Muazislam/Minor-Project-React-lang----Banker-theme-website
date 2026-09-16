import myimage1 from "../assets/bank1.jpg";
import Emailtemp from "./Emailtemp";
import "./Email.css";

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
      <div className="container px-3 px-md-4">
        {/* Services Section */}
        <div className="text-center mb-5">
          <p className="text-uppercase small fw-semibold email-eyebrow mb-2">
            What We Offer
          </p>
          <h2 className="email-heading">Our Services</h2>
          <div className="email-divider mx-auto"></div>
        </div>

        <div className="row g-4 justify-content-center mb-5 pb-3">
          {data.map((element) => (
            <div
              key={element.icon}
              className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
            >
              <Emailtemp {...element} />
            </div>
          ))}
        </div>

        {/* Main feature Section (Image + Content) */}
        <div className="row align-items-center g-4 g-lg-5">
          {/* left image column */}
          <div className="col-12 col-lg-6">
            <div className="email-img-wrap">
              <img
                src={myimage1}
                alt="Amortization Computation"
                className="email-img"
              />
            </div>
          </div>

          {/* Right Content column */}
          <div className="col-12 col-lg-6 ps-lg-5">
            <h2 className="email-feature-title mb-3">
              Amortization Computation
            </h2>
            <p className="email-feature-text mb-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            {/* Checklist */}
            <ul className="list-unstyled email-checklist mb-4">
              <li className="mb-2 d-flex align-items-start">
                <i className="bi bi-check2 me-2 email-check-icon"></i>
                <span>Officia quaerat eaque neque</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i className="bi bi-check2 me-2 email-check-icon"></i>
                <span>Consectetur quaerat eaque neque</span>
              </li>
              <li className="mb-2 d-flex align-items-start">
                <i className="bi bi-check2 me-2 email-check-icon"></i>
                <span>Adipiscing quaerat eaque neque</span>
              </li>
            </ul>

            {/* Email Form Input */}
            <form className="d-flex flex-sm-row flex-column gap-2 align-items-stretch email-form">
              <input
                type="email"
                className="form-control rounded-pill px-4 py-2 email-input"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="btn rounded-pill px-4 py-2 text-nowrap email-submit-btn"
              >
                Submit Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Email;
