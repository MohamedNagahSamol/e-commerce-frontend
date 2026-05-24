import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router";
function Slider() {
  return (
    <>
      <div className="container-slider">
        <div className="container">
          <Swiper
            pagination={true}
            loop={true}
            navigation={true}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >
            <SwiperSlide className="img-container">
              <div className="content">
                <h4>introdection</h4>
                <h3>slide 1</h3>
                <p>Description for slide 1</p>
                <Link to="/products" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/img/banner_Hero1.jpg" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>introdection</h4>
                <h3>slide 1</h3>
                <p>Description for slide 1</p>
                <Link to="/products" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/img/banner_Hero2.jpg" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>introdection</h4>
                <h3>slide 1</h3>
                <p>Description for slide 1</p>
                <Link to="/products" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/img/banner_Hero3.jpg" alt="Slide 1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Slider;
