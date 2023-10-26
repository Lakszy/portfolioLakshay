import React, { useState } from "react";
import Hero from "../assests/MainPic.gif";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaTired } from "react-icons/fa";
import { GoHubot } from "react-icons/go";

const Home = () => {
  const [nav, setNav] = useState(false);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="pt-16 lg:pt-0 font-mono max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="lg:mb-36 flex flex-col justify-centerh-full">
          <h2 className="text-3xl sm:text-6xl font-bold text-white mt-44 block md:hidden lg:block">
            I'm a FrontEnd Developer
            <a
              target="_blank"
              href="https://github.com/Lakszy"
              className="text-lg"
            >
              {nav ? <GoHubot size={30}  onClick={() => setNav(!nav)}/> : <FaTired size={30} className="animate-pulse" onClick={() => setNav(!nav)} />}
            Click me
            </a>
          </h2>
          <p className="text-gray-400 text-xl py-6 max-w-md line-clamp-6 lg:line-clamp-none ">
            Hi there!I'm a FrontEnd Developer with 1 year of experience in
            building and designing websites. I really enjoy working on web
            applications using technologies like React, Tailwind, NextJS, and
            Material UI. There's just something about creating compelling user
            interfaces that really excites me.
          </p>

          <div>
            <button className=" cursor-wait hidden font-semibold group text-white w-fit px-6 py-3 my-2 md:flex items-center rounded-md bg-gradient-to-r from-blue-300 to-gray-900 text-xl">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <BiSolidRightArrow />
              </span>
            </button>
          </div>
        </div>
        <div className="w-80 mt-8 lg:-mt-24">
          <img
            src={Hero}
            alt="Pro_Image"
            size={20}
            className="cursor-zoom-in rounded-2xl mx-auto hover:animate-pulse  md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
