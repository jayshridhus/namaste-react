import { LOGO_URL } from "../utils/constants";
import { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";

const Header=()=>{
    const [loginBtnName,setLoginBtnName] = useState("Login");

 const onlineStatus= useOnlineStatus();   

 const {LoggedInUser} = useContext(UserContext);

    return (
    <div className="flex justify-between bg-gray-100 shadow-lg sm:bg-green-100 lg:bg-pink-100">
        <div className="logo-container">
            <img className="w-52 h-32" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
             <ul className="flex p-4 m-4 content-center">
                <li className="px-4">Is Online: {onlineStatus===true ? "🟢": "🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4">Cart</li>
                <li className="px-4"> <button className="px-4 py-1 bg-green-100 rounded-lg"
                    onClick={()=>
                    {
                        loginBtnName==="Login" ?
                    setLoginBtnName("Logout"):
                    setLoginBtnName("Login");
                    }}>
                        {loginBtnName}
                        </button>
                </li>
                <li className="px-4 font-bold">{LoggedInUser}</li>
             </ul>
        </div>

           

    </div>
    );
};

export default Header;