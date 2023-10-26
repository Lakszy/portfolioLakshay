import React, { useState } from "react";
import ShuffleText from "react-shuffle-text";
import { FaTimes } from "react-icons/fa";
import { GoHubot } from "react-icons/go";
import { FcMusic } from "react-icons/fc";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <>
      <div className="pb-1 flex justify-between bg-black items-center w-full h-32">
        <div className="text-3xl md:text-5xl text-blue-100 hover:shadow-white px-2 cursor-pointer font-mono animate-pulse md:hover:text-5xl hover:font-bold hover:animate-none">
          <span className="flex flex-row">
            <ShuffleText content="Lakshay Khattar" />
            <FcMusic />
          </span>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200 hover:text-white text-2xl"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className=" md:hidden text-gray-500 px-4 mt-6 hover:cursor-pointer z-10"
        >
          {nav ? <FaTimes size={30} /> : <GoHubot size={30} />}
        </div>

        {nav && (
          <ul  className=" flex flex-col mt-24 items-center absolute top-12  w-full h-screen bg-gradient-to-b from-black to  via-gray-500 text-gray-300">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="capitalize text-white font-bold duration-200 text-4xl mb-8"
              >
                <Link to={link} smooth duration={1500} onClick={() => setNav(!nav)}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
