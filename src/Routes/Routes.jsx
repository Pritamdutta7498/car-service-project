import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'About',
            element:<About></About>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        },
        {
          path:'book/:id',
          element:<PrivetRoutes><Checkout></Checkout>,</PrivetRoutes>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<PrivetRoutes>
            <Bookings></Bookings>
          </PrivetRoutes>
        }
        
      ]
    },
  ]);
  export default router;