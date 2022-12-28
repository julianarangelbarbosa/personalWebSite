import React from "react";
import "./testimonials.css";
import ME from "../../assets/ME.jpg";
import ME2 from "../../assets/ME2.jpeg";

//import swiper
import { Navigation, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: ME2,
    name: "Ricardo",
    review: " ótimo",
  },
  {
    avatar: ME2,
    name: "Viviane",
    review: " bom",
  },
  {
    avatar: ME2,
    name: "Vera",
    review: " ok",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={{ Navigation, Pagination }}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
