import React from 'react';

const ReviewItem = ({ review }) => {
    const { name, reviewerImg, comment } = review
    return (
        <div class="flex flex-col gap-3 py-4 md:py-8">
            <div className='flex gap-5 items-start'>

                <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <img src={reviewerImg} alt="" />
                    </div>
                </div>
                <div>
                <span class="block text-sm font-bold">{name}</span>
                <p>{comment}</p>
                </div>

            </div>



            <p class="text-gray-600">

            </p>
        </div>
    );
};

export default ReviewItem;