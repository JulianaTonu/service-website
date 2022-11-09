import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const AddReview = () => {
    const {title, _id}=useLoaderData
    const {user}=useContext(AuthContext)

    
const handleClientReview=event=>{
    event.preventDefault()
    const form =event.target;
    const name =user?.displayName || 'unregistered';
    const email =user?.email || 'unregistered';
    const image =form.image.value;
    const message =form.message.value;
    console.log(name, email,image,message)
  
    const review ={
      service:_id,
      servicename:title,
      client:name,
      image,
      email,
      message
    }

    fetch('http://localhost:5000/reviews',{

        method:'POST',
        headers:{
           'content-type':'application/json'
        },
        body: JSON.stringify(review)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.acknowledged){
            toast.success('Review added Successfully')
           }
           console.log(data)
       })
       .catch(err=>console.error(err))

  }
  
    return (
        <form onSubmit={handleClientReview}>

  <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 bg-slate-300'>

  <input  type="text" name='name' placeholder='Your Name' className="input input-bordered input-primary w-full" defaultValue={user?.displayName} readOnly/>

   

  <input  type="text" name='image' placeholder='ImageUrl' className="input input-bordered input-primary w-full"  />

  <input  type="text" name='email' placeholder='Email' className="input input-bordered input-primary w-full" defaultValue={user?.email} readOnly />

  
<br />
 <textarea className="textarea textarea-primary"name='message' placeholder="Your Message"></textarea> 

  </div>

  <div className='my-3 text-center'>
       <input type="submit" value='Submit' className="btn btn-active btn-primary w-40 px-10 "/>
       </div>
</form>
    );
};

export default AddReview;