import { useEffect, useState } from "react";

function RecentTransactions() {
  // `account` stores which bank account the user has selected.
  //
  // Initial value:
  // "checking"
  //
  // `setAccount` is the function we use to change that value.
  const [account, setAccount] = useState("checking");

  // `transactions` stores the transaction data that will
  // eventually be displayed on the screen.
  //
  // It starts as an empty array because we haven't loaded
  // any transactions yet.
  const [transactions, setTransactions] = useState([]);

  // `loading` tells the UI whether we are currently
  // waiting for transaction data.
  //
  // false = not loading
  // true  = currently loading
  const [loading, setLoading] = useState(false);

  /*
   * =========================================================
   * useEffect
   * =========================================================
   *
   * This effect is used to synchronize our React component
   * with something outside React.
   *
   * In a real banking application, that external system
   * would be a backend/API.
   *
   * The dependency array is:
   *
   *      [account]
   *
   * Therefore:
   *
   * - The effect runs after the initial render.
   * - The effect runs again whenever `account` changes.
   * - The effect does NOT run simply because `transactions`
   *   or `loading` changes.
   */
  useEffect(() => {
    /*
     * We define an async function INSIDE the effect.
     *
     * Why?
     *
     * The function needs to perform asynchronous work,
     * such as requesting data from an API.
     *
     * We don't make the effect callback itself async.
     */
    async function fetchTransactions() {
      // Tell React that the transaction request has started.
      //
      // This causes another render, where the UI will show
      // the loading spinner.
      setLoading(true);

      try {
        /*
         * -----------------------------------------------------
         * Simulating an API request
         * -----------------------------------------------------
         *
         * In a real banking application, something like this
         * would normally happen:
         *
         * const response = await fetch(
         *   `/api/accounts/${account}/transactions`
         * );
         *
         * The `await` means:
         *
         * "Wait for this asynchronous operation to finish
         * before continuing."
         *
         * Here we are simply waiting 1 second to simulate
         * network/API latency.
         */
        await new Promise((resolve) => setTimeout(resolve, 1000));

        /*
         * This object represents data that might have
         * come back from our banking API.
         *
         * We have two accounts:
         *
         * checking
         * savings
         *
         * In a real application, this data would normally
         * come from the server rather than being hardcoded.
         */
        const transactionData = {
          checking: [
            {
              id: 1,
              description: "Electricity Bill",
              amount: -12500,
              date: "15 Sep 2026",
            },

            {
              id: 2,
              description: "Salary",
              amount: 180000,
              date: "01 Sep 2026",
            },

            {
              id: 3,
              description: "Grocery Store",
              amount: -8500,
              date: "30 Aug 2026",
            },
          ],

          savings: [
            {
              id: 4,
              description: "Monthly Transfer",
              amount: 25000,
              date: "10 Sep 2026",
            },

            {
              id: 5,
              description: "Interest",
              amount: 3200,
              date: "01 Sep 2026",
            },
          ],
        };

        /*
         * `account` tells us which account the user selected.
         *
         * For example:
         *
         * account = "checking"
         *
         * Therefore:
         *
         * transactionData[account]
         *
         * becomes:
         *
         * transactionData["checking"]
         *
         * which gives us the checking transactions.
         *
         * We then store those transactions in React state.
         */
        setTransactions(transactionData[account]);
      } finally {
        /*
         * `finally` runs after the try block finishes,
         * regardless of whether the operation succeeds
         * or throws an error.
         *
         * We therefore use it to tell the UI:
         *
         * "The loading operation is finished."
         */
        setLoading(false);
      }
    }

    /*
     * Call the function we defined above.
     *
     * Defining a function does not execute it.
     *
     * This line actually starts the asynchronous operation.
     */
    fetchTransactions();

    /*
     * =========================================================
     * Dependency Array
     * =========================================================
     *
     * `[account]` means:
     *
     * "Run this effect when `account` changes."
     *
     * Example:
     *
     * checking → savings
     *
     * React notices that `account` changed and runs the effect
     * again so that we can load the transactions belonging
     * to the savings account.
     */
  }, [account]);

  /*
   * =========================================================
   * JSX / UI
   * =========================================================
   *
   * The component now describes what the user should see
   * based on the current state.
   *
   * React takes the current values of:
   *
   * account
   * transactions
   * loading
   *
   * and uses them to determine the UI.
   */
  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          {/* -------------------------------------------------
              Header
             ------------------------------------------------- */}

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3 className="mb-1">Recent Transactions</h3>

              <p className="text-muted mb-0">
                View activity for your selected account
              </p>
            </div>

            {/* -------------------------------------------------
                Account selector

                When the user changes the select element,
                `onChange` executes.

                We take the selected value from:
                    event.target.value

                and store it in `account`.

                Calling setAccount() causes React to render
                the component again.

                Because `account` is also a dependency of
                useEffect, the effect will then run again.
               ------------------------------------------------- */}

            <select
              className="form-select w-auto"
              value={account}
              onChange={(event) => setAccount(event.target.value)}
            >
              <option value="checking">Checking Account</option>

              <option value="savings">Savings Account</option>
            </select>
          </div>

          {/* -------------------------------------------------
              Conditional Rendering

              If loading === true:

                  Show the spinner.

              Otherwise:

                  Show the transactions.

              This is React rendering different UI based
              on the current state.
             ------------------------------------------------- */}

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>

              <p className="text-muted mt-3">Loading transactions...</p>
            </div>
          ) : (
            <div className="list-group">
              {/* -------------------------------------------------
                  Render every transaction.

                  `.map()` creates a piece of JSX for every
                  transaction in the array.

                  Example:

                  transactions = [
                    transaction1,
                    transaction2,
                    transaction3
                  ]

                  map() produces three UI elements.
                 ------------------------------------------------- */}

              {transactions.map((transaction) => {
                /*
                 * Determine whether the transaction is
                 * money coming INTO the account.
                 *
                 * Positive amount = credit
                 * Negative amount = debit
                 */
                const isCredit = transaction.amount > 0;

                return (
                  <div
                    key={transaction.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {/* Transaction information */}

                    <div>
                      <h6 className="mb-1">{transaction.description}</h6>

                      <small className="text-muted">{transaction.date}</small>
                    </div>

                    {/* -------------------------------------------------
                        Transaction amount

                        We choose a Bootstrap class depending
                        on whether this is a credit or debit.

                        Credit:
                            text-success

                        Debit:
                            text-danger
                       ------------------------------------------------- */}

                    <span
                      className={
                        isCredit
                          ? "text-success fw-bold"
                          : "text-danger fw-bold"
                      }
                    >
                      {isCredit ? "+" : "-"}Rs.{" "}
                      {Math.abs(transaction.amount).toLocaleString()}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentTransactions;
