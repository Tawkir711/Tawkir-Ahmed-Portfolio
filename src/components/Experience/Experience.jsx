import React from 'react';

const Experience = () => {
  return (
    <div id="experience" className="p-2 bg-slate-100">
      <h3 className="font-bold text-center text-2xl my-6">
        Experience / Education
      </h3>
      <div className="md:flex md:gap-10 ">
        <div className="flex-1">
          <figure>
            <img
              src="https://i.postimg.cc/ydzpNbr2/IMG20220330215302-removebg-preview.png"
              className=" rounded-lg shadow-xl "
              alt="About us img"
            />
          </figure>
        </div>
        <div className="md:mt-20 mt-4 flex-1">
          <h2 className="text-xl font-bold mb-4">Name: Tawkir Ahmed.</h2>
          <p className="mb-4">
            <b>Birth Day</b>: 17-11-2002
          </p>
          <p className="mb-4">
            <b>Education</b> : I am a current Bachelor of Business Studies (BBS)
            student at Chota Sharif Pur Degree College of Lalmai, Comilla. I am
            learning web development to improve my skills along with my studies
          </p>
          <p className="mb-4">
            <b>Experience</b> : I have been learning web development from
            Programming Hero for the past six months to improve my skills.
            Currently, I am a junior React front-end developer. However, I am
            learning node JS and MongoDB to become a MERN stack developer and
            improve my skills..
          </p>
          <p className="mb-4">
            <b>Location</b> : Comilla, Bangladesh.
          </p>
          <p className="mb-4">
            <b>Description</b> : Hello, I am Tawkir Ahmed, Bachelor of Business
            Studies, Student at Chota Sharif Pur Degree College. Currently, I am
            a junior React front-end developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;