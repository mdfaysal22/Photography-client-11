import React from "react";

const UpdateUser = () => {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div class="mb-10 md:mb-16">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Update User 
          </h2>
        </div>
        <form class="w-2/3 mx-auto">
          <div className="mt-5">
            <label
              for="name"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Full name
            </label>
            <input
              name="name"
              type="text"
              placeholder="User"
              class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>
          <div className="mt-5">
            <label
              for="title"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Title
            </label>
            <input
              name="title"
              type="text"
              placeholder="Title (web Designer)"
              class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>


          <div className="mt-5">
            <label
              for="email"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              readOnly
              placeholder="user@gmail.com"
              class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>


          <div className="mt-5">
            <label
              for="password"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>

          <div className="my-5">
            <label
              for="photo"
              class="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Profile Picture
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo uri (http://www.userphoto.png)"
              class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>

          

          <div class="sm:col-span-2 flex justify-between mb-5 items-center">
            <button class="inline-block bg-black hover:bg-white hover:text-black border-2 border-black focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center  outline-none transition duration-100 px-8 py-3">
              Update
            </button>

            <span class="text-gray-500 text-sm"><span className="text-red-500">*</span> Don't Change</span>
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
  );
};

export default UpdateUser;
