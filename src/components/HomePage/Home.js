import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import PopularService from './PopularService/PopularService';

const Home = () => {
    const pService =useLoaderData()
    return (
        <div>
            <Banner></Banner>

    <div>
        <h1 className='text-4xl font-bold text-center my-6 text-primary'>Popular Services : {pService.length}</h1>

       <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-4 '>

{
pService.map(service=><PopularService
key={service._id}
service={service}
></PopularService>)
}
</div>

</div>
        </div>
    );
};

export default Home;