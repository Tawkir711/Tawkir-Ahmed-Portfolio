import React from 'react';
import { HiArrowSmallDown } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";
import Skills from '../Skills/Skills';
import { HashLink } from 'react-router-hash-link';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Typewriter } from 'react-simple-typewriter'



const Home = () => {
  const handleType = (count) => {
    // access word count number
    console.log(count)
  }
  

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200" id="home">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, I'm Tawkir Ahmed
            </h1>
            <h1
              className="text-5xl font-bold"
              style={{
                paddingTop: "5rem",
                margin: "auto 0",
                fontWeight: "",
              }}
            >
              I'm{" "}
              <span style={{ color: "#eab308", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Web Developer",
                    "Front-end Developer",
                    "React Developer",
                    "JavaScript Developer",
                  ]}
                  loop={200}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
            </h1>
            <p className="py-6">
              Hello Sir, I am Tawkir Ahmed, a React front-end developer with
              knowledge of full-stack development. Over the past six months, I
              have been honing my skills in web development, specializing in
              React.js for front-end development. I also possess knowledge of
              Express.js for server-side development and MongoDB for working
              with databases. This allows me to tackle end-to-end development
              tasks and build robust, scalable web applications.
            </p>
            <div
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="flex gap-5"
            >
              <button className="font-medium flex flex-row justify-center items-center gap-4 bg-amber-400 hover:bg-black hover:text-white transition-all px-4 py-2 rounded-md cursor-pointer">
                MY RESUME
                <HiArrowSmallDown></HiArrowSmallDown>
              </button>
              <HashLink to={"#contact"}>
                <button className="font-medium flex flex-row justify-center items-center gap-4 bg-amber-400 hover:bg-black hover:text-white transition-all px-4 py-2 rounded-md cursor-pointer">
                  HIRE ME
                  <BsArrowRight></BsArrowRight>
                </button>
              </HashLink>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img
              src="https://i.postimg.cc/ydzpNbr2/IMG20220330215302-removebg-preview.png"
              className="lg:max-w-sm rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      <Skills></Skills>
    </div>
  );
};

export default Home;