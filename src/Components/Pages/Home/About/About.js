import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="my-10">
      <div className="flex justify-between bg-gray-100 flex-col md:flex-row items-center gap-10">
        <div className="w-full  md:w-1/3">
          <div className="w-80 bg-black hero  h-80">
            <div className=" text-center  h-full w-full hero-content">
              <div className="text-5xl text-white font-semibold">
                <h1>5 Years</h1>
                <h1>Experience</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-2 md:w-2/3">
          <small className="text-3xl font-semibold">About Us</small>
          <h2 className="text-2xl mt-5 font-semibold">
            Break out of your routine with a global perspective.
          </h2>
          <p className="mt-2 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt
            ex perspiciatis harum illo esse minima autem ea minus nemo! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Numquam, cum.
          </p>


          <Link to={'/about'}>
        <div className="mt-5">
          <button className="btn btn-outline border-2 rounded-none">
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
