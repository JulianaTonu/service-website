import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const {user,logout}=useContext(AuthContext)
    const [reviews, setReviews]=useState([])

    
    useEffect(()=>{

        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${localStorage.getItem('servicetoken')}`
            }
        })
        .then(res=>{

            if(res.status === 401 || res.status ===403){
               return logout()
            }
            return res.json()
        })
        .then(data=>setReviews(data))
    },[user?.email, logout])
   
    
    

    if(reviews.length === 0){
        return<h1 className='text-red-500 font-bold text-3xl text-center my-32  '>No Review Were Added</h1>
    }
    console.log('reviiiiiiewwwww',reviews)
    return (
     <>
     
        <div className='grid grid-cols-1 lg:grid-cols-1 gap-y-4'>
{
reviews.map(review=><MyReviewCard
key={review._id}
review={review}
></MyReviewCard>)
}
</div>
     
     </>

    );
};

export default MyReviews;