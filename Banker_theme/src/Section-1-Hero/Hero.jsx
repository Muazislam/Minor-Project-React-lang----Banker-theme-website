import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Heroslider = [
  {
    id: 1,
    title: "Banking solution",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    id: 2,
    title: "Banking solution",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    id: 3,
    title: "Banking solution",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
];

function Hero() {
  return (
    <section className="hero text-center py-5">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {Heroslider.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="title-container" style={{ maxWidth: "36rem" }}>
              <h2 className="fw-bold display-5">{slide.title}</h2>
            </div>

            <div className="desc-container" style={{ maxWidth: "36rem" }}>
              <p className="fs-5">{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
