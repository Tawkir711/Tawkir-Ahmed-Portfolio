import React from "react";

const Education = () => {
  return (
    <div className=" my-10 py-10 px-5 bg-[#F0F0F6]">
      <h1 className="text-center font-semibold text-4xl ">Education</h1>
      <div className=" w-full ">
        <h2 className=" font-semibold">BBS Student</h2>
        <div className="mt-2">
          <p>March 2022 - Current</p>
        </div>
        <p className="mt-2">
          I am a current Bachelor of Business Studies (BBS) student at Chota
          Sharif Pur Degree College of Lalmai, Comilla. I am learning web
          development to improve my skills along with my studies.
        </p>
      </div>
      <div className=" bg-slate-500 w-full h-0.5 my-5"></div>
      <div className=" w-full ">
        <h2 className=" font-semibold">Web Development Course</h2>
        <div className="mt-2">
          <p>Student</p>
          <p>june 2023 - Dec 2023</p>
        </div>
        <p className="mt-2">
          I have been learning web development from Programming Hero for the
          past six months to improve my skills. Currently, I am a junior React
          front-end developer. However, I am learning node JS and MongoDB to
          become a MERN stack developer and improve my skills.
        </p>
      </div>
    </div>
  );
};

export default Education;
