import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import { Helmet } from "react-helmet";
import { FaRegEyeSlash, FaRegEye, FaGoogle} from "react-icons/fa6";
import toast from "react-hot-toast";

const Login = () => {
    const {userLogin, googleSignUp} =useContext(AuthContext);
    const location =useLocation();
    const navigate =useNavigate();
    const [showPass, setShowPass] =useState(false);

    const handelLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password =e.target.password.value;

        userLogin(email, password)
        .then(result=>{
            const loginuser=result.user;
            console.log(loginuser);
            toast.success('Login success');
            navigate(location?.state ? location.state : "/");
        })
        .catch(error=>{
            console.log(error);
            toast.error('Invalid email or password');
        })
    }
    const googlelogin=()=>{
        googleSignUp()
        .then(result=>{
            const user =result.user;
            console.log(user);
            navigate(location?.state ? location.state : "/");
            
        })
        .catch(error=>{
            console.log(error);
           
        })
    }
    return (
        <section>
            <Helmet>
            <title>Job Box | login your account</title>
            </Helmet>
            <div className="bg-[#F5F7FC] py-10">
                <div className="flex justify-center items-center gap-5 flex-col lg:flex-row">
                    
                    <div className="shadow-2xl bg-base-100 rounded-lg border-t-4 border-b-4 border-[#007456] py-16">
                    <h1 className="text-4xl font-bold text-center">Login</h1>
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered focus:border-[#007456] focus:outline-none" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered focus:border-[#007456] focus:outline-none" required />
                                <span onClick={()=>setShowPass(!showPass)} className="cursor-pointer absolute bottom-12 right-2">{
                                    showPass ?
                                    <FaRegEye></FaRegEye>
                                    :
                                    <FaRegEyeSlash></FaRegEyeSlash>
                                    
                                }</span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-[#007456] hover:bg-[#FF3811]">Login</button>
                            </div>
                        </form>
                        <div className="text-center pb-8 space-y-3">
                            <p className="text-lg">Or Continue with</p>
                            <i onClick={googlelogin} className="flex justify-center cursor-pointer"><FaGoogle className="bg-[#007456] text-white rounded-full p-4 w-16 h-16 hover:bg-[#EA4335]"></FaGoogle></i>
                        </div>
                        <p className="text-center">Have an account? <Link className="text-[#007456]" to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;