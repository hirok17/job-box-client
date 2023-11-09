import {createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Contact from "../pages/contactPage/Contact";
import Login from "../pages/loginPage/Login";
import SignIn from "../pages/signinPage/SignIn";
import PrivetRout from "./PrivetRout";
import AddJobs from "../pages/addjobs/AddJobs";
import Myjobs from "../pages/Myjobs/Myjobs";
import MyBids from "../pages/mybids/MyBids";
import BidReq from "../pages/bidreq/BidReq";
import Details from "../pages/jobedetails/Details";
import ErrorPage from "../Root/ErrorPage";
import JobeUpdate from "../pages/jobeupdate/JobeUpdate";

const router =createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
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
            },
            {
                path:"/jobs/bid/:id",
                element:<Details></Details>,
                loader:({params})=> fetch(`https://job-box-server-chi.vercel.app/jobs/bid/${params.id}`)
            },
            {
                path:"/update/:id",
                element:<PrivetRout><JobeUpdate></JobeUpdate></PrivetRout>,
                loader:({params})=>fetch(`https://job-box-server-chi.vercel.app/update/${params.id}`)
            }
        ]
      }
      
]);
export default router;
