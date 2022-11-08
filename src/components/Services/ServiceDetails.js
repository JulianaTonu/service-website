import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {title,img,details,price,time} =useLoaderData()
    return (
   
        <>
        <div className="card card-compact w-80   bg-base-100 shadow-xl">
        <figure className='h-26 '><img src={img} alt="Shoes"/></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          <h2 className="card-title text-2xl font-bold text-primary">{price}</h2>
          <h2 className="text-xl">{details}</h2>
         
          <div className="card-actions justify-start">
          
      
      </div>
        </div> 
      </div>
      {/* {`/services/${_id}`} */}
        <div>
        <Link to='/'> <button className="btn btn-primary">Add Review</button></Link>
        </div>
        </>
        
    );
};

export default ServiceDetails;