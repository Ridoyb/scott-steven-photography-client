import React from 'react';
import { Helmet } from 'react-helmet';
import img from '../../Assets/404.png'

const Error = () => {
    return (
        <div className='w-full mx-auto text-center mb-12'>
            
            <img className='mx-auto' src={img} alt="" />
            <h2 className='text-5xl'>Page Not Found!!!</h2>
        </div>
    );
};

export default Error;