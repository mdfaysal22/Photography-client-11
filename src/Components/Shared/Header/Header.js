import React, { useContext, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserAuth } from "../../../Contexts/AuthContext";
import demophoto from "../../../Assets/user.png";
const Header = () => {
  const { user, loading } = useContext(UserAuth)
  const [state, setState] = useState(false);
  const navigation = [
    { title: "Home", path: "/home" },
    { title: "Services", path: "/services" },
    { title: "Gallery", path: "/gallery" },
    { title: "Blog", path: "/blog" },
  ];
  return (
    <nav className="bg-white w-full border-b md:border-0 md:static">
      <div className="items-center px-4 md:px-0 max-w-screen-xl mx-auto md:flex ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">

          <Link to={'/'} class="inline-flex border-2 border-black  items-center text-black-800 md:text-xl font-bold gap-2" aria-label="logo">
            <AiOutlineCamera></AiOutlineCamera>
            Photo <span className="bg-black p-1 text-white">Graphy</span>
          </Link>

          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2  focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
            }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}

            <div className="block md:hidden ">
              {
                user?.uid ? <Link to={"/user"}>
                <div className="avatar online placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                    
                      <img src={user?.photoURL ? user?.photoURL : demophoto } alt="" /> 
                    
                  </div>
                </div>
                </Link> : <Link
                  to="/signup"
                  className="py-3 px-4 text-white border-2 border-black transition duration-500 bg-black hover:bg-white hover:text-black  shadow"
                >
                  Create an Account
                </Link>
              }


            </div>
          </ul>
        </div>
        <div className="hidden md:inline-block">

          {
            user?.uid ? <Link to={"/user"}>
            <div className="avatar online placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <img src={user?.photoURL ? user?.photoURL : demophoto } alt="" /> 
              </div>
            </div>
            </Link> : <Link
              to="/signup"
              className="py-3 px-4 text-white border-2 border-black transition duration-500 bg-black hover:bg-white hover:text-black  shadow"
            >
              Create an Account
            </Link>
          }

        </div>
      </div>
    </nav>
  );
};

export default Header;
