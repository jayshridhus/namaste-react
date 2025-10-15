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
          <div className="res-cart">
               <img className="image-self" src={CDN_URL + cloudinaryImageId}></img>
               <div className="res-data">
                 <b>{name}</b>
                <p>{cuisines.join(", ")} </p>
                <p>{avgRating} *</p>
                <p>{sla?.deliveryTime} Mins</p> 
              </div>
          </div>
    );
};

export default RestaruntCart;