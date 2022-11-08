import React from 'react';
import { Link } from 'react-router-dom';
import { useImageViewer } from "react-image-viewer-hook";
const ServiceCard = ({service}) => {
    const {title,img,price,details, _id}=service
    const { getOnClick, ImageViewer } = useImageViewer();
        return (


            <div className="card card-compact w-80   bg-base-100 shadow-xl">
      <figure className='h-26 '><img src={`${img}?auto=compress&cs=tinysrgb&w=300`} onClick={getOnClick(`${img}?auto=compress&cs=tinysrgb&w=1200`)} alt=''/></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <h2 className="card-title text-2xl font-bold text-primary">{price}</h2>
        <h2 className="text-base text-gray-500 font-mono ">{details.slice(0,100)}</h2>
       
        <div className="card-actions justify-start">
        
     <Link to={`/services/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
    </div>
      </div> 
      <ImageViewer></ImageViewer>
    </div>
        );
};

export default ServiceCard;


{/* <div className="gallery">
        {IMAGES.map((src) => (
          <a
            key={src}
            href={`${src}?auto=compress&cs=tinysrgb&w=1200`}
            onClick={getOnClick(`${src}?auto=compress&cs=tinysrgb&w=1200`)}
          >
            <img src={`${src}?auto=compress&cs=tinysrgb&w=300`} />
          </a>
        ))}
      </div> */}