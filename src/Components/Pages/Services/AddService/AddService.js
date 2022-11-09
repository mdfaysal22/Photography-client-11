import React, {  useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddService = () => {
  const [service, setService] = useState({})

  const handleAddService = (e) => {
    e.preventDefault()
    const form = e.target;
    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(service),
    })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          toast("Service Add Successfully")
          form.reset()
        }
        console.log(data);
      })


  }
  const handleOnBlur = (e) => {
    e.preventDefault()
    const field = e.target.name;
    const value = e.target.value;
    const newService = { ...service }
    newService[field] = value;
    setService(newService);
  }
 
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Add Brand New Service
            </h2>
          </div>
          <form onSubmit={handleAddService} className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Title of Service*
              </label>
              <input
                onBlur={handleOnBlur}
                type="text"
                name="title"
                required
                placeholder="Title"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-gray-500 rounded-none outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="photoURL"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Service Image URI
              </label>
              <input
                onBlur={handleOnBlur}
                name="photoURL"
                type="text"
                required
                placeholder="Service URI"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-gray-500 rounded-none outline-none transition duration-100 px-3 py-2"
              />
            </div>


            <div className="sm:col-span-2">
              <label
                htmlFor="price"
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                Booking Price
              </label>
              <input
                onBlur={handleOnBlur}
                name="price"
                type="number"
                required
                placeholder="Booking Price"
                className="w-full bg-gray-50 text-gray-800 border focus:ring ring-gray-500 rounded-none outline-none transition duration-100 px-3 py-2"
              />
            </div>


            <div className="sm:col-span-2">
              <label
                htmlFor="about"
                required
                className="inline-block text-gray-800 text-sm sm:text-base mb-2"
              >
                About
              </label>
              <textarea
                name="about"
                onBlur={handleOnBlur}
                placeholder="Write about Your Service (minimum 100 word)"
                className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-gray-500 rounded-none outline-none transition duration-100 px-3 py-2"
              ></textarea>
            </div>

            <div className="sm:col-span-2 flex justify-between items-center">
              <button type="submit" className="inline-block bg-black text-light border-2 border-black hover:text-black hover:bg-white focus-visible:ring ring-gray-500 text-white text-sm md:text-base font-semibold text-center rounded-none outline-none transition duration-100 px-8 py-3">
                Save Service
              </button>

              <span className="text-gray-500 text-sm">*Required</span>
            </div>

            <p className="text-gray-400 text-xs">
              By signing up to our newsletter you agree to our{" "}
              <a
                href="/"
                className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
          <Toaster></Toaster>
        </div>
      </div>
    </div>
  );
};

export default AddService;
