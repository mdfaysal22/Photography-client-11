import React from "react";
import img from "../../../../Assets/gl.jpg";
import {AiOutlineCamera} from 'react-icons/ai';
import {MdOutlineFaceRetouchingNatural} from 'react-icons/md';
import {GiFilmSpool} from 'react-icons/gi';

const ServiceUs = () => {
  const service = [
    {
      name: "Photography",
      icon: <AiOutlineCamera/>,
      details:
        "Curabitur blandit lacus porttitor ridiculus mus. Morbi leo consectetur porta ac vestibulum at eros sit amet non.",
    },
    {
      name: "Retouch",
      icon: <MdOutlineFaceRetouchingNatural/>,
      details:
        "Curabitur blandit lacus porttitor ridiculus mus. Morbi leo consectetur porta ac vestibulum at eros sit amet non.",
    },
    {
      name: "Filming",
      icon: <GiFilmSpool/>,
      details:
        "Curabitur blandit lacus porttitor ridiculus mus. Morbi leo consectetur porta ac vestibulum at eros sit amet non.",
    },
  ];
  return (
    <div className="my-10 bg-gray-100 px-5 py-10">
      <div className="grid gap-5 grid-cols-3">
        <div className="col-span-2">
          <h1 className="text-4xl font-semibold">My Services</h1>
          <h2 className="text-2xl ">
            I'd like to give you a unique photography experience, capture your
            products with excellent composition.
          </h2>
          <div>
            {service.map((item, i) => (
              <div className="flex justify-start items-center gap-2" key={i}>
                <div className="text-6xl">
                    {item.icon}
                </div>
                <div>
                  <h1 className="text-3xl font-semibold">{item.name}</h1>
                  <p className="text-xs font-light">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ServiceUs;
