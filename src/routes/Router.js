import { createBrowserRouter } from "react-router-dom";
import Home from "../components/HomePage/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import Services from './../components/Services/Services';

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
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch(`http://localhost:5000/services`)
            },

            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])