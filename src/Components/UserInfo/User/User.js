import React from "react";
import user from "./../../../Assets/user.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const User = () => {
  return (
    <div className="text-center hero">
      <div className="hero-content">
        <div>
          <div className="avatar online placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <img src={user} alt="" />
            </div>
          </div>
          <div className="my-2 ">
            <h1 className="text-2xl font-semibold">User Name</h1>
            <h2 className="text-sm text-slate-500">Web Designer</h2>
            <h3>exmple@gmail.com</h3>
          </div>
            <div className="my-5">
                <button className="btn btn-sm btn-outline border-2 border-black rounded-none">Logout</button>
            </div>
          <div className="text-left">
            <h2 className="bg-slate-200 p-5 font-semibold text-2xl ">Recent Review</h2>
            <div class="flex bg-slate-100 p-5 my-5 flex-col gap-3 py-4 md:py-8">
              <div>
                <span class="block text-sm font-bold">John McCulling</span>
                <span class="block text-gray-500 text-sm">August 28, 2021</span>
              </div>

              <div class="flex gap-0.5 text-xs -ml-1 text-yellow-500">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiOutlineStar></AiOutlineStar>
              </div>

              <p class="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
              </p>
            </div>
            <div class="flex bg-slate-100 p-5 my-5 flex-col gap-3 py-4 md:py-8">
              <div>
                <span class="block text-sm font-bold">Kate Berg</span>
                <span class="block text-gray-500 text-sm">July 21, 2021</span>
              </div>
              <div class="flex gap-0.5 text-xs -ml-1 text-yellow-500">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiOutlineStar></AiOutlineStar>
              </div>

              <p class="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
