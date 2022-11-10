import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ServicesCard from './ServicesCard';


const Services = () => {

    const [services, setServices]=useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setServices(data));
    },[])

    return (
        <div className='text-center mb-12 '>
            <Helmet>
                <title>Services</title>
            </Helmet>
                <h1 className="text-9xl font-bold title mt-12 ">SERVICES</h1> 
                <div className='grid justify-center m-auto justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 container mx-auto '>
                    {
                        services.map(service =><ServicesCard
                            key={service._id}
                            service={service}
                            ></ServicesCard >)
                    }
                </div>        
            </div>
    );
};

export default Services;