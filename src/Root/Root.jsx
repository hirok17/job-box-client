import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

 

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div>
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;