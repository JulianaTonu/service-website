import React, { useContext } from 'react';
import { useLoaderData} from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services =useLoaderData()
    useTitle('Services')

    const {loading} =useContext(AuthContext)

    if(loading){
        return (
            <button className="btn loading "></button>
        )
    }
    

    return (
        <div>
        <h1 className='text-4xl font-bold text-center my-6 text-primary'>Total Services : {services.length}</h1>

<div className='grid grid-cols-1 lg:grid-cols-3 gap-y-4 '>

{
services.map(service=><ServiceCard
key={service._id}
service={service}
></ServiceCard>)
}
</div>

</div>
    );
};

export default Services;