import { CDN_URL } from "../utils/constants"; //NAMED IMPORT

//props.resName is a JS object ( to put JS we need to put it in {})
//Restaurant Card (reusable)(so, create separate component)
const RestaurantCard= (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo} = resData?.info;

    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3> 
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{resData?.info?.sla?.deliveryTime} minutes</h5>
        </div>

    );

};

export default RestaurantCard;