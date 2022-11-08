import React from "react";

const Review = () => {
  return (
    <div className="my-10">
      <div className="text-center my-3">
        <h1 className="text-3xl font-semibold">Recent Customer Reviews</h1>
        <p className="text-gray-500 md:w-1/2 md:mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
      </div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs rounded-none">
          1
        </a>
        <a href="#item2" className="btn btn-xs rounded-none">
          2
        </a>
        <a href="#item3" className="btn btn-xs rounded-none">
          3
        </a>
        <a href="#item4" className="btn btn-xs rounded-none">
          4
        </a>
      </div>
    </div>
  );
};

export default Review;
