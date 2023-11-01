import React from "react";
import booksn from "../assests/booksntrade.png";
import bookmy from "../assests/bookmyshow.png";
import port from "../assests/portfolio.png";
import lol from "../assests/lll.png";
import sss from "../assests/sssage.png";
import ttt from "../assests/tic.png";
import Ai from "../assests/AI.png";
import ret from "../assests/retro.png";
import store from "../assests/STORE1.png";
import GitHubRepos from "./github";
const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="py-10 md:py-24 w-full h-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="s md:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check Out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 ">
          <div className="rounded-lg bg-gray-800 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src={port}
              alt=""
              className="rounded-md duration-200"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="flex items-center justify-center bg-gray-900 p-4">
              <a
                href="https://64c61d031ec6cc6227a5315f--starlit-tulumba-72698b.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-blue-500 hover:border-blue-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Demo
                <span className="absolute bg-blue-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -left-4">
                  Visit
                </span>
              </a>
              <a
                href="https://github.com/Lakszy/PORTFOLIO"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-green-500 hover:border-green-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Code
                <span className="absolute bg-green-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -right-4">
                  GitHub
                </span>
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src={Ai}
              alt=""
              className="rounded-md duration-200"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="flex items-center justify-center bg-gray-900 p-4">
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7101594201942859776/"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-blue-500 hover:border-blue-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Demo
                <span className="absolute bg-blue-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -left-4">
                  Visit
                </span>
              </a>
              <a
                href="https://github.com/Lakszy/YOUR-AI-COMPANION"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-green-500 hover:border-green-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Code
                <span className="absolute bg-green-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -right-4">
                  GitHub
                </span>
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src={store}
              alt=""
              className="rounded-md duration-200"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="flex items-center justify-center bg-gray-900 p-4">
              <a
                href="https://first-optime-ecomm.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-blue-500 hover:border-blue-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Demo
                <span className="absolute bg-blue-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -left-4">
                  Visit
                </span>
              </a>
              <a
                href="https://github.com/Lakszy/totalitycorp-frontend-challenge"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-green-500 hover:border-green-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Code
                <span className="absolute bg-green-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -right-4">
                  GitHub
                </span>
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src={ret}
              alt="https://eloquent-travesseiro-66e45d.netlify.app/"
              className="rounded-md duration-200"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="flex items-center justify-center bg-gray-900 p-4">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-blue-500 hover:border-blue-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Demo
                <span className="absolute bg-blue-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -left-4">
                  Visit
                </span>
              </a>
              <a
                href="https://github.com/Lakszy/RETRO"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-green-500 hover:border-green-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Code
                <span className="absolute bg-green-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -right-4">
                  GitHub
                </span>
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src={sss}
              alt=""
              className="rounded-md duration-200"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="flex items-center justify-center bg-gray-900 p-4">
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7076578118999711745/"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-blue-500 hover:border-blue-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Demo
                <span className="absolute bg-blue-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -left-4">
                  Visit
                </span>
              </a>
              <a
                href="https://github.com/Lakszy"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 cursor-not-allowed py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-green-500 hover:border-green-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Code
                <span className="absolute bg-green-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -right-4">
                  GitHub
                </span>
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src={lol}
              alt=""
              className="rounded-md duration-200"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className=" flex items-center justify-center bg-gray-900 p-4">
              <a
                href="https://github.com/Lakszy"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 cursor-not-allowed py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-blue-500 hover:border-blue-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Demo
                <span className="absolute bg-blue-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -left-4">
                  Visit
                </span>
              </a>
              <a
                href="https://github.com/Lakszy/SocialPedia"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-green-500 hover:border-green-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Code
                <span className="absolute bg-green-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -right-4">
                  GitHub
                </span>
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src={bookmy}
              alt=""
              className="rounded-md duration-200"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="flex items-center justify-center bg-gray-900 p-4">
              <a
                href="https://velvety-semifreddo-34dc31.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-blue-500 hover:border-blue-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Demo
                <span className="absolute bg-blue-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -left-4">
                  Visit
                </span>
              </a>
              <a
                href="https://github.com/Lakszy/BookMyShowLakszy"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-green-500 hover:border-green-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Code
                <span className="absolute bg-green-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -right-4">
                  GitHub
                </span>
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src={booksn}
              alt=""
              className="rounded-md duration-200"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="flex items-center justify-center bg-gray-900 p-4">
              <a
                href="https://sites.google.com/view/booksntrade"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-blue-500 hover:border-blue-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Demo
                <span className="absolute bg-blue-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -left-4">
                  Visit
                </span>
              </a>
              <a
                href="https://sites.google.com/"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-green-500 hover:border-green-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Code
                <span className="absolute bg-green-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -right-4">
                  GitHub
                </span>
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
            <img
              src={ttt}
              alt=""
              className="rounded-md duration-200"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <div className="flex items-center justify-center bg-gray-900 p-4">
              <a
                href="https://mellow-bonbon-a7578e.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-blue-500 hover:border-blue-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Demo
                <span className="absolute bg-blue-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -left-4">
                  Visit
                </span>
              </a>
              <a
                href="https://github.com/Lakszy/SAMPLE-REPO"
                target="_blank"
                rel="noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:text-xl hover:font-semibold hover:bg-green-500 hover:border-green-500 rounded-lg"
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Code
                <span className="absolute bg-green-500 text-gray-800 px-2 py-1 rounded-md opacity-0 transition-opacity duration-300 hover:opacity-100 -right-4">
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <GitHubRepos/>
    </div>
  );
};

export default Portfolio;
