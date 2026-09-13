import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    name: "Christine Aguilar",
    avatar: "https://i.pravatar.cc/48?img=1",
  },
  {
    quote:
      "Switching my accounts here was the easiest banking decision I've made. Support actually picks up the phone, and the app just works.",
    name: "Marcus Webb",
    avatar: "https://i.pravatar.cc/48?img=2",
  },
  {
    quote:
      "I've recommended this bank to three friends already. Transparent fees, no surprises, and a genuinely helpful team.",
    name: "Priya Anand",
    avatar: "https://i.pravatar.cc/48?img=3",
  },
  {
    quote:
      "Fast wire transfers and a dashboard that doesn't feel like it was built in 2005. Exactly what I needed for my small business.",
    name: "Jordan Reyes",
    avatar: "https://i.pravatar.cc/48?img=4",
  },
];

function Customerreview() {
  return (
    <section className="customerreview text-center py-5">
      <h2 className="text-warning fw-bold mb-4">Happy Customers</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((review) => (
          <SwiperSlide key={review.name}> {/*Question: Why was this made?*/}
            <div className="container" style={{ maxWidth: "36rem" }}>
              <blockquote className="blockquote text-secondary fs-5 fst-italic px-md-5 mb-4">
                “{review.quote}”
              </blockquote>

              <div className="d-inline-flex align-items-center gap-2">
                <img
                  src={review.avatar}
                  className="rounded-circle"
                  width="48"
                  height="48"
                  alt={review.name}
                />
                <span className="text-muted small fw-medium">{review.name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Customerreview;