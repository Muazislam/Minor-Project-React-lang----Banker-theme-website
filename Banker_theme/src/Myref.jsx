import { useRef, useState } from "react";

function TransactionSearch() {
  // Stores the user's search text.
  const [search, setSearch] = useState("");

  // Stores a reference to the actual input DOM element.
  const searchInputRef = useRef(null);

  // Focus the search input without causing a re-render.
  function focusSearchInput() {
    searchInputRef.current.focus();
  }

  // Clear the search field.

  function clearSearch() {
    setSearch("");
    searchInputRef.current.focus();
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="mb-1">Transaction Search</h3>

          <p className="text-muted mb-4">
            Search your recet banking transactions
          </p>

          {/* useRef connects this React ref to the DOM input */}

          <input
            ref={searchInputRef}
            type="text"
            className="form-control mb-3"
            placeholder="Search transactions..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className="d-flex gap-2">
            {/* Access the DOM element through ref.current */}
            <button className="btn btn-primary" onClick={focusSearchInput}>
              Focus Search
            </button>

            {/* Change state and then focus the same DOM element */}
            <button className="btn btn-outline-secondary" onClick={clearSearch}>
              Clear Search
            </button>
          </div>

          {/* Demostrate that state changes cause re-renders */}
          <div className="mt-4">
            <p className="mb-1">Current search:</p>

            <strong>{search || "No search entered"}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionSearch;
