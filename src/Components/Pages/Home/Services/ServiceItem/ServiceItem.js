import React from "react";

const ServiceItem = ({service}) => {
    console.log(service);
  return (
    <div className="animate-pulse">
      <a
        href="#"
        class="group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative"
      >
        <img
          src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
          alt="Photo by Austin Wade"
          class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
        />

        <span class="bg-red-500 text-white text-sm font-semibold tracking-wider uppercase rounded-r-lg absolute left-0 top-3 px-3 py-1.5">
          -50%
        </span>
      </a>

      <div class="flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4">
        <div class="flex flex-col">
          <a
            href="#"
            class="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100"
          >
            Fancy Outfit
          </a>
          <span class="text-gray-500 text-sm lg:text-base">by Fancy Brand</span>
        </div>

        <div class="flex flex-col items-end">
          <span class="text-gray-600 lg:text-lg font-bold">$19.99</span>
          <span class="text-red-500 text-sm line-through">$39.99</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
