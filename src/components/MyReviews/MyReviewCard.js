import React, {useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const MyReviewCard = ({review}) => {
    console.log(review)
   
    const [myreview, setMyReview]=useState(review)

    
    const handleDelete =id =>{
      const procced =window.confirm(`Are you sure you want to delete this review?`)
      if(procced){
        fetch(`http://localhost:5000/reviews/${id}`,{
          method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount > 0){
            toast.success('Review Deleted Successfully')
            const remaining =myreview.filter(rev=>rev._id !== review._id)
            setMyReview(remaining)
          }
        })
      }
    }

    
    return (
       <div>
        <h1 className='text-2xl text-primary mx-4'>{review.servicename}</h1>
         <div className="flex items-center space-x-3 border-solid border-2 border-indigo-600 p-4 rounded-xl m-3">
          
            <div className="avatar">
              <div className="mask mask-squircle w-24 h-24">
                <img src={review.image}  alt=''/>
              </div>
            </div>
            <div>
              <div className="font-bold">{review.client}</div>
              <div className="text-sm opacity-50">{review.message}</div>
              <button onClick={()=>handleDelete(review._id)} className='btn btn-sm my-2'>Delete</button>

              <Link to ='/updateReview'><button  className='btn btn-sm my-2 ml-4'>Edit Review</button></Link>
            </div>
          </div>
       </div>
    );
};

export default MyReviewCard;