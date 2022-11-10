import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import HomeCard from './HomeCard';
import ImageGallery from './ImageGallery';
import { Helmet } from "react-helmet";



const Home = () => {
    

    const [services, setServices]=useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/services-home')
        .then(res=>res.json())
        .then(data=> setServices(data));
    },[])
    return (
        
        <div className='container mx-auto'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="hero  bg-base-100 mt-12 mb-12 container">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/2020/03/bg-01-free-img.png" alt='' className=" hero-image rounded-lg shadow-2xl" />
                    <div>
                        <h4 className='text-center mt-12'>PROFESSIONAL PHOTOGRAPHER</h4>
                        <h1 className="text-9xl font-bold title">SCOTT STEVEN</h1>
                        <h5 className='text-center mt-8'>“Capturing moments from today…Creating memories for a lifetime.”</h5>
                    </div>
                </div>
            </div>

            <div className='text-center '>
                <h1 className="text-9xl font-bold title ">SERVICES</h1> 
                <div className='grid justify-center m-auto justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 container mx-auto '>
                    {
                        services.map(service =><HomeCard 
                            key={service._id}
                            service={service}
                            ></HomeCard>)
                    }
                </div>   
                <Link to='/services'>
                    <button className="btn btn-outline mt-12 mb-12 ml-2">VIEW ALL</button> 
                </Link>      
            </div>

            <div className="hero  bg-base-100 mt-12 mb-12 container mx-auto">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className='text-center mt-8'>
                        <h1 className="text-5xl font-bold title">INTERESTED IN MY SERVICES?</h1>
                        <button className="btn btn-outline mt-8">Contact Me</button>
                    </div>
                    <img src="https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/2019/10/services-03-free-img.png" alt='' className=" hero-image rounded-lg shadow-2xl" />
                    
                </div>
            </div>


            

            
            
        </div>
    );
};

export default Home;