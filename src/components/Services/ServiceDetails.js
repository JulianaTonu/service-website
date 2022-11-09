
import { useEffect, useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import ReviewCard from '../ReviewCard/ReviewCard';



const ServiceDetails = () => {

    const {title,img,details,price,time,_id} =useLoaderData()
    const [reviews, setReviews]=useState([])

    useEffect(()=>{

        fetch(`http://localhost:5000/reviews/service?servicename=${title}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[title])
    return (
   
        <>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='w-4/5 '>
    <img className='rounded-xl shadow-xl' src={img} alt='' />
    </div>
    <div>
      <h1 className="text-5xl font-bold py-2 text-primary">{title}</h1>
      <p className="py-3 text-2xl font-bold">Price: {price}</p>
      <p className="py-3 text-2xl font-bold">Duration: {time}</p>
      <p className="py-6 text-mono text-grey-200">{details}</p>
      
    </div>
  </div>
</div>

 {/* /review section   */}

<>
<h1 className='text-primary text-mono text-2xl pt-3 font-semibold'>What Clients say about this Service..</h1>
<div className="card-actions justify-end my-4">
    
 <Link to={`/review/${_id}`}> <button className="btn btn-primary">Add Review</button></Link>
</div>

<div className='grid grid-cols-1 lg:grid-cols-2 gap-y-4'>
{
reviews.map(review=><ReviewCard
key={review._id}
review={review}
></ReviewCard>)
}
</div>


</>

   

        </>
        
    );
};

export default ServiceDetails;
