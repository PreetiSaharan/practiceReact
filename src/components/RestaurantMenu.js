//reusable component
//import {useEffect, useState} from "react"; // useEffect is named import
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
//import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    //const [resInfo, setResInfo] = useState(null); //default value null
    const {resId} = useParams(); // const params = useParams()- give the object having resId, so using object brackets- can extract the resId directly
    //console.log(resId);
    const resInfo = useRestaurantMenu(resId);
    /* //WITHOUT CUSTOM HOOK VERSION
    useEffect(()=> {
        fetchMenu();
    }, []); // useEffect takes 2 arg - 1st cb function & other is DA (here using empty DA as want to render it once)
    
    //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6548451093809&lng=77.1635189652443&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER - THE PART AFTER RESiD IS OPTIONAL- not required
    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API+resId);
    
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
    };
    */

    if(resInfo == null) return <Shimmer/>;// if not null then only go to thenext step
    
    const {name, avgRating, costForTwoMessage, cuisines}=resInfo?.cards[2]?.card?.card?.info; // optional chaining is imp
    
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log ("checking", resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    //<li>{itemCards[0].card.info.name}</li> // this is being iterated 

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("categories", categories);

    return ( 
        
        <div className="text-center">
            <h1 className ="font-bold  text-3xl my-4 p-4"> {name}</h1>
            <p className="font-bold">{avgRating} | {costForTwoMessage} | {cuisines.join(", ")}</p>
            {/*Categories Accordian */}
            {categories.map((category)=> (<RestaurantCategory key={category?.card?.card?.title} data= {category?.card?.card}/> ))
            }
        </div>
    )
};

export default RestaurantMenu;