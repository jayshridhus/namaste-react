import { CDN_URL } from "../utils/constants" ;

const RestaruntCart =(props) =>{
    const { resData } = props;

    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      sla

    }=resData?.info

    return (
          <div className="m-4 p-4 w-48 h-83 bg-gray-200 rounded-lg hover:bg-gray-300">
               <img className="rounded-lg h-25 w-47" src={CDN_URL + cloudinaryImageId}></img>
               <div className="res-data">
                 <b className="font-bold py-4">{name}</b>
                <p>{cuisines.join(", ")} </p>
                <p>{avgRating} *</p>
                <p>{sla?.deliveryTime} Mins</p> 
              </div>
          </div>
    );
};

//higher order component
//Input -- Restarunt card ,,, output----Restarunt card promoted

export const withPromotedLabel=(RestaruntCart)=>{
  return (prop)=>{
    return (
             <div>
                <label className="absolute bg-black text-white m-2 py-1 px-2 rounded-lg">Open</label>
                <RestaruntCart {...prop}/>
             </div>
    );
  };
};

export default RestaruntCart;