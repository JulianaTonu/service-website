import { createBrowserRouter } from "react-router-dom";
import Home from "../components/HomePage/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import Services from './../components/Services/Services';
import ServiceDetails from './../components/Services/ServiceDetails';
import AddService from "../components/AddService/AddService";
import Blog from "../components/Blog/Blog";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch(`http://localhost:5000`)
            },
            
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch(`http://localhost:5000/services`)
            },
           

            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/add',
                element:<AddService></AddService>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])