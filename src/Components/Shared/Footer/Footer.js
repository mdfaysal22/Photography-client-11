import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineCamera} from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="pt-4 sm:pt-10 lg:pt-12 pb-16">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-t gap-12 lg:gap-8 pt-10 lg:pt-12">
            <div className="col-span-full lg:col-span-2">
              <div className="lg:-mt-2 mb-4">
                <Link to={'/'} className="inline-flex border-2 border-black  items-center text-black-800 text-xl md:text-2xl font-bold gap-2" aria-label="logo">
                  <AiOutlineCamera></AiOutlineCamera>
                  Photo <span className="bg-black p-1 text-white">Graphy</span>
                </Link>
              </div>

              <p className="text-gray-500 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
            </div>
            <div>
              <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Products</div>

              <nav className="flex flex-col gap-4">
              <div>
                  <div className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Cookie settings</div>
                </div>
              </nav>
            </div>
            <div>
              <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Company</div>

              <nav className="flex flex-col gap-4">
              <div>
                  <div  className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Privacy Policy</div>
                </div>
              </nav>
            </div>
            <div>
              <div className="text-gray-800 font-bold tracking-widest uppercase mb-4">Support</div>

              <nav className="flex flex-col gap-4">
              <div>
                  <div className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100">Terms of Service</div>
                </div>
              </nav>
            </div>
            
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-8">
            <span className="text-gray-400 text-sm"> © 2022 - Present Md Faysal. All rights reserved. </span>

            <div className="flex gap-4">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaLinkedin></FaLinkedin>
              <FaInstagram></FaInstagram>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
