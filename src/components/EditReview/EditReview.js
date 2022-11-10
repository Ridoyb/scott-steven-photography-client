import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const EditReview = () => {
    const {user}=useContext(AuthContext)
    const storedReviews= useLoaderData();
    const {review}=storedReviews;
    console.log(review)

    const [newReview, setnewReview] = useState(storedReviews);

    const handleUpdateReview = event =>{
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/reviews/${storedReviews._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                alert('user updated')
                console.log(data);
            }
            
        })
    }

      const handleInputChange = event =>{
        const field = event.target.review;
        const value = event.target.value;
        const newReview = {...review}
        newReview[field] = value;
        console.log(newReview)
        setnewReview(newReview);
        
    }
    
    return (
        <div className='mt-8'>
            
            <form onChange={handleUpdateReview} className='mx-auto w-9/12 lg:w-6/12  ' >


                <div className=" p-8 my-4  container  mx-auto mb-12  rounded-2xl shadow-2xl">
                    <div className=" text-center">
                        <h1 className="font-bold  uppercase text-3xl">Edit Your Review</h1>
                    </div>
                    
                    <div className="my-4">
                        <textarea  onChange={handleInputChange} name='review'defaultValue={review} placeholder="Your Comment" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>
                        
                    </div>
                    
                    <div className="form-control mt-6">
                            <input btn className="btn btn-outline" type="submit" value="SUBMIT" />
                     
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditReview;