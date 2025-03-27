import magniyfing from "../../HardCodedData/magnifying.png";

export const Header2 = () => {
  return (
    <div className="h-[4vmax] flex items-center justify-center  lg:justify-around ">
      <div className="flex bg-[#E0E0E0] rounded-xl  w-[40vmax] items-center justify-between   px-3 py-3 ">
        <input
          type="text"
          className="w-[20vmax] outline-none"
          placeholder="Optics , glasses...."
        ></input>
        <img src={magniyfing} className="w-[2vmax]"></img>
      </div>

      <div className="hidden lg:block">
        <ul className="flex gap-20 font-semibold cursor-pointer text-[1.5vmax] tracking-tighter text-[#575454] ">
          <li className="hover:text-[#008080] transition-all duration-200">
            Home
          </li>
          <li className="hover:text-[#008080] transition-all duration-200">
            About
          </li>
          <li className="hover:text-[#008080] transition-all duration-200">
            Contact
          </li>
          <li className="hover:text-[#008080] transition-all duration-200">
            Location
          </li>
        </ul>
      </div>
    </div>
  );
};
