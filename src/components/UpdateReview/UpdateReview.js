import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';



const UpdateReview = () => {
    const {user}=useContext(AuthContext)
    const {servicename,_id,message}=useLoaderData()

    console.log('update review',servicename)


    const handleUpdateReview=event=>{
        event.preventDefault()
        const form =event.target;
        const name =user?.displayName || 'unregistered';
        const email =user?.email || 'unregistered';
        const image =form.image.value;
        const mydate =form.mydate.value;
        const upmessage =form.message.value;
        // console.log(name, email,image,message)
      
        const review ={
          service:_id,
          servicename:servicename,
          client:name,
          image,
          email,
          mydate,
          upmessage
        }
    
        fetch(`https://service-website-server.vercel.app/reviewss/${_id}`,{

        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
if(data.modifiedCount> 0){
    toast.success("Review Updated successfully")
    event.target.reset()
}
            
        })
    }
      


    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-10 
            '>Let's update the review for <span className='text-primary'>{servicename}</span> </h1>

     <form onSubmit={handleUpdateReview}>

<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 bg-slate-300'>

<input  type="text" name='name' placeholder='Your Name' className="input input-bordered input-primary w-full" defaultValue={user?.displayName} readOnly/>

 

<input  type="text" name='image' placeholder='ImageUrl' className="input input-bordered input-primary w-full"  />

<input  type="text" name='email' placeholder='Email' className="input input-bordered input-primary w-full" defaultValue={user?.email} readOnly />

<input  type="date" name='mydate' placeholder='' className="input input-bordered input-primary w-full"  />




<textarea className="textarea textarea-primary"name='message' placeholder="Your Message" defaultValue={message}></textarea> 

</div>

<div className='my-3 text-center'>
     <input type="submit" value='Update Review' className="btn btn-active btn-primary w-40 px-10 "/>
     </div>
</form>
        </div>
    );
};

export default UpdateReview;