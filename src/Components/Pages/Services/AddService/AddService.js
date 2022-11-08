import React from "react";

const AddService = () => {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div class="mb-10 md:mb-16">
            <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Add Brand New Service
            </h2>
          </div>
          <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
            <div class="sm:col-span-2">
              <label
                for="company"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Title of Service*
              </label>
              <input
                type="text"
                name="company"
                placeholder="Title"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-gray-500 rounded-none outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="uri"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Service Image URI
              </label>
              <input
                name="uri"
                type="text"
                placeholder="Service URI"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-gray-500 rounded-none outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="uri"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Features
              </label>
              <div className="relative">
              <input
                name="uri"
                type="text"
                placeholder="Add More Features"
                class="w-full bg-gray-50 text-gray-800 border focus:ring ring-gray-500 rounded-none outline-none transition duration-100 px-3 py-2"
              />

              <div className="absolute top-1/2 -translate-y-1/2  right-2">
                <button className="btn btn-outline btn-xs border-none text-gray-400 hover:bg-gray-500 hover:text-white rounded-none">Add Features</button>
              </div>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label
                for="about"
                class="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                About
              </label>
              <textarea
                name="about"
                placeholder="Write about Your Service (minimum 100 word)"
                class="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-gray-500 rounded-none outline-none transition duration-100 px-3 py-2"
              ></textarea>
            </div>

            <div class="sm:col-span-2 flex justify-between items-center">
              <button class="inline-block bg-black text-light border-2 border-black hover:text-black hover:bg-white focus-visible:ring ring-gray-500 text-white text-sm md:text-base font-semibold text-center rounded-none outline-none transition duration-100 px-8 py-3">
                Save Service
              </button>

              <span class="text-gray-500 text-sm">*Required</span>
            </div>

            <p class="text-gray-400 text-xs">
              By signing up to our newsletter you agree to our{" "}
              <a
                href="/"
                class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
