import React from "react";

const About = () => {
  return (
    <div className="my-5">
      <div className="flex justify-center flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <div className="w-80 border-2 bg-black hero mx-auto h-80">
            <div className=" text-center  h-full w-full hero-content">
              <div className="text-5xl text-white font-semibold">
                <h1>5 Years</h1>
                <h1>Experience</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <small className="text-xs font-thin">About Us</small>
          <h2 className="text-4xl font-semibold">Break out of your routine with a global perspective.</h2>
          <p className="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, sunt ex perspiciatis harum illo esse minima autem ea minus nemo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, cum.</p>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-2 rounded-none">More About</button>
      </div>
    </div>
  );
};

export default About;
