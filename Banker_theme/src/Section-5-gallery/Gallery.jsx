import { useEffect, useRef, useState } from "react";
import mixitup from "mixitup";

const items = [
  {
    id: 1,
    title: "papyrux",
    type: "ecommerce",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Clinton Foundation",
    type: "intranet",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Maddie",
    type: "ecommerce",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "WCHN",
    type: "intranet",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&h=300&fit=crop",
  },
];

function Gallery() {
  const containerRef = useRef(null);
  const mixerRef = useRef(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    mixerRef.current = mixitup(containerRef.current, {
      animation: { duration: 300 },
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
    <section className="gallery">
      <h1>Gallery Section</h1>

      <div className="filters mb-4">
        <button
          type="button"
          className={`btn btn-sm me-2 ${filter === "all" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => applyFilter("all")}
        >
          {" "}
          Show all
        </button>
        <button
          type="button"
          className={`btn btn-sm me-2 ${filter === "ecommerce" ? "btn-primary" : "btn-outline-primary"}`}
        >
          Show ecommerce
        </button>
        <button
          type="button"
          className={`btn btn-sm me-2 ${filter === "interanet" ? "btn-primary" : "btn-outline-primary"}`}
        >
          Show intranets
        </button>
        {/* <button type="button" className={`btn btn-sm me-2 ${filter === "ecommerce" ? "btn-primary" : "btn-outline-primary"}`}>Show ecommerce</button> */}
      </div>

      <div ref={containerRef} className="d-flex flex-wrap gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className={"mix ${item.type} card"}
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
