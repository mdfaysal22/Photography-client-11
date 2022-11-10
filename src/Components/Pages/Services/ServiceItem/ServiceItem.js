import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {

  const { title, ServicePhotoURL, about, _id, price } = service;
  return (
    <div>
      <div className="bg-gray-100">
        <div
          href="#"
          className="group h-80 block bg-gray-100 rounded-none overflow-hidden relative mb-2 lg:mb-3"
        >

          <PhotoProvider>
            <div className="foo">

              <PhotoView src={ServicePhotoURL}>
                <img
                  src={ServicePhotoURL}
                  alt="Img"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                />
              </PhotoView>

            </div>
          </PhotoProvider>



        </div>

        <div className="p-4">
          <div className="flex justify-between items-center">

            <h1 className="text-xl font-semibold text-black">{title}</h1>


            <div className="flex items-end gap-2">
              <span className="text-gray-800 lg:text-lg font-bold">${price}</span>
            </div>
          </div>
          <p>{about.slice(0, 50)} ...</p>
        </div>
        <div className="pb-4 text-center">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-sm rounded-none btn-outline border-2 border-black text-black bg-white hover:bg-black hover:text-white">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
