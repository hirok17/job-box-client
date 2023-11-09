
const JobeTable = ({ job, hendelDelete }) => {
    const {_id, title, featured_img, minimum, maximum, deadline, location, experience, category, postDate} = job;

    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=>hendelDelete(_id)} className="btn btn-square btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={featured_img} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold mb-2">{title}</div>
                        <p>Experience:{experience}</p>

                    </div>
                </div>
            </td>
            <td>
                {category}
            </td>
            <td>{location}</td>
            <td>${minimum}-${maximum}</td>
            <td>{postDate}</td>
            <td>{deadline}</td>
            <th>
                <button className="btn text-white bg-[#007456] hover:bg-[#FF3811]">Update</button>
            </th>
        </tr>
    );
};

export default JobeTable;