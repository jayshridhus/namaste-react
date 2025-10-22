import { useEffect, useState } from "react";
import  resList  from "../utils/mockData";
import RestarauntCategory from "./RestarauntCategory";

const RestarauntMenu = () =>{

  useEffect(()=>{
    fetchMenu();
  },[]);

  const [showIndex , setShowIndex]=useState(null);
  const {name,cuisines,costForTwoMessage}=resList[0]?.data?.cards[2]?.card?.card?.info;

  const categories= resList[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
        filter((c)=>c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")||[];

  console.log(categories);

  const fetchMenu= async ()=>{

        const apiUrl = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=560619&catalog_qa=undefined&submitAction=ENTER";

        const resp = await fetch(apiUrl);
        console.log("resp");
        
      };
        

    return (
        <div className="text-center">
            <h1 className="font-bold py-2 px-10 my-4 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage} </p>
           <div className="border-black"> {categories.map((category,index)=>
           (<RestarauntCategory 
            key={category?.card?.card?.title} 
            data={category?.card?.card}
            showItems={index===showIndex? true:false}
            setShowIndex={()=> setShowIndex(index)}
            />
            ))}
            </div>
        </div>
    );
};

export default RestarauntMenu;