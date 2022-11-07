import { createBrowserRouter } from "react-router-dom";
import Home from "../components/HomePage/Home";
import Register from "../components/Register/Register";
import Main from "../layout/Main";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])