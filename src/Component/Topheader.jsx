import icon from '../assets/ringbell.svg';
const Topheader = () => {
    return (
        <section className='bg-black text-[#DDDDDD] py-1 px-2'>
            <div className='max-w-[1200px] mx-auto  flex flex-col lg:flex-row justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <img src={icon} alt="" />
                    <p>Subscribe for job alerts by email !!</p>
                </div>
                <div>
                    <p>Email: admin@jobbox.com</p>
                </div>

            </div>
        </section>
    );
};

export default Topheader;