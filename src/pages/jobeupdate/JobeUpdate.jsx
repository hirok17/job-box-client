import { useContext } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import Swal from 'sweetalert2';


const JobeUpdate = () => {
    const {user} =useContext(AuthContext);
    const jobData=useLoaderData();
    const navigate =useNavigate();
    console.log(jobData);
    const {_id, title, category, minimum, maximum, deadline, description} = jobData;
    const hendelform=(e)=>{
        e.preventDefault();
        const title=e.target.title.value;
        const category=e.target.category.value;
        const minimum=e.target.minimum.value;
        const maximum =e.target.maximum.value;
        const deadline =e.target.deadline.value;
        const description =e.target.description.value;

        const jobDatainfo={title, category, minimum, maximum, deadline, description};
        console.log(jobDatainfo);   
        
        axios.put(`https://job-box-server-chi.vercel.app/update/${_id}`,jobDatainfo)
        .then(res=>{
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Update successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/myjobs');
            }
        })
    };
    return (
        <section className="bg-[#F5F7FC] py-10 px-3">
            <Helmet>
            <title>Job Box | update your job</title>
            </Helmet>
        <h2 className="text-5xl font-bold text-center">Update your  Job </h2>
        <div className="max-w-[950px] mx-auto bg-white px-8 py-10 rounded-lg drop-shadow-sm mt-8 border-t-4 border-b-4 border-[#007456]">
            <form onSubmit={hendelform}>
            <div className="form-control">
                    <label className="label">
                        <span className="text-base text-[#202124] font-medium">Email:</span>
                    </label>
                    <input type="email" name="email" disabled defaultValue={user.email} placeholder="Job Apply Email" className="input input-bordered h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="text-base text-[#202124] font-medium">Job Title</span>
                    </label>
                    <input type="text" name="title" defaultValue={title} placeholder="Job Title" className="input input-bordered h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                </div>
                <div className="form-control mt-5">
                    <label className="label">
                        <span className="text-base text-[#202124] font-medium">Job Description</span>
                    </label>
                    <textarea name="description" defaultValue={description} placeholder="job description" cols="30" rows="100" className="input input-bordered bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456] h-[200px]"></textarea>
                
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div>
                        <label className="label">
                            <span className="text-base text-[#202124] font-medium">Category</span>
                        </label>
                        <select name="category" defaultValue={category} className="select select-bordered input h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456] w-full">
                            <option value=""></option>
                            <option value="web-development">Web Development</option>
                            <option value="graphics-design">Graphics Design</option>
                            <option value="digital-marketing">Digital Marketing</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base text-[#202124] font-medium">Min. Salary</span>
                        </label>
                        <input type="text" name="minimum" defaultValue={minimum} placeholder="$$$" className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base text-[#202124] font-medium">Max. Salary</span>
                        </label>
                        <input type="text" name="maximum" defaultValue={maximum} placeholder="$$$" className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base text-[#202124] font-medium">Application Deadline Date</span>
                        </label>
                        <input type="date" name="deadline" defaultValue={deadline} placeholder="date" className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                    </div>
                </div>
                 <input type="submit" value="Update job" className="btn text-white bg-[#007456] hover:bg-[#FF3811] w-full mt-8" />

            </form>
        </div>
    </section>
    );
};

export default JobeUpdate;