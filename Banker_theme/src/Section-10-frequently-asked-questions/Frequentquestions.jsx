import Questiontemp from "./Questiontemp";
function Frequentquestions() {
  return (
    <section className="frequentquestions py-5">
      <style>{`
        .frequentquestions {
          overflow-x: hidden;
        }
        .frequentquestions .container {
          padding-left: 0.75rem;
          padding-right: 0.75rem;
          max-width: 1140px;
        }
        .frequentquestions .row {
          row-gap: 1.25rem !important;
          margin-bottom: 1.25rem !important;
        }
        /* Mobile: full-width columns to prevent cramped text and merging */
        .frequentquestions .col-6 {
          width: 100% !important;
          max-width: 100% !important;
          flex: 0 0 100% !important;
        }
        /* Laptop & tablet: 2 equal side-by-side columns */
        @media (min-width: 768px) {
          .frequentquestions .col-6 {
            width: 50% !important;
            max-width: 50% !important;
            flex: 0 0 50% !important;
          }
        }
        .frequentquestions .p-3 {
          height: 100%;
          text-align: left !important;
          background-color: #ffffff;
          border: 1px solid #e9ecef;
          border-radius: 0.75rem;
          padding: 1.5rem !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          word-break: break-word;
          overflow-wrap: break-word;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .frequentquestions .p-3:hover {
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
        .frequentquestions h3 {
          font-size: 1.15rem;
          font-weight: 600;
          color: #212529;
          margin-bottom: 0.75rem;
          word-break: break-word;
          overflow-wrap: break-word;
          line-height: 1.4;
        }
        .frequentquestions p {
          font-size: 0.95rem;
          color: #6c757d;
          line-height: 1.6;
          margin-bottom: 0;
          word-break: break-word;
          overflow-wrap: break-word;
        }
      `}</style>

      <div className="container px-3 text-center mb-5">
        <h2 className="fw-bold display-5 mb-2">Frequently Asked Questions</h2>
        <p className="text-muted lead">
          Quick answers to common questions about our accounts and services
        </p>
      </div>
      <Questiontemp
        query1={"How do I open a new checking account?"}
        description1={
          "You can open a checking account online in about 10 minutes, or visit any branch with a valid ID and proof of address. No minimum deposit is required for our basic account tier."
        }
        query2={"Is there a minimum balance requirement?"}
        description2={
          "Our standard checking and savings accounts have no minimum balance requirement. Premium accounts with added benefits may require a minimum balance to waive monthly fees."
        }
      />

      <Questiontemp
        query1={"What should I do if my card is lost or stolen?"}
        description1={
          "Freeze your card instantly through the mobile app, or call our 24/7 support line. A replacement card is typically issued within 3-5 business days."
        }
        query2={"Can I set up direct deposit?"}
        description2={
          "Yes, direct deposit can be set up using your account and routing number, available on your account dashboard or on a physical check."
        }
      />

      <Questiontemp
        query1={"How long does a wire transfer take to process?"}
        description1={
          "Domestic wire transfers are typically completed within the same business day if submitted before the daily cutoff time. International wires may take 1-3 business days."
        }
        query2={"Are there fees for using an ATM outside your network?"}
        description2={
          "Out-of-network ATM withdrawals may incur a fee from both us and the ATM operator. Premium account holders receive a set number of fee reimbursements each month."
        }
      />

      <Questiontemp
        query1={"How do I apply for a personal loan?"}
        description1={
          "You can apply online, through the app, or in person. Approval decisions are typically returned within 1-2 business days depending on the loan amount and documentation."
        }
        query2={"What credit score is needed for loan approval?"}
        description2={
          "There's no single fixed cutoff — approval considers your full financial profile, but a credit score above 650 significantly improves your chances of approval and rate."
        }
      />
    </section>
  );
}

export default Frequentquestions;
