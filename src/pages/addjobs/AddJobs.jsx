import { useContext } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddJobs = () => {
    const {user} =useContext(AuthContext);
    const navigate =useNavigate();
    const postDate =new Date();
 
    const hendelform=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const title=e.target.title.value;
        const category=e.target.category.value;
        const location=e.target.location.value;
        const minimum=e.target.minimum.value;
        const maximum =e.target.maximum.value;
        const experience =e.target.experience.value;
        const deadline =e.target.deadline.value;
        const featured_img =e.target.featured_img.value;
        const Cover_img =e.target.Cover_img.value;
        const description =e.target.description.value;

        const jobData={email, title, category, location, minimum, maximum, experience, postDate, deadline, featured_img, Cover_img, description};
        console.log(jobData);

        axios.post('https://job-box-server-chi.vercel.app/jobs', jobData)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                toast.success('jobe add successfully');
                navigate('/myjobs');
            }
        })


        

    };
    return (
        <section className="bg-[#F5F7FC] py-10 px-3">
            <h2 className="text-5xl font-bold text-center">Post a New Job </h2>
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
                        <input type="text" name="title" placeholder="Job Title" className="input input-bordered h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                    </div>
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="text-base text-[#202124] font-medium">Job Description</span>
                        </label>
                        <textarea name="description"  placeholder="job description" cols="30" rows="100" className="input input-bordered bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456] h-[200px]"></textarea>
                    
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div>
                            <label className="label">
                                <span className="text-base text-[#202124] font-medium">Category</span>
                            </label>
                            <select name="category" className="select select-bordered input h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456] w-full">
                                <option value=""></option>
                                <option value="web-development">Web Development</option>
                                <option value="graphics-design">Graphics Design</option>
                                <option value="digital-marketing">Digital Marketing</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base text-[#202124] font-medium">Location</span>
                            </label>
                            <input type="text" name="location" placeholder="Location"  className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base text-[#202124] font-medium">Min. Salary</span>
                            </label>
                            <input type="text" name="minimum" placeholder="$$$" className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base text-[#202124] font-medium">Max. Salary</span>
                            </label>
                            <input type="text" name="maximum" placeholder="$$$" className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base text-[#202124] font-medium">Experience</span>
                            </label>
                            <input type="text" name="experience" placeholder="Experience" className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base text-[#202124] font-medium">Application Deadline Date</span>
                            </label>
                            <input type="date" name="deadline" placeholder="date" className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base text-[#202124] font-medium">Featured Image</span>
                            </label>
                            <input type="text" name="featured_img" placeholder="Featured Image" className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base text-[#202124] font-medium">Cover Image</span>
                            </label>
                            <input type="text" name="Cover_img" placeholder="Cover Image" className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                        </div>
                    </div>
                     <input type="submit" value="Add job" className="btn text-white bg-[#007456] hover:bg-[#FF3811] w-full mt-8" />

                </form>
            </div>
        </section>
    );
};

export default AddJobs;