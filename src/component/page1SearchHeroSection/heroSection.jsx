import { ProductCard } from "./card";
import { ProductData } from "../../HardCodedData/productData";
import heroImage from "../../HardCodedData/basketBall.png";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export const HeroSection = () => {
  let [state, setState] = useState(null);
  let productDataa = useRef({});
  let handleChildData = (data, productData) => {
    setState(data);
    productDataa.current = productData;
  };

  return (
    <div className="flex  justify-around  ">
      {state ? (
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {Object.values(productDataa.current.images).map((val, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={val} className="w-30"></img>
                </SwiperSlide>
              );
            })}
            ...
          </Swiper>
        </div>
      ) : (
        <div className="grid grid-cols-2 grid-rows-3 gap-4  h-[90vh] px-7 lg:w-[66vw] lg:grid-cols-3 lg:h-[110vh] lg:gap-y-90 ">
          {ProductData.map((val, i) => {
            return (
              <ProductCard
                key={i}
                name={val.name}
                img={val?.images?.img1}
                price={val.price}
                discount={val.discount_percent}
                originalPrice={val.original_price}
                handler={val}
                condition={handleChildData}
              />
            );
          })}
        </div>
      )}
      <img
        src={heroImage}
        className="lg:h-[104vh] lg:w-[30vw] rounded-2xl hidden lg:block"
      ></img>
    </div>
  );
};
