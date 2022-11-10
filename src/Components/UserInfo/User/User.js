import React, { useContext } from "react";
import demoUserPhoto from "./../../../Assets/user.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { UserAuth } from "../../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const User = () => {
  const {user, logout, loading} = useContext(UserAuth)
  useTitle(`${user?.displayName}`)
  const navigate = useNavigate()
  const handleLogOut = () => {
    logout()
    .then(result => console.log(result))
    .catch(err => console.log(err))
    navigate('/')
  }
  return (
    <div className="text-center hero">
      <div className="hero-content">
        <div>
          <div className="avatar online placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              {
                loading ? <h1>Loading</h1> : <img src={user?.photoURL ? user?.photoURL : demoUserPhoto} alt="" /> 
              }
            </div>
          </div>
          <div className="my-2 ">
            <h1 className="text-2xl font-semibold">{user?.displayName ? user?.displayName : <span>User Name</span>}</h1>
            <h3>{user?.email ? user?.email : <span>Example@gmail.com</span>}</h3>
          </div>
            <div className="my-5 flex gap-3 justify-center">
                <button onClick={handleLogOut} className="btn btn-sm btn-outline border-2 border-black rounded-none">Logout</button>
                <Link to={"/update-user"}><button className="btn btn-sm btn-outline border-2 border-black rounded-none">Update Profile</button></Link>
            </div>
          <div className="text-left">
            <h2 className="bg-slate-200 p-5 font-semibold text-2xl ">Recent Review</h2>
            <div class="flex bg-slate-100 p-5 my-5 flex-col gap-3 py-4 md:py-8">
              <div>
                <span class="block text-sm font-bold">John McCulling</span>
                <span class="block text-gray-500 text-sm">August 28, 2021</span>
              </div>

              <div class="flex gap-0.5 text-xs -ml-1 text-yellow-500">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiOutlineStar></AiOutlineStar>
              </div>

              <p class="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
              </p>
            </div>
            <div class="flex bg-slate-100 p-5 my-5 flex-col gap-3 py-4 md:py-8">
              <div>
                <span class="block text-sm font-bold">Kate Berg</span>
                <span class="block text-gray-500 text-sm">July 21, 2021</span>
              </div>
              <div class="flex gap-0.5 text-xs -ml-1 text-yellow-500">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiOutlineStar></AiOutlineStar>
              </div>

              <p class="text-gray-600">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
