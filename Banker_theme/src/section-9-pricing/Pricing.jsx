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
    <section className="pricing">
      <h1>Pricing</h1>

      {plans.map((plan) => (
        <Pricingcard key={plan.model} {...plan} />
      ))}
    </section>
  );
}

export default Pricing;
