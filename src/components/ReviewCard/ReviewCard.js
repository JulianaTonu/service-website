import React  from 'react';


const ReviewCard = ({review}) => {
 
    return (
        <div className="flex items-center space-x-3 border-solid border-2 border-indigo-600 p-4 rounded-xl m-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={review.image}  alt=''/>
              </div>
            </div>
            <div>
              <div className="font-bold">{review.client}</div>
              <div className="font-semibold">{review.mydate}</div>
              <div className="text-sm opacity-50">{review.message}</div>
              
            </div>
          </div>
    );
};

export default ReviewCard;