import React from "react";

const ServiceItem = ({ service }) => {
  return (
    <div>
      <div>
        <a
          href="#"
          class="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3"
        >
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600"
            loading="lazy"
            alt="Photo by Rachit Tank"
            class="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
          />

          <span class="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
            sale
          </span>
        </a>

        <div>
          <a
            href="#"
            class="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1"
          >
            Timely Watch
          </a>

          <div class="flex items-end gap-2">
            <span class="text-gray-800 lg:text-lg font-bold">$15.00</span>
            <span class="text-red-500 line-through mb-0.5">$30.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
