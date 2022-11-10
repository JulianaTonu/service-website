
import { useEffect, useState, useContext } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

import ReviewCard from '../ReviewCard/ReviewCard';
import { AuthContext } from './../../context/AuthProvider';
import { toast } from 'react-hot-toast';


const ServiceDetails = () => {
  useTitle('Service Details')
  const {user} =useContext(AuthContext)
    const {title,img,details,price,time,_id} =useLoaderData()
    const [reviews, setReviews]=useState([])

    useEffect(()=>{

        fetch(`https://service-website-server.vercel.app/reviews/service?servicename=${title}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[title])

    //toast for unregister user
    const handletoast=()=>{
    return(toast.error('please login for add review'))
        
        
    }

    return (
   
        <>
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='w-4/5 '>
    <img className='rounded-xl shadow-xl' src={img} alt='' />
    </div>
    <div className='w-3/5'>
      <h1 className="text-5xl font-bold py-2 text-primary">{title}</h1>
      <p className="py-3 text-2xl font-bold">Price: ${price}</p>
      <p className="py-3 text-2xl font-bold">Duration: {time}</p>
      <p className="py-6 text-mono text-grey-200">{details}</p>
      
    </div>
  </div>
</div>

 {/* /review section   */}

<>
<h1 className='text-primary text-mono text-2xl pt-3 font-semibold'>What Clients say about this Service..</h1>
<div className="card-actions justify-end my-4">
    


   {
          user?.email ?
          <>
          <Link to={`/review/${_id}`}> <button className="btn btn-primary">Add Review</button></Link>
          
          </>
            :
           <>
               <Link to=''> <button onClick={handletoast} className="btn btn-primary disabled:">Add Review</button></Link>
              
                </>
          }

   

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
