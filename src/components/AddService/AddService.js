import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const AddService = () => {

    // const { _id, title,img,description, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    


    //review add handler
  const addService = (event) => {
    event.preventDefault();
    const service_id = event.target.service_id.value;
    const img = event.target.img.value;
    const title = event.target.title.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const newService = {service_id,title, img,price,description};
    
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if(data.acknowledged){
          toast.success("New Service Added");
          event.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



    return (
        
            <form onSubmit={addService} className='mx-auto w-9/12 lg:w-6/12 ' >


                <div className=" p-8 my-4  container  mx-auto mb-12  rounded-2xl shadow-2xl">
                    <div className=" text-center">
                        <h1 className="font-bold  uppercase text-3xl">Add a Service</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input name='service_id' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Service ID" required />
                        <input name='title' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Title" required />

                        <input name='img' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Image URL" required />

                        <input name='price' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Price" required />

                        

                    </div>
                    <div className="my-4">
                        <textarea name='description' placeholder="Description" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>
                    </div>
                    
                    <div className="form-control mt-6">
                            <input className="btn btn-outline" type="submit" value="ADD SERVICE" />
                     
                    </div>
                </div>
            </form>
            </div>
    );
};

export default AddService;