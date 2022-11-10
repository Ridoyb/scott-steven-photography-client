import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";



const MyReviews = () => {

    const { user } = useContext(AuthContext);
    //console.log(user);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://scott-steve-photography-server.vercel.app/reviews?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [user?.email]);



    const handleDelete = (id) => {
        const proceed = window.confirm(
            "Confirm your deleting?"
        );
        if (proceed) {
            fetch(`https://scott-steve-photography-server.vercel.app/reviews/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        toast("Deleted Successfully");
                        const remaining = reviews.filter((rev) => rev._id !== id);
                        setReviews(remaining);
                    }
                });
        }
    };





    return (
        <div>
            <Helmet>
                <title>My reviews</title>
            </Helmet>

            {reviews.length === 0 ? (
                <div className="flex h-screen justify-center items-center">
                    <h1 className="text-6xl font-bold">No Reviews Found!!</h1>
                </div>
            ) : (
                <>
                    <div>
                        <h2 className="text-center text-3xl font-bold">
                            Your Reviews
                        </h2>
                    </div>
                    <div className="overflow-x-auto w-full my-10">
                        <table className="table container mx-auto w-full">
                            <thead>
                                <tr>
                                    <th>User Details</th>
                                    <th>Services</th>
                                    <th>Review</th>
                                    <th>Edit / Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((review) => (
                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={review.userImg} alt="avatar mask mask-circle w-12 h-12" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{review.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{review.service_title}</td>
                                        <td>{review.review}</td>
                                        <th>
                                            <Link to={`/reviews/${review._id}`}>
                                                <button
                                                    className="btn btn-outline mx-2">
                                                    EDIT
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(review._id)}
                                                className="btn btn-outline"
                                            >
                                                Delete
                                            </button>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}

        </div>
    );
};

export default MyReviews;