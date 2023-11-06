import { Helmet } from "react-helmet";
import Banner from "./component/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Job Box | Find your dream job</title>
            </Helmet>
            <Banner></Banner>
        
        </div>
    );
};

export default Home;