import { useEffect, useRef, useState } from "react";
import mixitup from "mixitup";
import Gallery from "./Gallery";

//----
import myimage1 from "../assets/bank1.jpg";
import myimage3 from "../assets/bank3.jpg";
import myimage4 from "../assets/bank4.jpg";
import myimage5 from "../assets/bank5.jpg";
import myimage6 from "../assets/bank6.jpg";
import myimage7 from "../assets/bank7.jpg";
import myimage8 from "../assets/bank8.jpg";
import myimage9 from "../assets/bank9.jpg";
import myimage10 from "../assets/bank10.jpg";
import myimage11 from "../assets/bank11.jpg";
import myimage12 from "../assets/bank12.jpg";
import myimage13 from "../assets/bank13.jpg";

const items = [
  { id: 1, type: "bank", title: "Global Banking Partner", image: myimage1 },
  { id: 3, type: "stock", title: "Equity Market Access", image: myimage3 },
  { id: 4, type: "stock", title: "Portfolio Analytics", image: myimage4 },
  { id: 5, type: "exchange", title: "Trading Exchange", image: myimage5 },
  { id: 6, type: "bank", title: "Commercial Banking", image: myimage6 },
  { id: 7, type: "bank", title: "Private Banking", image: myimage7 },
  { id: 8, type: "stock", title: "Capital Markets", image: myimage8 },
  { id: 9, type: "exchange", title: "Derivatives Exchange", image: myimage9 },
  { id: 10, type: "exchange", title: "Commodities Exchange", image: myimage10 },
  { id: 11, type: "exchange", title: "FX Exchange", image: myimage11 },
  {
    id: 12,
    type: "exchange",
    title: "Fixed Income Exchange",
    image: myimage12,
  },
  { id: 13, type: "bank", title: "Investment Banking", image: myimage13 },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "bank", label: "Banks" },
  { key: "exchange", label: "Exchanges" },
  { key: "stock", label: "Stock" },
];

function Gallery() {
  const containerRef = useRef(null);
  const mixerRef = useRef(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    mixerRef.current = mixitup(containerRef.current, {
      animation: { duration: 300, effects: "fade scale(0.95)" },
    });

    return () => {
      if (mixerRef.current) {
        mixerRef.current.destroy();
      }
    };
  }, []);

  const applyFilter = (type) => {
    setFilter(type);
    const selector = type === "all" ? "all" : `.${type}`;
    mixerRef.current.filter(selector);
  };

  return (
    <section className="gallery-section py-5">
      <div className="container-fluid px-3 px-md-5">
        <div className="text-center mb-5">
          <p className="text-uppercase small fw-semibold gallery-eyebrow mb-2">
            Our Network
          </p>
          <h1 className="gallery-heading">Institutions We Work With</h1>
          <div className="gallery-divider mx-auto"></div>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              className={`btn btn-sm gallery-filter-btn text-uppercase fw-semibold ${
                filter === key ? "active" : ""
              }`}
              onClick={() => applyFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div ref={containerRef} className="row g-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={`mix ${item.type} col-12 col-sm-6 col-lg-4 col-xl-3`}
            >
              <div className="card gallery-card h-100 border-0">
                <div className="gallery-img-wrap">
                  <img
                    src={item.image}
                    className="gallery-img"
                    alt={item.title}
                  />
                  <span className="gallery-tag text-uppercase">
                    {item.type}
                  </span>
                </div>
                <div className="card-body">
                  <h6 className="card-title mb-0 text-truncate">
                    {item.title}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
