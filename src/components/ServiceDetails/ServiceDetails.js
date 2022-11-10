import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const ServiceDetails = () => {

    const { _id, title, img, description, price } = useLoaderData();

    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);
    //console.log(serviceId);

    //review add handler
    const addReview = (event) => {
        event.preventDefault();
        const serviceId = _id;
        const service_title = title;
        const userImg = user.photoURL;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const review = event.target.review.value;
        const reviewItem = { serviceId, userImg, name, email, review, service_title };
        setTimeout(function () { window.location = '' }, 200);

        fetch("https://scott-steve-photography-server.vercel.app/add-review", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewItem),
        })
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                if (data.acknowledged) {
                    toast.success("Thanks for your review!!");
                    event.target.reset();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetch("https://scott-steve-photography-server.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => {
                const displayReview = data.filter(
                    (shw) => shw.serviceId === _id
                );
                setReviews(displayReview);
            });
    }, [_id]);


    return (
        <div>
            <Helmet>
                <title>Service Details</title>
            </Helmet>
            <div className='container mx-auto text-center mt-12'>
                <img className='w-10/12 mx-auto' src={img} alt="" />
                <h1 className="text-4xl font-bold mt-8 mb-8">{title}</h1>
                <h1 className="text-2xl font-bold  mb-8">Price: ${price}</h1>
                <h1 className="text-xl w-10/12 mx-auto  mb-8">{description}</h1>
                <hr />

            </div>


            <div>
                <h1 className="text-4xl font-bold mt-8 mb-8 text-center">Reviews</h1>
            </div>

            <div className='my-20 '>
                <h1 className='text-2xl font-semibold text-center mb-8'>Total Reviews: {reviews.length}</h1>
                {
                    reviews.map(review => <div className="overflow-x-auto container mx-auto w-96">
                        <table className="table w-full"> <tbody key={review._id}>

                            <tr  >


                                <td >
                                    <div className="flex items-center  space-x-3">
                                        <div className="avatar">
                                            <div className="rounded-full w-12 h-12">
                                                <img src={review.userImg} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{review.name}</div>
                                            <div className="text-sm opacity-50">{review.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td >
                                    {review.review}
                                </td>
                            </tr>
                        </tbody>

                        </table>
                    </div>
                    )
                }
            </div>

            {
                user?.email ? (
                    <div>
                        <form onSubmit={addReview} className='mx-auto w-9/12 lg:w-6/12 ' >


                            <div className=" p-8 my-4  container  mx-auto mb-12  rounded-2xl shadow-2xl">
                                <div className=" text-center">
                                    <h1 className="font-bold  uppercase text-3xl">Leave a Comment</h1>
                                </div>
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                    <input name='name' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" placeholder="Name" required />

                                    <input readOnly name='email' className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email" placeholder="Email" value={user?.email} required />

                                </div>
                                <div className="my-4">
                                    <textarea name='review' placeholder="Your Comment" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" required></textarea>
                                </div>

                                <div className="form-control mt-6">
                                    <input btn className="btn btn-outline" type="submit" value="SUBMIT" />

                                </div>
                            </div>
                        </form>
                    </div>
                ) : (
                    < >
                        <div className='text-center'>
                            <p className="font-bold  uppercase text-3xl text-center mb-12">Login to leave a comment!!!</p>
                            <Link to='/login' ><button className='btn btn-outline mb-12'> login</button></Link>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default ServiceDetails;