import Pricingcard from "./Pricingcard";

function Pricing() {
  const plans = [
    {
      model: "Basic",
      price: "$0/mo",
      feat1: "No minimum balance required",
      feat2: "Free debit card",
      feat3: "Mobile & online banking",
      feat4: "2 free ATM withdrawals/month",
      feat5: "Email support",
    },
    {
      model: "Plus",
      price: "$9/mo",
      feat1: "Everything in Basic",
      feat2: "Unlimited ATM withdrawals",
      feat3: "Higher savings interest rate",
      feat4: "Free wire transfers (2/month)",
      feat5: "Priority phone support",
    },
    {
      model: "Premium",
      price: "$24/mo",
      feat1: "Everything in Plus",
      feat2: "Dedicated account manager",
      feat3: "Unlimited free wire transfers",
      feat4: "Fee waived on all foreign transactions",
      feat5: "24/7 concierge support",
    },
  ];
  return (
    <section className="pricing py-5">
      <style>{`
        .pricing {
          overflow-x: hidden;
        }
        .pricing .card {
          width: 100% !important;
          max-width: 22rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 0.75rem;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          overflow: hidden;
          word-break: break-word;
          overflow-wrap: break-word;
          margin: 0 auto;
        }
        .pricing .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }
        .pricing .card-body {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .pricing .card-title {
          word-break: break-word;
          overflow-wrap: break-word;
          font-weight: 700;
        }
        .pricing .list-group-item {
          word-break: break-word;
          overflow-wrap: break-word;
          padding: 0.75rem 0.25rem;
          font-size: 0.95rem;
        }
        .pricing .card > button,
        .pricing .card button {
          width: calc(100% - 3rem);
          margin: 0 auto 1.5rem auto;
          display: block;
          border-radius: 6px;
          font-weight: 600;
        }
      `}</style>

      <div className="container px-3">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 mb-2">Pricing Plans</h2>
          <p className="text-muted lead">Choose the best banking plan tailored for your needs</p>
        </div>

        <div className="row g-4 justify-content-center align-items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.model}
              className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
            >
              <Pricingcard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
