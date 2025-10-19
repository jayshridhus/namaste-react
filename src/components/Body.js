import RestaruntCart from "./RestaruntCart";
import { use, useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {

  const [lstRes,setlstRes]=useState([]);
  const [searchText,setsearchText]=useState("");
  const [filteredRest,setFilteredRest]=useState([]);
  
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
        </div>
         </div>
        <div className="flex flex-wrap"> 
         {
            filteredRest.map((restaurants) =>(
              <RestaruntCart key={restaurants.info.id} resData={restaurants}/>
            )) }
        </div>
     </div>
    );
};

export default Body;
