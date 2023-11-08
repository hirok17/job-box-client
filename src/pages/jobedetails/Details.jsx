import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const data = useLoaderData();
    const { title, featured_img, minimum, maximum, deadline, location, experience, Cover_img, category, description, postDate, email } = data;

    return (
        <section className="bg-[#F9F9F9]">
            <div className="bg-[#F2F5FC]">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-x-4 py-4 px-3">
                    <div>
                        <div className="flex gap-5">
                            <img src={featured_img} className="w-[54px] h-[54px] rounded-[50%]" alt="" />
                            <div>
                                <h2 className="text-lg font-semibold hover:text-[#005D45]">{title}</h2>

                            </div>
                        </div>
                        <div className="mt-8 ml-3">
                            <span className="bg-[#E6ECEA] p-2 rounded-2xl text-[#005D45] text-base mr-2">{location}</span>
                            <span className="bg-[#E6ECEA] p-2 rounded-2xl text-[#005D45] text-base">${minimum}-${maximum}/<span>month</span> </span>
                            <h2 className="text-base mt-5 text-[#005D45]">Experience: {experience}</h2>
                        </div>

                    </div>
                    <div>
                        <p className="text-lg font-semibold mb-3">Application ends: <span className="text-[#007456]">{deadline}</span></p>
                        <Link><button className="btn text-white bg-[#007456] hover:bg-[#FF3811]">Bid Now</button></Link>
                    </div>
                </div>

            </div>
            {/* end */}
            <div className="container mx-auto grid gap-5 grid-cols-1 lg:grid-cols-4 my-14 ">
                <div className="bg-white lg:col-span-3 border rounded-xl">
                    <div>
                        <img className="w-full" src={Cover_img} alt="" />
                    </div>
                    <div className="px-5 my-8">
                        <h3 className="text-2xl font-semibold mb-3 text-[#007456]">Job Description</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="bg-white border rounded-xl">
                    <div className="pl-6 pt-5 space-y-5">
                        <div>
                            <p className="text-lg text-[#007456] font-bold">Category:</p>
                            <p>{category}</p>
                            
                        </div>
                        <div>
                            <p className="text-lg text-[#007456] font-bold">Location:</p>
                            <p>{location}</p>
                            
                        </div>
                        <div>
                            <p className="text-lg text-[#007456] font-bold">Date posted:</p>
                            <p>{postDate}</p>
                            
                        </div>
                        <div>
                            <p className="text-lg text-[#007456] font-bold">Closing date:</p>
                            <p>{deadline}</p>  
                        </div>
                        <div>
                            <p className="text-lg text-[#007456] font-bold">Offered salary:</p>
                            <p>${minimum} - ${maximum}</p>  
                        </div>
                        <div>
                            <p className="text-lg text-[#007456] font-bold">Email:</p>
                            <p>{email}</p>  
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Details;