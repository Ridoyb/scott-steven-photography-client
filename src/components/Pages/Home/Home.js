import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="hero  bg-base-100 mt-12 mb-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/2020/03/bg-01-free-img.png" alt='' className=" hero-image rounded-lg shadow-2xl" />
                    <div>
                        <h4 className='text-center mt-12'>PROFESSIONAL PHOTOGRAPHER</h4>
                        <h1 className="text-9xl font-bold title">SCOTT STEVENS</h1>
                    </div>
                </div>
            </div>

            <div className="hero  bg-base-100 mt-12 mb-12">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className='text-center'>
                        <h1 className="text-9xl font-bold title">INTERESTED IN MY SERVICES?</h1>
                        <button className=" py-5 px-10 mt-9 btn-contact">Contact Me</button>
                    </div>
                    <img src="https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/2019/10/services-03-free-img.png" alt='' className=" hero-image rounded-lg shadow-2xl" />
                    
                </div>
            </div>


            <div className='text-center mb-12'>
                <h1 className="text-9xl font-bold title">SERVICES</h1>           
            </div>


        </div>
    );
};

export default Home;