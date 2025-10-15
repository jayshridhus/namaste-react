import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header=()=>{
    const [loginBtnName,setLoginBtnName] = useState("Login");
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
             <ul><li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
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