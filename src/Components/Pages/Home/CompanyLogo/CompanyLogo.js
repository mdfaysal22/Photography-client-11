import React from "react";
import { FaAmazon, FaApple, FaGoogle, FaMicrosoft } from "react-icons/fa";

const CompanyLogo = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Trusted by the best
          </h2>

          <div className="md:h-40 grid grid-cols-1 text-xl md:text-3xl md:grid-cols-2 lg:grid-cols-4 sm:content-evenly bg-black rounded-none gap-6 p-6">
            <div className="flex justify-center gap-3  items-center text-white">
              <h1>Apple</h1>
              <FaApple></FaApple>
            </div>
            <div className="flex justify-center gap-3 items-center text-white">
              <h1>Microsoft</h1>
              <FaMicrosoft></FaMicrosoft>
            </div>
            <div className="flex justify-center gap-3 items-center text-white">
              <h1>Google</h1>
              
              <FaGoogle></FaGoogle>
            </div>
            <div className="flex justify-center gap-3 items-center text-white">
              <h1>Amazon</h1>
              <FaAmazon></FaAmazon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
