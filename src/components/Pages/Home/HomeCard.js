import React from 'react';
import { Link } from 'react-router-dom';
import './HomeCard.css'
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const HomeCard = ({service}) => {

    const {_id,title,price,img,description}= service;
    return (
        <PhotoProvider>
       
             <div className="card w-90  mx-4  bg-base-100 shadow-xl border home-card ">
            <figure className="px-10 pt-10">
            <PhotoView  src={img}>
                <img src={img} alt="" className="rounded-2xl" />
            </PhotoView>
                
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title mb-8">{title}</h2>
                <p>{description.slice(0, 100)}...</p>
                <div className="">
                    <p className='mt-8 text-bold text-xl text-lg mr-2'>Price: ${price}</p>
                    <Link to={`/services/${service._id}`}><button className="btn btn-outline mt-8 ml-2">VIEW DETAILS</button></Link>
                </div>
            </div>
        </div>
        </PhotoProvider>
      
    );
};

export default HomeCard;