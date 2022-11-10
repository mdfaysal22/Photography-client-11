import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStarHalfAlt, FaStar } from 'react-icons/fa'
import { UserAuth } from "../../../../Contexts/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import ReviewItem from "../../../Shared/ReviewItem/ReviewItem";
import { PhotoProvider, PhotoView } from "react-photo-view";
import useTitle from "../../../../Hooks/useTitle";

const Service = () => {
  useTitle("Service")
  const { title, ServicePhotoURL, _id, about, price } = useLoaderData();
  const { user } = useContext(UserAuth);
  // const { email, displayName, photoURL } = user;
  const [review, setReview] = useState({});
  const [allReview, setAllReview] = useState([]);


  const handleBlur = (e) => {
    e.preventDefault()
    const form = e.target;
    const commentField = form.name;
    const comment = form.value;
    const newReview = { ...review }
    newReview[commentField] = comment;
    setReview(newReview)
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const newReview = { ...review }
    newReview["postId"] = _id;
    newReview["userEmail"] = user?.email;
    newReview["name"] = user?.displayName;
    newReview["reviewerImg"] = user?.photoURL;
    setReview(newReview);
    // console.log(review);
    // Send Data from server -- 

    fetch('https://photo-server-peach.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          toast("Thanks For your Valuable Review")
          form.reset()
        }
      })

  }

  useEffect(() => {
    fetch(`https://photo-server-peach.vercel.app/reviews/${_id}`)
      .then(res => res.json())
      .then(data => setAllReview(data))
  }, [_id])

  // useEffect(() => {
  //   fetch(`http://localhost:5000/reviews?postId=${_id}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setAllReview(data)
  //     console.log(data)
  //   })
  // },[_id])




  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="grid lg:grid-cols-4 gap-3">

            <div className="lg:col-span-4 bg-gray-100 rounded-lg overflow-hidden relative">

              <PhotoProvider>
                <div className="foo">

                  <PhotoView src={ServicePhotoURL}>
                    <img src={ServicePhotoURL} alt="" className="w-full h-full object-cover object-center" />
                  </PhotoView>

                </div>
              </PhotoProvider>







            </div>
          </div>
          <div>
            <div className="mb-2 md:mb-3">
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
                {title}
              </h2>
            </div>

            <div>
              <p>{about}</p>

            </div>
            <div className="text-xl font-semibold text-gray-900">
              <h1><span>Price: $</span>{price}</h1>
            </div>



          </div>
        </div>
      </div>

      {/* Review Text Area */}
      <div>

      </div>


      <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-md px-4 md:px-8 mx-auto">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">
              Customer Reviews
            </h2>

            <div className="flex justify-between items-center border-t border-b py-4 mb-4">
              <div className="flex flex-col gap-0.5">
                <span className="block font-bold">Total</span>

                <div className="flex gap-0.5 text-yellow-400 -ml-1">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStarHalfAlt></FaStarHalfAlt>
                </div>

                <span className="block text-gray-500 text-sm">
                  Bases on 27 reviews
                </span>
              </div>

              {
                user?.uid ? <label htmlFor="my-modal-3" className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-none outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">
                  Write a Review
                </label> : <Link to={'/login'}><label className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-none outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">
                  Please Login
                </label></Link>
              }
            </div>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box  rounded-none relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Write your Best Comment...
                </h3>
                <form onSubmit={handleReviewSubmit} className="my-4">
                  <div>
                    <textarea onBlur={handleBlur} required name="comment" placeholder="Type Your Comment" className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
                  </div>
                  <button type="submit" className="btn btn-outline border-1 border-gray-200 text-black hover:bg-gray-100 hover:text-black rounded-none hover:border-gray-200">Comment</button>
                </form>
                <Toaster></Toaster>
              </div>
            </div>

            {/* Modal Body End */}

            <div className="divide-y">

              {
                allReview.map(review => <ReviewItem key={review._id} review={review}></ReviewItem>)
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
