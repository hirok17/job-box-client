import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import axios from "axios";
import JobeTable from "./JobeTable";

const Myjobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);
    const url = `http://localhost:5000/myjob?email=${user?.email}`;
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setJobs(res.data);
                console.log(res.data);
            })

    }, [url])
    return (
        <section>
            <div className="bg-[url('https://i.ibb.co/9408VN5/Banner.png')] text-center py-16">
                <h2 className="text-white text-4xl font-bold">Find Your Dream Jobs</h2>
            </div>
            <div className="container mx-auto px-3">
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Job Name</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Offered salary</th>
                        <th>Date posted</th>
                        <th>Closing date</th>
                    </tr>
                </thead>
                <tbody>
                {
                jobs?.map(job=><JobeTable key={job._id} job={job}></JobeTable>)
               }
                </tbody>


            </table>
        </div>
              
            </div>
        </section>
    );
};

export default Myjobs;