import { Helmet } from "react-helmet";
import Banner from "./component/Banner";
import BasicTabs from "./component/BasicTabs";
import PostAJob from "./component/PostAJob";
import Step from "./component/Step";
     
const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Job Box | Find your dream job</title>
            </Helmet>
            <Banner></Banner>
            <BasicTabs></BasicTabs>
            <PostAJob></PostAJob>
            <Step></Step>
        </div>
    );
};

export default Home;