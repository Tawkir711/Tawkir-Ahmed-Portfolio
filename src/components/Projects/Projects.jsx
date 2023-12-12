import React from "react";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-semibold text-4xl pt-4 mb-4  md:pt-10 md:mb-4">
        My Projects
      </h1>
      <div className=" min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center  px-5 bg-backgroundColor" id="projects">
        <div className="grid grid-cols-3 gap-10 pb-5 lg:pb-0">
          <div className="card w-64 md:w-80 mx-4 lg:w-96  shadow-xl">
            <figure>
              <img
                src="https://i.postimg.cc/SRthXDGh/Screenshot-2023-12-11-214841.png"
                alt="Shoes"
                className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Corporate Event</h2>
              <p>
                Discover seamless corporate event solutions at our website.
                Elevate your gatherings with expert planning, state-of-the-art
                venues, and tailored experiences......
              </p>
              <div className="card-actions justify-end">
                <NavLink to={"https://exclusive-event.web.app"}>
                  <div className="badge badge-outline">
                    <button>Live Link</button>
                  </div>
                </NavLink>
                <NavLink to={"https://github.com/Tawkir711/Corporate-Event"}>
                  <div className="badge badge-outline">
                    <button>Code Link</button>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 pb-5 lg:pb-0">
          <div className="card w-64 md:w-80 mx-4 lg:w-96  shadow-xl">
            <figure>
              <img
                src="https://i.postimg.cc/k5b85Hqx/Screenshot-2023-12-11-220535.png"
                alt="Shoes"
                className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shop Center</h2>
              <p>
                The Shop Center website is a comprehensive hub featuring diverse
                retailers, showcasing a wide array of products and services.....
              </p>
              <div className="card-actions justify-end">
                <NavLink to={"https://assignment-10-a7f6e.web.app/"}>
                  <div className="badge badge-outline">
                    <button>Live Link</button>
                  </div>
                </NavLink>
                <NavLink to={"https://github.com/Tawkir711/Shop-Center-Client"}>
                  <div className="badge badge-outline">
                    <button>Client Code</button>
                  </div>
                </NavLink>
                <NavLink to={"https://github.com/Tawkir711/Shop-Center-Server"}>
                  <div className="badge badge-outline">
                    <button>Server Code</button>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 pb-5 lg:pb-0">
          <div className="card w-64 md:w-80 mx-4 lg:w-96  shadow-xl">
            <figure>
              <img
                src="https://i.postimg.cc/cH7FvC0M/Screenshot-2023-12-11-221118.png"
                alt="Shoes"
                className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Daily News</h2>
              <p>
                A blog website is an online platform where individuals or
                organizations share information, opinions, and experiences on
                various topics......
              </p>
              <div className="card-actions justify-end">
                <NavLink to={"https://daily-news-fd9d3.web.app/"}>
                  <div className="badge badge-outline">
                    <button>Live Link</button>
                  </div>
                </NavLink>
                <NavLink to={"https://github.com/Tawkir711/Daily-News-Client"}>
                  <div className="badge badge-outline">
                    <button>Client Code</button>
                  </div>
                </NavLink>
                <NavLink to={"https://github.com/Tawkir711/Daily-News-Server"}>
                  <div className="badge badge-outline">
                    <button>Server Code</button>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
