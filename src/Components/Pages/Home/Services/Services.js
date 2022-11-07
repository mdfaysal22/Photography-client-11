import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem/ServiceItem";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-10 mb-5">
        <h1 className="text-3xl ">Services</h1>
        <h3 className="lg:w-1/2 lg:mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          perferendis nostrum quaerat asperiores quia commodi suscipit natus
          ducimus minus similique!
        </h3>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.slice(0, 3).map((service) => (
          <ServiceItem key={service._id} service={service}></ServiceItem>
        ))}
      </div>
      <div className="text-center my-5">
        <button className="btn btn-outline rounded-none border-2">
          All Service
        </button>
      </div>
    </div>
  );
};

export default Services;
