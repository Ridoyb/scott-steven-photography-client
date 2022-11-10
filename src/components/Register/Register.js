import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
         

        console.log(name,photoURL,email,password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });

            const handleUpdateUserProfile = (name, photoURL) => {
                const profile = {
                    displayName: name,
                    photoURL: photoURL
                }
        
                updateUserProfile(profile)
                    .then(() => { })
                    .catch(error => console.error(error));
            }
        }

    return (
        <div>
                <Helmet>
                    <title>Register</title>
                </Helmet>
            <div className="hero mb-12  mt-12  ">
                <div className="hero-content   ">
                    <div className="card  w-100 border max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center pt-4">Register</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                        
                        <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" name='photoURL' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required/>
                        
                        </div>
                        <div className="form-control mt-6">
                        <input className="btn btn-outline" type="submit" value="Register" />
                        <p className=' mt-2'>Already Registered? <Link to='/login' className='link'>LogIn</Link></p>
                        </div>
                        
                    </form>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Register;