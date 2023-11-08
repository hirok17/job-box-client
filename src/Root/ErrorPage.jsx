import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error= useRouteError();
    console.log(error);
    return (
         <section className="flex justify-center mt-16">
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-semibold text-[##111111]">Hmm, that didn’t work.</h2>
                <h3 className="text-center text-lg">The page you are looking for cannot be found </h3>
                <img className="animate-pulse" src="https://i.ibb.co/wJyjqkx/img-404.png" alt="" />
                <Link to="/" className="btn text-white bg-[#007456] hover:bg-[#FF3811]">Go to home</Link>
            </div>
         </section>
    );
};

export default ErrorPage;