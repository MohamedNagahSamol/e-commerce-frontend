import React from "react";
import "./prodect.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
function Sliderloding() {
  return (
    <div className="slide-prodect slides">
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="top-slide">
          <h2 className="loding"></h2>
          <p className="loding"></p>
        </div>
        <div>
          <Swiper
            navigation={true}
            slidesPerView={7}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            autoplay={{ delay: 2000 }}
          >
            <SwiperSlide className="slider-loding">loding...</SwiperSlide>
            <SwiperSlide className="slider-loding">loding...</SwiperSlide>
            <SwiperSlide className="slider-loding">loding...</SwiperSlide>
            <SwiperSlide className="slider-loding">loding...</SwiperSlide>
            <SwiperSlide className="slider-loding">loding...</SwiperSlide>
            <SwiperSlide className="slider-loding">loding...</SwiperSlide>
            <SwiperSlide className="slider-loding">loding...</SwiperSlide>
            <SwiperSlide className="slider-loding">loding...</SwiperSlide>
            <SwiperSlide className="slider-loding">loding...</SwiperSlide>
            <SwiperSlide className="slider-loding">loding...</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Sliderloding;
