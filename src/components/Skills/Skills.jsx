import React from 'react';

const Skills = () => {
  
  return (
    <div className=" min-h-screen  flex flex-col justify-center items-center lg:gap-8 my-2 px-5 bg-[#F0F0F6]">
      <h2 className="text-center mb-20 text-3xl font-semibold ">My Skills</h2>

      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-7 px-5">
        <div className="flex ">
          <img
            className="h-[50px]"
            src="https://i.postimg.cc/gcZ7YMZd/html-html5.png"
            alt=""
          />
          <p className="text-2xl font-bold ml-3 mt-3">HTML</p>
        </div>
        <div className="flex ">
          <img
            className="h-[50px]"
            src="https://i.postimg.cc/zXPH0kxb/css3-thumbnail.png"
            alt=""
          />
          <p className="text-2xl font-bold ml-3 mt-3">CSS</p>
        </div>
        <div className="flex ">
          <img
            className="h-[50px]"
            src="https://i.postimg.cc/ncZYmTCv/jvs.jpg"
            alt=""
          />
          <p className="text-2xl font-bold ml-3 mt-3">JavaScript</p>
        </div>
        <div className="flex ">
          <img
            className="h-[50px]"
            src="https://i.postimg.cc/zv2wwYL3/TCSS.png"
            alt=""
          />
          <p className="text-2xl font-bold ml-3 mt-3">Tailwind</p>
        </div>
        <div className="flex ">
          <img
            className="h-[50px]"
            src="https://i.postimg.cc/vT4hNmw5/react.png"
            alt=""
          />
          <p className="text-2xl font-bold ml-3 mt-3">React</p>
        </div>
        <div className="flex ">
          <img
            className="h-[50px]"
            src="https://i.postimg.cc/Vv5MM24K/mongodb-logo.png"
            alt=""
          />
          <p className="text-2xl font-bold ml-3 mt-3">MongoDB</p>
        </div>
        <div className="flex ">
          <img
            className="h-[50px]"
            src="https://i.postimg.cc/yd29mv5B/firebase.png"
            alt=""
          />
          <p className="text-2xl font-bold ml-3 mt-3">Firebase</p>
        </div>
        <div className="flex ">
          <img
            className="h-[50px]"
            src="https://i.postimg.cc/m2yzkLbT/github.png"
            alt=""
          />
          <p className="text-2xl font-bold ml-3 mt-3">Github</p>
        </div>
        <div className="flex ">
          <img
            className="h-[50px]"
            src="https://i.postimg.cc/bv7NLWz6/Vercel-favicon.png"
            alt=""
          />
          <p className="text-2xl font-bold ml-3 mt-3 mb-3">Vercel</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;