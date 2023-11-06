import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet";

const Login = () => {
    const {userLogin} =useContext(AuthContext);
    const location =useLocation();
    const navigate =useNavigate();

    const handelLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password =e.target.password.value;

        userLogin(email, password)
        .then(result=>{
            const loginuser=result.user;
            console.log(loginuser);
            const user={email};
           
            axios.post('http://localhost:5000/jwt', user, {
                withCredentials:true
            })
            .then(data=>{
                console.log(data.data);
                if(data.data.success){
                     navigate(location?.state ? location.state : "/");
                }
            })

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
            <div className="bg-base-200">
                <div className="flex justify-center items-center gap-5 flex-col lg:flex-row">
                    
                    <div className="shadow-2xl bg-base-100 rounded-lg py-16">
                    <h1 className="text-4xl font-bold text-center">Login</h1>
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-[#FF3811] hover:bg-[#FF3811]">Login</button>
                            </div>
                        </form>
                        <p className="text-center">Have an account? <Link className="text-[#FF3811]" to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;