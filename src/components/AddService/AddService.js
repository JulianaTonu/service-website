import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Form } from 'react-router-dom';

const AddService = () => {
    const [service, setService]=useState({})

    const handleAddService=event=>{
    event.preventDefault()
    console.log(service)

    fetch('http://localhost:5000/services',{

     method:'POST',
     headers:{
        'content-type':'application/json'
     },
     body: JSON.stringify(service)
    })
    .then(res=>res.json())
    .then(data=>{
        toast.success('Service added Successfully')
        console.log(data)
    })
    }

    const handleInputBlur =event=>{
    const field =event.target.name
    const value =event.target.value
    const newService ={...service}
    newService[field]=value;
    setService(newService)
    } 

    return (
        <Form onSubmit={handleAddService}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 bg-slate-300'>

          

            <input onBlur={handleInputBlur} type="text" name='title' placeholder='Title' className="input input-bordered input-primary w-full"  />
            <input onBlur={handleInputBlur} type="text" name='img' placeholder='ImgUrl' className="input input-bordered input-primary w-full"  />
            <input onBlur={handleInputBlur} type="text" name='price' placeholder='Price' className="input input-bordered input-primary w-full"  />
            <input onBlur={handleInputBlur} type="text" name='time' placeholder='time' className="input input-bordered input-primary w-full"  />

            <input onBlur={handleInputBlur} type="text" name='details' placeholder='Details' className="input input-bordered input-primary w-full"  />

            <br />
       
            </div>
            <div className='my-3 text-center'>
       <input type="submit" value='Add Service' className="btn btn-active btn-primary w-40 px-10 "/>
       </div>
        </Form>
    );
};

export default AddService;