import React from 'react';

const MyReviewCard = ({review}) => {
    console.log(review)
    return (
       <div>
        <h1 className='text-2xl text-primary mx-4'>{review.servicename}</h1>
         <div className="flex items-center space-x-3 border-solid border-2 border-indigo-600 p-4 rounded-xl m-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={review.image}  alt=''/>
              </div>
            </div>
            <div>
              <div className="font-bold">{review.client}</div>
              <div className="text-sm opacity-50">{review.message}</div>
              
            </div>
          </div>
       </div>
    );
};

export default MyReviewCard;