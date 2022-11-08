import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {title,img,price,details}=service
       
        return (
            <div className="card card-compact w-80   bg-base-100 shadow-xl">
      <figure className='h-26 '><img src={img} alt="Shoes"/></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <h2 className="card-title text-2xl font-bold text-primary">{price}</h2>
        <h2 className="text-xl">{details}</h2>
       
        <div className="card-actions justify-start">
        {/* {`/sevices/${_id}`} */}
     <Link to=''> <button className="btn btn-primary">View Details</button></Link>
    </div>
      </div> 
    </div>
        );
};

export default ServiceCard;