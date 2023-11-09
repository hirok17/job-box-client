import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/AuthProvider";
import axios from "axios";
import JobeTable from "./JobeTable";
import Swal from 'sweetalert2';

const Myjobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);
    const url = `https://job-box-server-chi.vercel.app/myjob?email=${user?.email}`;
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setJobs(res.data);
                console.log(res.data);
            })

    }, [url])
    const hendelDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://job-box-server-chi.vercel.app/myjob/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your job has been deleted.",
                                icon: "success"
                            });
                            const remaining = jobs.filter(job => job._id !== id);
                            setJobs(remaining);

                        }
                    })

            }
        });
    }
    return (
        <section>
            <div className="bg-[url('https://i.ibb.co/9408VN5/Banner.png')] text-center py-16">
                <h2 className="text-white text-4xl font-bold">Find Your Dream Jobs</h2>
            </div>
            <div className="container mx-auto px-3 mt-8">
                {
                    (jobs.length > 0)
                    ?
                    <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th className="text-base">Job Name</th>
                                <th className="text-base">Category</th>
                                <th className="text-base">Location</th>
                                <th className="text-base">Offered salary</th>
                                <th className="text-base">Date posted</th>
                                <th className="text-base">Closing date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                jobs?.map(job => <JobeTable key={job._id} job={job} hendelDelete={hendelDelete}></JobeTable>)
                            }
                        </tbody>


                    </table>
                </div>
                :
                <h2 className="text-center text-4xl">You have no jobe</h2>
                }

            </div>
        </section>
    );
};

export default Myjobs;