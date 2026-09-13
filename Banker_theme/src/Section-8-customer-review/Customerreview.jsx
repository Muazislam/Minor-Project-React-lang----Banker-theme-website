import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Import required CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Optional: only if using fade transition

function Customerreview() {
  return (
    <section className="customerreview">
      <h1>Happy Customer</h1>

      {/*---*/}

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // effect="fade" // Uncomment this line if you prefer a cross-fade animation over horizontal sliding
      >
        <SwiperSlide>
          <div className="testimonial-card">
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              excepturi quisquam error minima recusandae et eum sunt modi vero
              cumque ut sint cupiditate quo neque, a libero architecto nisi
              maxime?
            </h4>
            <img src={"Banker_theme/src/assets/hero.png"} />
            <p>Christian bale</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            "Highly recommended!" — Customer 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            "Best experience ever." — Customer 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card">
            "Super fast support!" — Customer 4
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Customerreview;
