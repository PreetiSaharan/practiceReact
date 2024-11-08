import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "../utils/cartSlice";

const Cart =()=>{
    const cartItems = useSelector((store)=> store.cart.items); // only need access to cart.items from store not entire store
    console.log("cartItems", cartItems);

    const dispatch = useDispatch();

    const handleClearCart = ()=> {
        dispatch(clearCart()); // dispatch an action(of clearCart)
    };

    return (
        <div className=" bg-green-100 p-4 m-4 font-semibold text-center">
            <h1>Let's see what's in your Cart!</h1>
            <button className="font-bold shadow-2xl rounded-lg bg-blue-300 w-20 h-10"
            onClick = {handleClearCart}
            >Clear Cart</button>
            {cartItems.length==0 && <h1>Cart is empty, Please add your favourite foood..</h1>} 

            
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
            
        </div>
    )
};

export default Cart;