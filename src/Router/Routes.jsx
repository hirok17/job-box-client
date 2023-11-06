import {createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Contact from "../pages/contactPage/Contact";
import Login from "../pages/loginPage/Login";
import SignIn from "../pages/signinPage/SignIn";
import PrivetRout from "./PrivetRout";
import AddJobs from "../pages/addjobs/AddJobs";
import Myjobs from "../pages/AboutPage/Myjobs/Myjobs";
import MyBids from "../pages/mybids/MyBids";
import BidReq from "../pages/bidreq/BidReq";

const router =createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
            {
                path:"/addjobs",
                element:<PrivetRout><AddJobs></AddJobs></PrivetRout>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<SignIn></SignIn>
            },
            {
                path:"/myjobs",
                element:<PrivetRout><Myjobs></Myjobs></PrivetRout>,
                 
            },
            {
                path:"/mybids",
                element:<PrivetRout><MyBids></MyBids></PrivetRout>
            },
            {
                path:"/bidrequest",
                element:<PrivetRout><BidReq></BidReq></PrivetRout>
            }
        ]
      }
      
]);
export default router;
