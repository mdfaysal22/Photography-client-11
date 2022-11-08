import React from 'react';
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
    return (
        <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center">Thanks For Your Registration</h2>
    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Login Now</h2>

    <form class="max-w-lg border rounded-none-none mx-auto">
      <div class="flex flex-col gap-4 p-4 md:p-8">
        <div>
          <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Email</label>
          <input name="email" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-none outline-none transition duration-100 px-3 py-2" />
        </div>

        <div>
          <label for="password" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Password</label>
          <input name="password" class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-none outline-none transition duration-100 px-3 py-2" />
        </div>

        <button class="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-none-none outline-none transition duration-100 px-8 py-3">Log in</button>

        <div class="flex justify-center items-center relative">
          <span class="h-px bg-gray-300 absolute inset-x-0"></span>
          <span class="bg-white text-gray-400 text-sm relative px-4">Log in with social</span>
        </div>


        <button class="flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-none-none outline-none transition duration-100 gap-2 px-8 py-3">
          <FcGoogle></FcGoogle>

          Continue with Google
        </button>
      </div>

      <div class="flex justify-center items-center bg-gray-100 p-4">
        <p class="text-gray-500 text-sm text-center">Don't have an account? <a href="/" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">Register</a></p>
      </div>
    </form>
  </div>
</div>
    );
};

export default Login;