import React from "react";
import useTitle from "../../../Hooks/useTitle";

const Gallery = () => {
  useTitle("Gallery")
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="md:h-80 flex flex-col sm:flex-row bg-gray-200 overflow-hidden">
            <div className="w-full sm:w-1/2 lg:w-2/5 h-48 sm:h-auto order-first sm:order-none bg-gray-300">
              <img
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
                alt="by Andras Vas"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-3/5 flex flex-col p-4 sm:p-8">
              <h2 className="text-gray-800 text-xl md:text-2xl lg:text-4xl font-bold mb-4">
                Get 20% off
              </h2>

              <p className="max-w-md text-gray-600 mb-8">
                Using my Private Token{" "}
                <span className="font-semibold">#faysal0011</span>
              </p>

              <div className="mt-auto">
                <button
                  href="#"
                  className="btn bg-white hover:bg-black hover:text-white rounded-none focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center border-none transition duration-100 px-8 py-3"
                >
                  Booking Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Code */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
                Gallery
              </h2>

              
            </div>

            <label htmlFor="my-modal-3" className="btn btn-outline text-black bg-white hover:bg-black hover:text-white focus-visible:ring ring-indigo-300 border-2 border-black  text-sm md:text-base font-semibold text-center rounded-none outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">
              Add Photo
            </label>
          </div>


            {/* Modal Content */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Congratulations random Internet user!
                </h3>
                <p className="py-4">
                  You've been selected for a chance to get one year of
                  subscription to use Wikipedia for free!
                </p>
              </div>
            </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            <div
              href="/"
              className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                
                alt=" by Minh Pham"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                VR
              </span>
            </div>
            <div
              href="/"
              className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                
                alt="by Magicle"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                Tech
              </span>
            </div>
            <div
              href="/"
              className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                
                alt=" by Martin Sanchez"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                Dev
              </span>
            </div>
            <div
              href="/"
              className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                
                alt=" by Lorenzo Herrera"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                Retro
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
