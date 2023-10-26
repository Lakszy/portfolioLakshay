import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" md:py-24 w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="px-5 flex justify-between py-24 md:py-2 mb-20"></div>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full z-60">
        <div className="-mb-10">
          <p className="mt-hover:cursor-pointer hover:border-blue-200 text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-16 font-mono">
          I am a passionate computer science student enrolled at Delhi
          University, deeply captivated by the ever-evolving world of
          technology. My journey through this field has been an exciting one,
          marked by the acquisition of a versatile skill set. I possess
          proficiency in various web development tools, including ReactJS,
          Vanilla JS, Bootstrap, CSS, HTML5, GraphQL, MongoDB, and Node.js. In
          addition to my technical expertise, I've harnessed my creative
          potential through mastery of design tools like Figma and Canva. What
          sets me apart is my unique foray into the worlds of marketing and
          business development, achieved through valuable internships as a web
          developer and front-end developer at TalentServe and KalpGuru. These
          experiences have honed my ability to craft and implement strategies
          that elevate brand visibility and drive sales. Furthermore, my
          background in finance has proven invaluable in identifying and
          engaging potential customers and partners. On the academic front,
        </p>
        <br />
        <p className="text-xl font-mono">
        I am
          currently pursuing a course in Artificial Intelligence and Machine
          Learning. My commitment to lifelong learning and continuous skill
          enhancement in this field is unwavering. During my leisure time, I
          find great joy in taking on competitive coding challenges on platforms
          like LeetCode, Codechef, and Codeforces. With a personal tally of over
          400 problem-solving achievements and a 2-star rating on CodeChef, my
          relentless pursuit of knowledge and my knack for problem-solving serve
          as my guiding forces, motivating me to continually evolve and glean
          insights from the vibrant tech community.
        </p>
      </div>
    </div>
  );
};

export default About;
