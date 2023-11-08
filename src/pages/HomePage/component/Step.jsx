
const Step = () => {
    return (
        <section className="max-w-[1200px] mx-auto mt-10 pb-6 px-3">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                   <div>
                        <img className="w-[250px]" src="https://i.ibb.co/YTggLnX/image-home05-8.webp" alt="" />
                   </div>
                  <div className="absolute left-[50%] bottom-[20%]">
                     <img className="w-[250px]" src="https://i.ibb.co/F6Y9Kzx/image-home05-6.webp" alt="" />
                  </div>
                  <div className="mt-4">
                        <img className="w-[250px]" src="https://i.ibb.co/2thQZHB/image-home05-9.webp" alt="" />
                  </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mt-[100px]">Find a job using 3 easy steps</h2>
                    <ul className="steps steps-vertical text-2xl">
                        <li className="step step-primary">Search from wherever you are</li>
                        <li className="step step-primary">Pick & Filter from a curated list of jobs</li>
                        <li className="step">Go through the job details and apply easily</li>
                         
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Step;