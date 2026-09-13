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
      <style>{`
        .customerreview {
          overflow-x: hidden;
        }
        .customerreview .swiper {
          padding-bottom: 3.5rem !important;
        }
        .customerreview blockquote {
          word-break: break-word;
          overflow-wrap: break-word;
          line-height: 1.6;
        }
        .customerreview .customer-info {
          word-break: break-word;
          overflow-wrap: break-word;
        }
        .customerreview .swiper-pagination-bullet-active {
          background-color: #ffc107 !important;
        }
      `}</style>

      <div className="container px-3">
        <h2 className="text-warning fw-bold display-6 mb-2">Happy Customers</h2>
        <p className="text-muted mb-4 fs-6">See what our clients have to say about banking with us</p>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-4"
        >
          {testimonials.map((review) => (
            <SwiperSlide key={review.name}>
              <div
                className="mx-auto px-3 px-sm-4"
                style={{ maxWidth: "40rem", width: "100%" }}
              >
                <blockquote className="blockquote text-secondary fs-5 fst-italic mb-4">
                  “{review.quote}”
                </blockquote>

                <div className="d-inline-flex align-items-center justify-content-center gap-3 customer-info flex-wrap">
                  <img
                    src={review.avatar}
                    className="rounded-circle flex-shrink-0"
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
      </div>
    </section>
  );
}

export default Customerreview;