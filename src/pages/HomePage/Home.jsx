import { Helmet } from "react-helmet";
import Banner from "./component/Banner";
import BasicTabs from "./component/BasicTabs";
     
const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>Job Box | Find your dream job</title>
            </Helmet>
            <Banner></Banner>
            <BasicTabs></BasicTabs>
        </div>
    );
};

export default Home;