import { CDN_URL } from "../utils/constants"; //NAMED IMPORT
import UserContext from "../utils/UserContext";
import {useContext} from "react";

//props.resName is a JS object ( to put JS we need to put it in {})
//Restaurant Card (reusable)(so, create separate component)
const RestaurantCard= (props) => {
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo} = resData?.info;

    return (
        <div className="m-4 p-4 w-[250px] h-[530px] bg-gray-100 rounded-lg hover:bg-gray-300">
            <img className="res-logo h-56" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
            <h3 className="py-4 text-lg font-bold ">{name}</h3> 
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{resData?.info?.sla?.deliveryTime} minutes</h5>
            <h5 className="font-bold"> User: {loggedInUser}</h5>
        </div>

    );

};


//Writing HIgher Order Component
// will take restaurant Card as input and will returned enhanced version of it

//Input= RestaurantCard, Return RestaurantCardPromoted function/component

 export const withDiscountedLabel = (RestaurantCard) =>{

    return(props)=>{
        return (
            <div>
                <label className="absolute bg-orange-600 text-white font-semibold m-2 p-1 rounded-md">Upto 40% OFF</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;