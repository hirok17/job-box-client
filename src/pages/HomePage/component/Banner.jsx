import banner from '../../../assets/banner.png';
import banner2 from '../../../assets/image2.webp';
import banner3 from '../../../assets/img3.png';
import banner4 from '../../../assets/image4.webp';
import bg from '../../../assets/bg.png';

const Banner = () => {
    return (
        <section className="bg-[#F2F8F6]">
            <div className="max-w-[1200px] mx-auto py-20 px-4 ">
                <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
                    <div className='relative' style={{ backgroundImage: `url(${bg})` }}>
                        <img src={banner} className="w-full" />
                        <img className='absolute right-0' src={banner2} alt="" />
                        <img className='absolute top-0 left-0' src={banner2} alt="" />
                        <img className='absolute bottom-0 left-0' src={banner3} alt="" />
                        <img className='absolute top-[50%] animate-ping' src={banner4} alt="" />
                    </div>
                    <div className='space-y-5'>
                        <h2 className="text-lg font-semibold ">GET STARTED TODAY</h2>
                        <h1 className="text-4xl lg:text-6xl font-bold lg:leading-[72px]">Easy way to get <br />your <span className="text-[#007456]">dream jobs</span></h1>
                        <p className="text-xl">Fill your job in hours, not weeks. Search for free...</p>
                        <div className="join">
                            <div>
                                <div>
                                    <input className="input input-bordered join-item focus:outline-none" placeholder="Search job" />
                                </div>
                            </div>
                            <select className="select select-bordered join-item focus:outline-none">
                                <option disabled selected>Filter</option>
                                <option>Web development</option>
                                <option>Digital marketing</option>
                                <option>Graphics design</option>
                            </select>
                            <div className="indicator">   
                                <button className="btn text-white bg-[#005D45] hover:bg-[#005D45] join-item">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;