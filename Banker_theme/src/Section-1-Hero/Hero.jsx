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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .hero {
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow-x: hidden;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          padding-top: 4rem !important;
          padding-bottom: 4rem !important;
          
        }
        .hero .swiper {
          padding-bottom: 3.5rem !important;
        }
        .hero .hero-title {
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          font-size: clamp(2.4rem, 5.5vw, 4.25rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.15;
          color: #0f172a;
          margin-bottom: 1.5rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .hero .hero-desc {
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
          font-size: clamp(1.1rem, 2.2vw, 1.4rem);
          font-weight: 400;
          line-height: 1.7;
          color: #475569;
          margin-bottom: 2rem;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .hero .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .hero .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 6px;
          background-color: #0284c7 !important;
        }
      `}</style>

      <div className="container px-3 px-sm-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {Heroslider.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="mx-auto text-center"
                style={{ maxWidth: "52rem", width: "100%" }}
              >
                <div className="title-container mb-3">
                  <h1 className="hero-title">{slide.title}</h1>
                </div>

                <div className="desc-container mx-auto">
                  <p className="hero-desc">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Hero;
