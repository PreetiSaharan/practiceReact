import React, { Suspense, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy } from "react";
const Grocery = lazy(()=>import("./components/Grocery"));
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


//COMPONENT COMPOSITION
const AppLayout = ()=> {

    const [userName, setUserName]= useState();

    //Authentication
    useEffect(()=> {
        //Make an API call & send userName & password
        // got below data from API
        const userData ={
            name: "Preeti Saharan"
        };
        setUserName(userData.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
                <div className="app"> 
                    <Header/>
                    <Outlet/>
                    {/** if path is "/", then it should have body component */}
                    {/** if path is "/about", then below header, only About compo, etc */}
                    <Footer/>
                </div>
            </UserContext.Provider>
        </Provider>
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
                path: "/grocery",
                element: (
                <Suspense fallback = {<h1>Loading...</h1>}>
                    <Grocery/>
                </Suspense>
                )
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

