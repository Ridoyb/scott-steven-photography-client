import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { MdRateReview } from 'react-icons/md';
import { AiOutlineLogout,AiFillFileAdd } from 'react-icons/ai';
import './Header.css'
import logo from '../../Assets/logo-2.png'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Header = () => {

    const menuItems = <>
        <li className='font-semibold menu-items'><Link to='/'>Home</Link></li>
        <li className='font-semibold menu-items'><Link to='/services'>All Services</Link></li>
        <li className='font-semibold menu-items'><Link to='/blog'>Blog</Link></li>
        
        </>


const { user, logOut } = useContext(AuthContext);

const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.error(error))
}

    return (
        <div>
            <div className="navbar bg-base-200 main-menu">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
                </div>
                <Link to='/' >
                    <img className=' h-14' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            

            <div className="navbar-end">
                {/* <li className='font-semibold  btn btn-outline mr-2'><Link to='/login'>Login</Link></li>
                <li className=' btn btn-outline font-semibold'><Link to='/register'>Register</Link></li> */}
                
                <>
                            {
                                user?.uid ?
                                    <>
                                        <Link className='font-semibold mr-4' to='/my-reviews'><MdRateReview></MdRateReview></Link>
                                        <Link className='font-semibold mr-4' to='/add-service'><AiFillFileAdd></AiFillFileAdd></Link>
                                        <button className='mr-2' variant="" onClick={handleLogOut}><AiOutlineLogout></AiOutlineLogout></button>
                                        
                                    </>
                                    :
                                    <>
                                        <div className='d-flex'>
                                        <Link className='font-semibold mr-4' to='/login'>Login</Link>
                                        <Link className='font-semibold' to='/register'>Register</Link>
                                        </div>
                                    </>
                            }


                        </>

                        
                        <Link  to="/profile">
                            
                        {user?.photoURL ?
                                <img  alt=''
                                    className=' avatar
                                    w-12  rounded-full'
                                    style={{ height: '45px' }}
                                    
                                    title={user?.displayName}
                                    src={user?.photoURL}>
                                </img>
                                : <FaUser className='w-16 h-8 ml-2'></FaUser>
                            }
                        </Link>
            </div>
            </div>

            

            
        </div>
    );
};

export default Header;