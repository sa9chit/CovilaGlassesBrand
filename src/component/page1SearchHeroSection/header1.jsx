import logo from "../../HardCodedData/logo.png";
import menu from "../../HardCodedData/menu.png";
import instagram from "../../HardCodedData/instagram.png";
import twitter from "../../HardCodedData/twitter.png";
import facebook from "../../HardCodedData/facebook.png";
import linkedin from "../../HardCodedData/linkedin.png";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { kind } from "openai/_shims/index.mjs";

export const Header1 = () => {
  const refForUl = useRef(null);
  const [state, setState] = useState(false);
  const refForBtn = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      if (
        !refForUl.current.contains(e.target) &&
        !refForBtn.current.contains(e.target)
      ) {
        setState(false);
      }
    };

    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  });
  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 1) {
        setState(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("click", handler);
  });
  return (
    <header className="bg-[#0A2239] px-4 flex items-center justify-between  h-[5vmax] ">
      <img src={logo} className="w-[10vmax] "></img>
      <div
        className="lg:hidden md:hidden xl:hidden 2xl:hidden w-[4vmax] h-[3vmax] flex items-center justify-center"
        id="menu"
      >
        <img
          src={menu}
          ref={refForBtn}
          className="w-[2vmax] invert "
          onClick={() => {
            setState(!state);
          }}
        ></img>
      </div>
      <ul className="hidden lg:flex space-x-4 text-white">
        <li className="w-7">
          <img src={instagram}></img>
        </li>
        <li className="w-7">
          <img src={facebook}></img>
        </li>
        <li className="w-7">
          <img src={twitter}></img>
        </li>
        <li className="w-7">
          <img src={linkedin}></img>
        </li>
      </ul>

      <ul
        ref={refForUl}
        className={` ${
          state ? "block" : "hidden"
        } absolute top-12  left-0 w-full bg-[#001F3F]  transition-all duration-150 text-white  lg:hidden  `}
      >
        <div className="w-screen flex flex-col justify-center px-10 gap-1 h-[30vmax] bg-[#001F3F]  ">
          <li className="">Home</li> <hr></hr>
          <li>About</li> <hr></hr>
          <li>Contact</li> <hr></hr>
          <li>Location</li>
        </div>
      </ul>
    </header>
  );
};
