import RestaruntCart, { withPromotedLabel } from "./RestaruntCart";
import { use, useEffect, useState,useContext } from "react";
import Shimmer from "./shimmer";
import UserContext from "../utils/UserContext";

const Body = () => {

  const [lstRes,setlstRes]=useState([]);
  const [searchText,setsearchText]=useState("");
  const [filteredRest,setFilteredRest]=useState([]);

  const RestaruantCardPromoted= withPromotedLabel(RestaruntCart);
  const {LoggedInUser,setUserName} = useContext(UserContext);

  useEffect(()=>{
  fetchData();
  },[]);

  const fetchData = async () =>{

        const resp = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204&lng=73.8567&collection=snacks");
        
          const json = await resp.json();
          const restaurants =
          json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setlstRes(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRest(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
   
  // if(lstRes.length===0)
  // {
  //   return <Shimmer/>;
  // }



    return lstRes.length===0 ? (<Shimmer/>) : (
     <div className="body">
        <div className="filter">
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black" value={searchText}
            onChange={(e)=> {setsearchText(e.target.value);
            }}
            ></input>
            <button className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={()=>
            {
              const filterResta=lstRes.filter(
              (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setlstRes(filterResta);
              setFilteredRest(filterResta);
            }
            }
            >Search</button>

          <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" 
          onClick={()=>{
           const  filteredlst=lstRes.filter((res)=>res.info.avgRating>4 );
            setFilteredRest(filteredlst);
          }}>
          Top Rated Restaruant
          </button>
          <label>User Name:</label>
          <input className="border border-black p-2"
           value={LoggedInUser}
           onChange={(e)=>setUserName(e.target.value)}
           ></input>

        </div>
         </div>
        <div className="flex flex-wrap"> 
         {
            filteredRest.map((restaurants) =>(
              // <RestaruntCart key={restaurants.info.id} resData={restaurants}/>
               restaurants.info.isOpen ? 
                <RestaruantCardPromoted key={restaurants.info.id} resData={restaurants}/>
                :<RestaruntCart key={restaurants.info.id} resData={restaurants}/>
              )
              ) }
        </div>
     </div>
    );
};

export default Body;
