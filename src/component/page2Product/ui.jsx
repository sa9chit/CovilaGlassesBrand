import protection from "../../HardCodedData/sun-protection.png";
import service from "../../HardCodedData/service.png";
import eye from "../../HardCodedData/eye-care.png";
import doctor from "../../HardCodedData/doctor.png";
export const Ui = () => {
  return (
    <div className="p-6 ">
      <div className="w-full rounded-2xl bg-[#E0E0E0] lg:h-[35vh] h-[20vh] flex justify-between p-5 ">
        <div className=" flex  items-center  flex-col w-full  font-bold text-black text-[1.4vmax]">
          <img src={protection} className="w-[5vmax]"></img>
          <div className="p-2">
            <p>☀️ 100% UV Protection</p>
            <p>☀️ UV400-certified lenses</p>
            <p>
              ☀️ block harmful{" "}
              <span className="text-orange-600">UVA & UVB</span> rays
            </p>
          </div>
        </div>
        <div className="h-full w-[0.1vmax] bg-black"></div>
        <div className=" flex  items-center  flex-col w-full  font-bold text-black text-[1.4vmax]">
          <img src={service} className="w-[5vmax]"></img>
          <div className="p-2">
            <p>👁️ scratch-resistant</p>
            <p>👁️ anti-glare lenses</p>
            <p>👁️ high-quality Glasses </p>
          </div>
        </div>
      </div>

      <div className="py-6 ">
        <h1 className="text-8xl  font-mono text-center font-extrabold">
          COVILA
        </h1>
      </div>
      <div className="h-[16vh] rounded-tl-4xl lg:h-[40vh] w-full bg-[#0A2239] flex justify-between">
        <div className="w-[70vw] px-4 py-3 lg:py-4 lg:px-12">
          <h2 className="text-white text-3xl font-bold text-center mb-2 lg:mb-6  tracking-wide">
            Why Choose Us?
          </h2>
          <p className="text-[#E0E0E0] text-[1.2vmax] lg:hidden">
            At <span className="text-red-500 font-bold">Covila</span>, we offer
            premium, durable eyewear with scratch-resistant, anti-glare lenses
            and 100% UV protection. Enjoy hassle-free returns, a perfect fit,
            expert consultation, fast shipping, and eco-friendly materials
          </p>
          <p className="hidden lg:block text-[#E0E0E0] text-2xl">
            {" "}
            At <span className="font-bold text-red-500">Covila</span> we provide
            premium eyewear that blends quality, durability, and style. Our
            glasses feature scratch-resistant, anti-glare lenses with 100% UV
            protection, ensuring crystal-clear vision. Enjoy hassle-free
            returns, warranty coverage, and a perfect fit guarantee for a
            worry-free experience. With affordable pricing, fast shipping,
            expert consultation, and eco-friendly materials, we make eye care
            simple, stylish, and sustainable
          </p>
        </div>
        <div className="h-full w-[30vw] flex items-center justify-center  bg-yellow-500 rounded-l-[7vmax]">
          <img src={eye} className="w-[20vw]"></img>
        </div>
      </div>
      <div className="bg-[#0A2239] rounded-br-4xl overflow-hidden lg:hidden ">
        <img src={doctor} className="h-[30vh] w-full"></img>
      </div>
      <div></div>
    </div>
  );
};
