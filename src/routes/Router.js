import { createBrowserRouter } from "react-router-dom";
import Home from "../components/HomePage/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import Services from './../components/Services/Services';
import ServiceDetails from './../components/Services/ServiceDetails';
import AddService from "../components/AddService/AddService";
import Blog from "../components/Blog/Blog";
import PrivateRoute from "../private/PrivateRoute";
import AddReview from './../components/AddReview/AddReview';
import MyReviews from "../components/MyReviews/MyReviews";
import UpdateReview from "../components/UpdateReview/UpdateReview";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch(`https://service-website-server.vercel.app`)
            },
            
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch(`https://service-website-server.vercel.app/services`)
            },
           

            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`https://service-website-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/add',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            
            {
                path:'/review/:id',
                element:<AddReview></AddReview>,
                loader:({params})=>fetch(`https://service-website-server.vercel.app/services/${params.id}`)
            },
            {
                path:'/myreviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:'/updateReview/:id',
                element:<UpdateReview></UpdateReview>,
                loader:({params})=>fetch(`https://service-website-server.vercel.app/reviewss/${params.id}`)
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