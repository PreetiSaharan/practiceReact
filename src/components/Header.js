import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [BtnNameReact, setBtnNameReact] = useState("Login"); // by default value - Login
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext); // UserContext - we have created this react Context
    console.log( "####", loggedInUser);

    //SUBSCRIBING  to the store using a SELECTOR
    const cartItems = useSelector((store)=> store.cart.items);

    return (
        <div className="flex justify-between bg-blue-50 shadow-md sm:bg-yellow-50 lg:bg-pink-50">
            <div className="logoContainer">
                <img className="w-28" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"> Online Status: {onlineStatus? "✅":"🔴" }</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart"> Cart ( {cartItems.length} items) <img className="w-10 pb-4" src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png"/></Link></li>
                    {/*<li className="px-4 font-bold"><Link to="/cart">{loggedInUser}</Link></li> */}
                    <li><button className="login-out-btn pb-5"
                    onClick={()=>{
                        BtnNameReact=="Login"? setBtnNameReact("Logout"): setBtnNameReact("Login");
                    }} >{BtnNameReact}</button></li>
                </ul>
            </div> 
        </div>
    );
};

export default Header;