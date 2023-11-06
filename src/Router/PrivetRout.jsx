import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRout = ({children}) => {
    const {user, loading} =useContext(AuthContext);
    const location =useLocation();
    console.log(location);
    if(loading){
        return <span className="loading loading-infinity loading-lg absolute top-[35%] left-[35%]"></span>;
    }
    if(user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to="/login" replace></Navigate> 
};

export default PrivetRout;