import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantMenu from "./components/RestaurantMenu";

//COMPONENT COMPOSITION
const AppLayout = ()=> {
    return (
        <div className="app"> 
              <Header/>
              <Outlet/>
              {/** if path is "/", then it should have body component */}
              {/** if path is "/about", then below header, only About compo, etc */}
              <Footer/>
        </div>

    );  

};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>,
            },
    
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            }       
        ],
        errorElement: <Error/>,
    }]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

