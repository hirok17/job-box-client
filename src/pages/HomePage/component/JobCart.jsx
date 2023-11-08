import { Link } from "react-router-dom";

const JobCart = ({ job }) => {
    const { _id, title, featured_img, minimum, maximum, deadline, location, experience} = job;
    return (
        <section className="w-full px-2 lg:px-0">
            <div className="flex justify-between gap-x-4 bg-base-100 shadow-xl py-4 px-3 rounded-lg border">
                <div>
                    <div className="flex gap-5">
                        <img src={featured_img} className="w-[54px] h-[54px] rounded-[50%]" alt="" />
                        <div>
                            <h2 className="text-lg font-semibold hover:text-[#005D45]">{title}</h2>
                            <p>Closing date: {deadline}</p>
                        </div>
                    </div>
                    <div className="mt-8 ml-3">
                        <span className="bg-[#E6ECEA] p-2 rounded-2xl text-[#005D45] text-base mr-2">{location}</span>
                        <span className="bg-[#E6ECEA] p-2 rounded-2xl text-[#005D45] text-base">${minimum}-${maximum}/<span>month</span> </span>
                        <h2 className="text-base mt-5 text-[#005D45]">Experience: {experience}</h2>
                    </div>
                    
                </div>
                <div>
                    <Link to={`jobs/bid/${_id}`}><button className="btn text-white bg-[#007456] hover:bg-[#FF3811]">Bid Now</button></Link>
                </div>
            </div>
        </section>
    );
};

export default JobCart;