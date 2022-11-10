import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="md:my-10 mx-2 md:mx-0">
      <div className="flex justify-between bg-gray-100 flex-col md:flex-row items-center gap-10">
        <div className="w-full  md:w-1/3">
          <div className="md:w-80 bg-black hero   md:h-80">
            <div className=" text-center  h-full w-full hero-content">
              <div className="text-xl md:text-3xl lg:text-5xl text-white font-semibold">
                <h1>5 Years</h1>
                <h1>Experience</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-2 md:w-2/3">
          <small className="text-2xl md:text-3xl font-semibold">About Us</small>
          <h2 className="text-xl md:text-2xl md:mt-5 font-semibold">
            Break out of your routine with a global perspective.
          </h2>
          <p className="mt-2 text-xs md:text-sm text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt
            ex perspiciatis harum illo esse minima autem ea minus nemo! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Numquam, cum.
          </p>


          <Link to={'/about'}>
        <div className="mt-5">
          <button className="btn btn-xs md:btn-lg btn-outline border-2 rounded-none">
            More About
          </button>
        </div>
      </Link>
        </div>
      </div>
      
    </div>
  );
};

export default About;
