import { useState } from "react";
import { ProductData } from "../../HardCodedData/productData";
import heart from "../../HardCodedData/heart.png";
import heartRed from "../../HardCodedData/heartRed.png";

export const ProductCard = ({
  name,
  price,
  discount,
  img,
  originalPrice,
  handler,
  condition,
}) => {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(true);

  const handlerr = () => {
    condition(state2, handler);
  };
  return (
    <div
      onClick={handlerr}
      className="h-[28vh] lg:mb-4 bg-[#0A2239] w-[42vw]  rounded-2xl lg:w-[20vw]  lg:h-[50vh]"
    >
      <div className="flex items-center justify-around lg:h-14 h-[6vh]">
        <h1 className="text-[1.2vmax] text-white font-bold tracking-tighter">
          {name}
        </h1>

        {state ? (
          <img src={heart} className="w-4 "></img>
        ) : (
          <img src={heartRed} className="w-4 "></img>
        )}
      </div>

      <div className="w-full  h-40 flex flex-col items-center lg:h-[40vh] justify-center">
        <img src={img} className="w-[12vmax] lg:w-40 rounded-2xl"></img>
        <div className="flex justify-start flex-col px-9 w-full mt-2">
          <div className="flex relative items-center gap-2">
            <h3 className="font-semibold text-white text-[1vmax] ">
              {" "}
              <span className="text-[1.5vmin]">Discount</span> {discount}%
            </h3>
            <h3 className="text-gray-600 text-[1vmax] font-bold ">
              {originalPrice}
            </h3>
            <div className="absolute lg:right-23 h-[0.1vh] right-4 w-[4vmax] bg-gray-500"></div>
          </div>
          <div className="flex  items-center text-[1vmax] font-bold  gap-5">
            <h3 className=" text-white  "> {price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
