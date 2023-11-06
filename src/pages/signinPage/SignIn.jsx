import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const SignIn = () => {
    const {createUser}=useContext(AuthContext);
    const heandelSignUp=(e)=>{
        e.preventDefault();
        const name =e.target.name.value;
        const email=e.target.email.value;
        const password =e.target.password.value;
        
        const signUpUser={name, email, password};
        console.log(signUpUser);

        createUser(email, password)
        .then(result=>{
            const signInuser =result.user;
            console.log(signInuser);

            updateProfile(result.user, {
                displayName:name
            })
            .then(()=>{
                console.log('profile update');
            })
            .catch(error=>{
                console.log(error);
            })
            alert ('successful sign up');
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <section>
            <Helmet>
            <title>Job Box | create a account for job</title>
            </Helmet>
            <div className="bg-[#F5F7FC] py-10">
                <div className="flex justify-center items-center gap-5 flex-col lg:flex-row">
                    
                    <div className="shadow-2xl bg-base-100 rounded-lg pt-5 border-t-4 border-b-4 border-[#007456]">
                    <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={heandelSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="your name" className="input input-bordered focus:border-[#007456] focus:outline-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered focus:border-[#007456] focus:outline-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered focus:border-[#007456] focus:outline-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered focus:border-[#007456] focus:outline-none" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-[#007456] hover:bg-[#007456]">Sign Up</button>
                            </div>
                        </form>
                        <p className="text-center pb-4">Already have an account? <Link className="text-[#FF3811]" to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;