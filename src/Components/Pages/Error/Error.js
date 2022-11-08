import React from "react";
import { Link } from "react-router-dom";
import error from "../../../Assets/error.svg";

const Error = () => {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="flex flex-col items-center">
          <div className="md:w-1/2 mx-10 md:mx-0 my-10">
            <img src={error} alt="" />
          </div>

          <Link
            to={"/home"}
            class="btn btn-outline border-2 border-black text-black bg-white hover:bg-black hover:text-white text-sm md:text-base font-semibold text-center rounded-none outline-none transition duration-100 px-8 py-3"
          >
            Go To Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
