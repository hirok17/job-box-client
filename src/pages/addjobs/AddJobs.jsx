

const AddJobs = () => {
    return (
        <section className="bg-[#F5F7FC]">
            <h2 className="text-5xl font-bold text-center">Post a New Job </h2>
            <div className="max-w-[950px] mx-auto bg-white px-5">
                <form>
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
                        <input type="text" name="description" className="input input-bordered h-[200px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div>
                            <label className="label">
                                <span className="text-base text-[#202124] font-medium">Category</span>
                            </label>
                            <select className="select select-bordered input h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456] w-full">
                                <option value=""></option>
                                <option value="web development">Web Development</option>
                                <option value="graphics design">Graphics Design</option>
                                <option value="digital marketing">Digital Marketing</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base text-[#202124] font-medium">Job Title</span>
                            </label>
                            <input type="text" placeholder="Job Title" className="input input-bordered w-full h-[60px] bg-[#DDE8F8] focus:outline-none focus:bg-white focus:border-[#007456]" required />
                        </div>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default AddJobs;