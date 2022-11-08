import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
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
            }
        ]
    }
])