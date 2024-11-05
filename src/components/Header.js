import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [BtnNameReact, setBtnNameReact] = useState("Login"); // by default value - Login
    const onlineStatus = useOnlineStatus();
    
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
                    <li className="px-4"><Link to="/cart">Cart</Link></li>
                    <button className="login-out-btn"
                    onClick={()=>{
                        BtnNameReact=="Login"? setBtnNameReact("Logout"): setBtnNameReact("Login");
                    }} >{BtnNameReact}</button>
                </ul>
            </div> 
        </div>
    );
};

export default Header;