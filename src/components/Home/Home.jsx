import React from 'react';
import { HiArrowSmallDown } from "react-icons/hi2";
import { BsArrowRight } from "react-icons/bs";


const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-2xl md:text-5xl font-bold">
            I'm Tawkir Ahmed <span className="text-amber-400">Front-end </span>
            Developer
          </h1>
          <p className="py-6">
            Hello Sir, I am Tawkir Ahmed, a React front-end developer with
            knowledge of full-stack development. Over the past six months, I
            have been honing my skills in web development, specializing in
            React.js for front-end development. I also possess knowledge of
            Express.js for server-side development and MongoDB for working with
            databases. This allows me to tackle end-to-end development tasks and
            build robust, scalable web applications.
          </p>
          <div className='flex gap-5'>
            <button className="font-medium flex flex-row justify-center items-center gap-4 bg-amber-400 hover:bg-black hover:text-white transition-all px-4 py-2 rounded-md cursor-pointer">
              MY RESUME
              <HiArrowSmallDown></HiArrowSmallDown>
            </button>
            <button className="font-medium flex flex-row justify-center items-center gap-4 bg-amber-400 hover:bg-black hover:text-white transition-all px-4 py-2 rounded-md cursor-pointer">
              HIRE ME
              <BsArrowRight></BsArrowRight>
            </button>
          </div>
        </div>
        <img
          src="https://i.postimg.cc/ydzpNbr2/IMG20220330215302-removebg-preview.png"
          className="lg:max-w-sm rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default Home;