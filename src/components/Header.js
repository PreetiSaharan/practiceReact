import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [BtnNameReact, setBtnNameReact] = useState("Login"); // by default value - Login
    
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
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