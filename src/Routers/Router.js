import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home";
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
            }
        ]
    }
])