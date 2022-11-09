import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const {user}=useContext(AuthContext)
    const [reviews, setReviews]=useState([])

    useEffect(()=>{

        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[user?.email])
   
    return (
        <div className='grid grid-cols-1 lg:grid-cols-1 gap-y-4'>
{
reviews.map(review=><MyReviewCard
key={review._id}
review={review}
></MyReviewCard>)
}
</div>

    );
};

export default MyReviews;