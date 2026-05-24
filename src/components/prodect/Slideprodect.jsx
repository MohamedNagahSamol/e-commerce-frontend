import Prodect from "./Prodect";
import "./prodect.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function Slideprodect({ category, products,handleClick }) {
  return (
    <>
      <div className="slide-prodect slides" >
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="top-slide">
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, voluptate.</p>
          </div>
          <div>
            <Swiper
              navigation={true}
              slidesPerView={7}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              autoplay={{ delay: 2000 }}
            >
              {products?.products?.map((product) => (
                <SwiperSlide key={product.id}>
                  <Prodect product={product}  handleClick={handleClick} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slideprodect;
