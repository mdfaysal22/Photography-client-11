import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../../Contexts/AuthContext";
import useTitle from "../../../Hooks/useTitle";

const UpdateUser = () => {
  useTitle("Update User")
  const { user, updateUser, loading} = useContext(UserAuth);
  const navigate = useNavigate()
  const handleUpdateUser = (e) => {
    e.preventDefault()
    const form = e.target;
    const userName = form.name.value;
    const photo = form.photo.value;
    updateUser(userName, photo)
      .then(() => { })
      .catch(() => { })
      navigate("/user")
      form.reset()
  }
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          {
            (loading) ? <h1>Loading</h1> : <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Update to {user?.displayName ? user?.displayName : <span>Null User</span>}
            </h2>
          }
        </div>
        <form onSubmit={handleUpdateUser} className="w-2/3 mx-auto">
          <div className="mt-5">
            <label
              htmlFor="name"
              className="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Full name
            </label>
            <input
              name="name"
              type="text"
              placeholder={user?.displayName ? user?.displayName : "Please Set User Name"}
              className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>



          <div className="mt-5">
            <label
              htmlFor="email"
              className="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              readOnly
              placeholder={user?.email}
              className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>

          <div className="my-5">
            <label
              htmlFor="photo"
              className="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Profile Picture
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo uri (http://www.userphoto.png)"
              className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>



          <div className="sm:col-span-2 flex justify-between mb-5 items-center">
            <button type="submit" className="inline-block bg-black hover:bg-white hover:text-black border-2 border-black focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center  outline-none transition duration-100 px-8 py-3">
              Update
            </button>

            <span className="text-gray-500 text-sm"><span className="text-red-500">*</span> Don't Change</span>
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
      </div>
    </div>
  );
};

export default UpdateUser;
