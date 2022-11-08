import React from 'react';
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {FaHeadphones} from 'react-icons/fa'
import {TbLocation} from 'react-icons/tb'

const Banner = () => {
    return (
        <div class="grid grid-cols-2 md:grid-cols-3 bg-black rounded-lg gap-6 md:gap-4 p-6 md:p-8">
        
        <div class="flex flex-col items-center">
          <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            <MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread>
          </div>
          <div class="text-indigo-200 text-center">
            <h1>mdfaysla@gmail.com</h1>
            <h2>Send Mail to Contact Us</h2>
          </div>
        </div>
        
  
        
        <div class="flex flex-col items-center">
          <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            <FaHeadphones></FaHeadphones>
          </div>
          <div class="text-indigo-200 text-sm text-center sm:text-base">
            <h1>16247</h1>
            <h1>Call To Get Customer Services</h1>
          </div>
        </div>
  
        
        <div class="flex flex-col items-center">
          <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            <TbLocation></TbLocation>
          </div>
          <div class="text-indigo-200 text-center text-sm sm:text-base">
            <h1>Kalibari Road,Barisal Sadar, Barisal</h1>
            <button className='btn btn-outline mt-3 border-indigo-200 btn-sm rounded-none border-2 hover:bg-white hover:text-black text-indigo-200'>Location</button>
          </div>
        </div>
        
      </div>
    );
};

export default Banner;