import { ProductData } from "../../HardCodedData/productData";
import heroImage from "../../HardCodedData/basketBall.png";
import { lazy, Suspense, useRef, useState } from "react";
let ProductCard = lazy(() => import("./card"));
const HeroSection = () => {
  let [state, setState] = useState(null);
  let productDataa = useRef({});
  let handleChildData = (data, productData) => {
    setState(data);
    productDataa.current = productData;
  };

  return (
    <div className="flex  justify-around  ">
      <div className="grid grid-cols-2 grid-rows-3 gap-4  h-[90vh] px-7 lg:w-[66vw] lg:grid-cols-3 lg:h-[110vh] lg:gap-y-90 ">
        {ProductData.map((val, i) => {
          return (
            <Suspense fallback="...loading">
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
            </Suspense>
          );
        })}
      </div>

      <img
        src={heroImage}
        className="lg:h-[104vh] lg:w-[30vw] rounded-2xl hidden lg:block"
      ></img>
    </div>
  );
};

export default HeroSection;
