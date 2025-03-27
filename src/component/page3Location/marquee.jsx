import { useRef } from "react";
import { Location } from "../../HardCodedData/location";
import { useEffect } from "react";

export const Marquee = ({ direction }) => {
  let marquee = useRef(null);

  useEffect(() => {
    let position = 0;
    let speed = 1;

    let animate = () => {
      position -= speed;

      let contentWidth = marquee.current.scrollWidth / 2;

      if (Math.abs(position) >= contentWidth) {
        position = 0;
      }

      marquee.current.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  });
  return (
    <div className="overflow-hidden">
      <div className="flex  gap-20 lg:gap-40 items-center px-9 " ref={marquee}>
        {Location.map((val, i) => {
          return (
            <div key={i} className="flex gap-3 lg:gap-8 items-center">
              <img src={val.img} className="w-[10vw] lg:w-[3vw]"></img>
              <h3 className="text-[2vmax] font-bold  ">{val.city}</h3>
            </div>
          );
        })}
        {Location.map((val, i) => {
          return (
            <div key={i} className="flex gap-3 lg:gap-8 items-center">
              <img src={val.img} className="w-[10vw] lg:w-[3vw]"></img>
              <h3 className="text-[2vmax] font-bold ">{val.city}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
