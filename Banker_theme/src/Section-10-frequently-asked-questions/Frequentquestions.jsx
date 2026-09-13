import Questiontemp from "./Questiontemp";
function Frequentquestions() {
  return (
    <section className="frequentquestions">
      <h1>Frequent Questions Section</h1>
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

      <Questiontemp
        query1={"How can I dispute a transaction on my account?"}
        description1={
          "Disputes can be filed directly through the app under 'Transaction History,' or by contacting support. Most disputes are resolved within 10 business days."
        }
        query2={"Is mobile check deposit available?"}
        description2={
          "Yes, you can deposit checks by photographing the front and back through the mobile app. Funds are typically available within 1-2 business days."
        }
      />

      <Questiontemp
        query1={"What is the interest rate on your savings accounts?"}
        description1={
          "Rates vary by account tier and are updated periodically based on market conditions. Current rates are always listed on the Accounts page before you apply."
        }
        query2={"Can I link accounts from other banks?"}
        description2={
          "Yes, external accounts can be linked for transfers using your login credentials or account and routing numbers, depending on the bank."
        }
      />

      <Questiontemp
        query1={"How do I close my account?"}
        description1={
          "Accounts can be closed by visiting a branch or contacting support directly. Any remaining balance is transferred or issued as a check once the closure is processed."
        }
        query2={"Do you charge monthly maintenance fees?"}
        description2={
          "Basic accounts have no monthly fee. Premium accounts carry a fee that can be waived by meeting a minimum balance or direct deposit requirement."
        }
      />

      <Questiontemp
        query1={"Is online banking secure?"}
        description1={
          "Yes — all sessions are encrypted, and we support two-factor authentication along with real-time fraud monitoring on every account."
        }
        query2={"How do I update my contact information?"}
        description2={
          "Contact details can be updated anytime under Account Settings in the app or website, or by visiting a branch with valid identification."
        }
      />
    </section>
  );
}

export default Frequentquestions;
