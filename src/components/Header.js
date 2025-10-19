import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";

const Header=()=>{
    const [loginBtnName,setLoginBtnName] = useState("Login");

 const onlineStatus= useOnlineStatus();   


    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
             <ul>
                <li>Is Online: {onlineStatus===true ? "🟢": "🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
             </ul>
        </div>

            <button className="btn-Login"
             onClick={()=>
             {
                loginBtnName==="Login" ?
              setLoginBtnName("Logout"):
              setLoginBtnName("Login");
             }}>
                   {loginBtnName}
                </button>

    </div>
    );
};

export default Header;