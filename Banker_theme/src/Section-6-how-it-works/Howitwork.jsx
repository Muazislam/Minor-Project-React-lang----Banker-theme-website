import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Button from "../Button/Button";

// Import Swiper and module styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Howitwork.css";

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
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section className="howitwork py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase small fw-semibold howitwork-eyebrow mb-2">
            Get Started
          </p>
          <h1 className="howitwork-heading">How it works</h1>
          <p className="howitwork-subheading mx-auto">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="howitwork-divider mx-auto"></div>
        </div>

        <div className="position-relative mx-auto howitwork-slider-wrap">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {data.map((element) => (
              <SwiperSlide key={element.id}>
                <div className="row align-items-center g-4 g-lg-5 howitwork-row">
                  <div className="col-12 col-lg-6">
                    <div className="howitwork-img-wrap">
                      <img
                        src={element.image}
                        className="howitwork-img"
                        alt={element.title}
                      />
                    </div>
                  </div>

                  <div className="col-12 col-lg-6">
                    <div className="howitwork-content">
                      <h5 className="howitwork-title">{element.title}</h5>
                      <p className="howitwork-text">{element.description}</p>
                      <Button label={element.button} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Split navigation button: left half = prev, right half = next */}
          <div className="howitwork-split-btn">
            <button
              type="button"
              className="howitwork-split-half howitwork-split-left"
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <span className="howitwork-arrow">&#8592;</span>
            </button>
            <span className="howitwork-split-divider"></span>
            <button
              type="button"
              className="howitwork-split-half howitwork-split-right"
              onClick={handleNext}
              aria-label="Next slide"
            >
              <span className="howitwork-arrow">&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Howitwork;
