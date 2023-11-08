import { Link } from "react-router-dom";


const PostAJob = () => {
    return (
        <section className="max-w-[1200px] mx-auto bg-[#FAF6EB] rounded-2xl mt-20">
            <div className="pl-8">
                <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
                    <img src="https://i.ibb.co/T1gNyv3/image-home-05-7.webp" className="rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Looking to post a job?</h1>
                        <p className="py-6">Find professionals from around the world and across all skills.</p>
                        <Link to="/addjobs"><button className="btn text-white bg-[#007456] hover:bg-[#FF3811]">Post your job for FREE</button></Link>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default PostAJob;