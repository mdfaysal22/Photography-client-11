import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../../Contexts/AuthContext';

const Signup = () => {
  const {signUpInfo, updateUser,signUpGoogle } = useContext(UserAuth);
  const navigate = useNavigate()
  const handleEmailSignUp = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    signUpInfo(email, password)
    .then(result => {
      const currentUser = result.user;
      updateUser(name)
      .then(() => {})
      .catch(() => {})
    })
    .catch(error => console.log(error.message))
    form.reset()
  }


  const handleGoogleSignUP = () => {
    signUpGoogle()
    .then((result) => {
      const user = result.user;
      
    })
    .catch(err => console.log(err))
    navigate('/user')
  }
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">Please, Registration Now</h2>

        <form onSubmit={handleEmailSignUp} className="max-w-lg border rounded-none-none mx-auto">
          <div className="flex flex-col gap-4 p-4 md:p-8">
            <div>
              <label htmlFor="name" placeholder='Full Name' className="inline-block text-gray-800 text-sm sm:text-base mb-2">Full Name</label>
              <input name="name" placeholder='Full Name' type="text" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-none outline-none transition duration-100 px-3 py-2" />
            </div>

            <div>
              <label htmlFor="email" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Email</label>
              <input name="email" type="email" placeholder="Email" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-none outline-none transition duration-100 px-3 py-2" />
            </div>

            <div>
              <label htmlFor="password" className="inline-block text-gray-800 text-sm sm:text-base mb-2">Password</label>
              <input name="password" type="password" placeholder="Password" className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded-none outline-none transition duration-100 px-3 py-2" />
            </div>

            <button className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-none-none outline-none transition duration-100 px-8 py-3">Registration</button>

            <div className="flex justify-center items-center relative">
              <span className="h-px bg-gray-300 absolute inset-x-0"></span>
              <span className="bg-white text-gray-400 text-sm relative px-4">Log in with social</span>
            </div>


            <button onClick={handleGoogleSignUP} className="flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 border border-gray-300 focus-visible:ring ring-gray-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-none-none outline-none transition duration-100 gap-2 px-8 py-3">
              <FcGoogle></FcGoogle>
              Continue with Google
            </button>
          </div>

          <div className="flex justify-center items-center bg-gray-100 p-4">
            <p className="text-gray-500 text-sm text-center">Have an Account? <Link to="/login" className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;