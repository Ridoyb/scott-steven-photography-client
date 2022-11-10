import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const EditReview = () => {

    const storedReview = useLoaderData();

    const [reviewNew, setReviewNew] = useState(storedReview);
    //console.log(reviewNew);
    const handleUpdate = (event) => {
        event.preventDefault();
        // console.log(user);
        fetch(`https://scott-steve-photography-server.vercel.app/reviews/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewNew)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Review updated')
                    console.log(data);
                }

            })
    };
    const handleInputChange = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const updateReview = { ...reviewNew };
        updateReview[field] = value;
        console.log(updateReview)
        setReviewNew(updateReview);
    };

    return (
        <div className='mt-8'>
            <Helmet>
                <title>Blogs</title>
            </Helmet>

            <form onChange={handleUpdate} className='mx-auto w-9/12 lg:w-6/12  ' >


                <div className=" p-8 my-4  container  mx-auto mb-12  rounded-2xl shadow-2xl">
                    <div className=" text-center">
                        <h1 className="font-bold  uppercase text-3xl">Edit Your Review</h1>
                    </div>

                    <div className="my-4">
                        <textarea onChange={handleInputChange} name='review' defaultValue={storedReview.review} placeholder="Your Comment" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-outline" type="submit" value="SUBMIT" />

                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditReview;