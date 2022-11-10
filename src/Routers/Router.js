import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Pages/Blog/Blog";
import Error from "../Components/Pages/Error/Error";
import Gallery from "../Components/Pages/Gallery/Gallery";
import Home from "../Components/Pages/Home/Home";
import AddService from "../Components/Pages/Services/AddService/AddService";
import Service from "../Components/Pages/Services/Service/Service";
import Services from "../Components/Pages/Services/Services";
import Login from "../Components/UserInfo/Login/Login";
import Signup from "../Components/UserInfo/Signup/Signup";
import UpdateUser from "../Components/UserInfo/Update/UpdateUser";
import User from "../Components/UserInfo/User/User";
import Main from "./Main/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/user',
                element:<User></User>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:'/update-user',
                element:<UpdateUser></UpdateUser>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:"/services/:id",
                loader: ({params}) => fetch(`https://photo-server-peach.vercel.app/services/${params.id}`),
                element:<Service></Service>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            },
            {
                path:'/add-service',
                element:<AddService></AddService>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'*',
                element:<Error></Error>
            }
        ]
    }
])