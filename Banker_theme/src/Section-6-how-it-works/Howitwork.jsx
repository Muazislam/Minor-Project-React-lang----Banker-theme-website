import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Button from "../Button/Button";

// Import Swiper and module styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=350&fit=crop",
    title: "Open Your Account",
    description:
      "Sign up online in minutes with just a valid ID and proof of address.",
    button: "Learn more",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=350&fit=crop",
    title: "Fund Your Account",
    description:
      "Transfer money instantly from any linked bank or set up direct deposit.",
    button: "Learn more",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=350&fit=crop",
    title: "Start Banking",
    description:
      "Use the app to send money, pay bills, and track your spending in real time.",
    button: "Learn more",
  },
];

function Howitwork() {
  return (
    <section className="howitwork">
      <h1>How it works</h1>
      <h4>
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia.
      </h4>
      <div
        className="position-relative mx-auto py-5"
        style={{ maxWidth: "48rem" }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {data.map((element) => (
            <SwiperSlide key={element.id}>
              <div className="d-flex align-items-center gap-4">
                <div className="image-container">
                  <img
                    src={element.image}
                    className="img-thumbnail"
                    alt={element.title}
                  />
                </div>

                <div className="text-container">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title">{element.title}</h5>
                      <p className="card-text">{element.description}</p>
                      <Button />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Clickable Navigation Buttons */}
        <div
          className="swiper-button-prev text-warning"
          style={{ left: "-40px" }}
        ></div>
        <div
          className="swiper-button-next text-warning"
          style={{ right: "-40px" }}
        ></div>
      </div>
    </section>
  );
}

export default Howitwork;
