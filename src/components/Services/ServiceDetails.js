
import { useLoaderData } from 'react-router-dom';


const ServiceDetails = () => {

    const {title,img,details,price,time,_id} =useLoaderData()


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

{/* //review section  */}

<>
<div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>

</>

      {/* {`/services/${_id}`} */}
        {/* <div>
        <Link to='/'> <button className="btn btn-primary">Add Review</button></Link>
        </div> */}


        </>
        
    );
};

export default ServiceDetails;
