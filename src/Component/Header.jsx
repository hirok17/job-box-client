import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import Swal from 'sweetalert2';
import logo from '../assets/logo.png';
import '../Component/header.css'
import Topheader from "./Topheader";


const Header = () => {
    const {user, logOut} =useContext(AuthContext);
    const link =<>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/myjobs">My Jobs</NavLink></li>
        <li><NavLink to="/mybids">My Bids</NavLink></li>
        <li><NavLink to="/bidrequest">Bid Requests</NavLink></li>
      
    </>
    const handelLogOut=()=>{
        logOut()
        .then(()=>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Log out successful',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <section className="border-b-2">
            <Topheader></Topheader>
            <div className="max-w-[1200px] mx-auto navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                link
                            }
                        </ul>
                    </div>
                   <Link to="/"><img className="w-fit" src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul id="active-id" className="flex gap-4 text-lg">
                        {
                            link
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    {
                        user?
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                          <div className="w-10 rounded-full">
                            <img src={user?.photoURL} />
                          </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content border mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                          <li>
                            { user?.displayName}
                          </li>
                         
                          <li className="cursor-pointer" onClick={handelLogOut}>Logout</li>
                        </ul>
                      </div>
                        :
                        <Link className="text-lg font-bold hover:text-[#005D45]" to="/login">Login</Link>

                    }
                    <Link to='/addjobs' className="btn text-white bg-[#005D45] hover:bg-[#007456] rounded-full px-6 py-3 ml-3">Post a job</Link>
                    
                    
                </div>
            </div>
        </section>
    );
};

export default Header;