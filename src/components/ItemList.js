import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items})=> {
    console.log("itemCards - ", items);
    
    const dispatch = useDispatch();
    const handleAddItem =(item)=>{
        // Dispatch an action
        dispatch(addItem(item)); // here whatever i pass to addItem is my action.payload -i.e. which goes to the reducer function in Cart slice

    }
    return(
        <div>
            {items.map((item)=> (
                <div key={item.card.info.id} className="m-2 p-2 border-b-2 border-gray-300 text-left "> 
                    <div className="pb-2 flex justify-between">
                        <div className="w-9/12">
                            <div className="py-2 hover:font-semibold">
                                <span>{item.card.info.name}</span>
                                <span>{" "} - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                            </div>
                            <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>
                        <div className="w-3/12 ">
                            <div className="absolute">
                                <button className="px-4 py-1 bg-white rounded-lg shadow-xl mx-7 mt-20 text-emerald-600 font-bold hover:bg-gray-200" onClick={()=> handleAddItem(item)}> ADD</button>
                            </div>
                            <img src= {CDN_URL + item.card.info.imageId}/>
                            
                        </div>
                    </div>
                    
                </div>))}
            
        </div>
    )
}

export default ItemList;
