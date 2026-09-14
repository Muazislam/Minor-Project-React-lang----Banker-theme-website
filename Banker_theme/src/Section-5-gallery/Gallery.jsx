import { useEffect, useRef, useState } from "react";
import mixitup from "mixitup";
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
  {
    id: 1,
    title: "Papyrus",
    type: "bank",
    image: myimage1,
  },

  {
    id: 3,
    title: "Maddie",
    type: "stock",
    image: myimage3,
  },
  {
    id: 4,
    title: "WCHN",
    type: "stock",
    image: myimage4,
  },
  {
    id: 5,
    title: "WCHN",
    type: "exchange",
    image: myimage5,
  },
  {
    id: 6,
    title: "WCHN",
    type: "bank",
    image: myimage6,
  },
  {
    id: 7,
    title: "WCHN",
    type: "bank",
    image: myimage7,
  },
  {
    id: 8,
    title: "WCHN",
    type: "stock",
    image: myimage8,
  },
  {
    id: 9,
    title: "WCHN",
    type: "exchange",
    image: myimage9,
  },
  {
    id: 10,
    title: "WCHN",
    type: "exchange",
    image: myimage10,
  },
  {
    id: 11,
    title: "WCHN",
    type: "exchange",
    image: myimage11,
  },
  {
    id: 12,
    title: "WCHN",
    type: "exchange",
    image: myimage12,
  },
  {
    id: 13,
    title: "WCHN",
    type: "bank",
    image: myimage13,
  },
];

function Gallery() {
  const containerRef = useRef(null);
  const mixerRef = useRef(null);
  const [filter, setFilter] = useState("all");

  // Initialize mixitup once, after the DOM node exists
  useEffect(() => {
    mixerRef.current = mixitup(containerRef.current, {
      animation: { duration: 300 },
    });

    // Clean up on unmount to avoid memory leaks / duplicate instances
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
    <section className="gallery">
      <h1>Gallery Section</h1>

      <div className="filters mb-4">
        <button
          type="button"
          className={`btn btn-sm me-2 ${filter === "all" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => applyFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          className={`btn btn-sm me-2 ${filter === "ecommerce" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => applyFilter("bank")}
        >
          Banks
        </button>
        <button
          type="button"
          className={`btn btn-sm ${filter === "intranet" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => applyFilter("exchange")}
        >
          Exchanges
        </button>
        <button
          type="button"
          className={`btn btn-sm ${filter === "intranet" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => applyFilter("stock")}
        >
          Stock
        </button>
      </div>

      <div ref={containerRef} className="d-flex flex-wrap gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className={`mix ${item.type} card`}
            style={{ width: "18rem" }}
          >
            <img src={item.image} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text text-muted">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
