//reusable component
import {useEffect, useState} from "react"; // useEffect is named import
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null); //default value null
    const {resId} = useParams(); // const params = useParams()- give the object having resId, so using object brackets- can extract the resId directly
    //console.log(resId);

    useEffect(()=> {
        fetchMenu();
    }, []); // useEffect takes 2 arg - 1st cb function & other is DA (here using empty DA as want to render it once)
    
    //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6548451093809&lng=77.1635189652443&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER - THE PART AFTER RESiD IS OPTIONAL- not required
    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API+resId);
    
    const json = await data.json();
    //console.log(json);
    setResInfo(json.data);
    };

    if(resInfo == null) return <Shimmer/>;// if not null then only go to thenext step
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log (itemCards);

    const {name, avgRating, costForTwoMessage, cuisines}=resInfo?.cards[2]?.card?.card?.info; // optional chaining is imp
    
    //<li>{itemCards[0].card.info.name}</li> // this is being iterated 

    return ( 
        
        <div className="menu">
            <h1> {name}</h1>
            <p>{avgRating} | {costForTwoMessage} | {cuisines.join(", ")}</p>
            
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key= {item.card.info.id}>{item.card.info.name}- Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                    ))}
                
            </ul>
        </div>
    )
};

export default RestaurantMenu;