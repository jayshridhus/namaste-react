import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Carts=()=>{

    const cartItems=useSelector((store)=>store.cart.items)

    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    };

    return (
    <div className="m-4 p-4">
    <div className="w-6/12 m-auto flex justify-between">
       <h1 className="w-3/12 m-auto font-bold text-2xl text-center">Cart</h1>

       <button className="m-2 p-2 bg-gray-300 rounded-xl" 
        onClick={handleClearCart}>Clear cart</button>
       
    </div>
    <div className="w-6/12 m-auto">
     {cartItems.length===0 && (
            <h1 className="p-4 m-4 font-bold text-center">cart is empty,add item in your cart..</h1>
        )}
       <ItemList items={cartItems}/>
    </div>
    </div>
    );
};

export default Carts;