import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router-dom';
import PopularService from './PopularService/PopularService';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    const pService =useLoaderData()
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>

    <div>
        <h1 className='text-4xl font-bold text-center my-6 text-primary'>Popular Services </h1>

       <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-4 '>

{
pService.map(service=><PopularService
key={service._id}
service={service}
></PopularService>)
}
</div>

<div className="card-actions justify-center my-10">
    
 <Link to={`/services`}> <button className="btn btn-primary">See All</button></Link>
</div>
</div>
        </div>
    );
};

export default Home;