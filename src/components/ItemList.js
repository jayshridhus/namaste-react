import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList=({ items })=>{
    console.log(items);

    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
       //dispatching an action
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 border border-gray-200 border-b-1 text-left flex justify-between">
           <div className="w-2/12 px-2">
           <div className="absolute">
             <button className="mx-5 px-1 shadow-lg bg-gray-200 rounded-lg"
             onClick={()=>handleAddItem(item)}>
                Add +</button>
           </div>
           <img src={CDN_URL + item.card.info.imageId}></img>
          
           </div>
        <div className="w-10/12 px-2">
        <div className="py-2"> 
            <span >{item.card.info.name}</span>
            <span>- ₹ {item.card.info.price/100}</span>
        </div>
        <p className="text-xs">{item.card.info.description}</p>
        </div>
        </div>
            ))};
    </div>
    );
};

export default ItemList;