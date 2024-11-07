import RestaurantCard, {withDiscountedLabel} from "./RestaurantCard";
import { useState , useEffect, useContext} from "react";
import Shimmer from "./Shimmer.js"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";

const Body = () => {
    //Local State Variable (scope- inside this component)
    //passing empty array- ie.e default value is empty array(can put null, etc if wanna put that as default)
    const [listOfRestaurants, setListOfRestaurants]= useState([]);
    const [searchText, setSearchText] = useState(""); // default value- empty string
    const [filteredRestaurants, setFilteredRestaurants]= useState([]);
    
    const RestaurantCardDiscounted =withDiscountedLabel(RestaurantCard); // withPromotedLabel is a higher order component here


    useEffect(()=>{
        fetchData();
    }, []);
    
    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6548451093809&lng=77.1635189652443&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const json = await data.json();
    //console.log(json);
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    const resList=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(resList); //optional chaining
    setFilteredRestaurants(resList)
    };

    console.log("body rendered everytime i type a letter in input box");
    //if my listOfRestaurants is empty, we will show spinning loader
    // called Conditional Rendering (either this or return that)
    /*
    if(listOfRestaurants.length ==0){
        return <Shimmer/>;
    }
    */
   
    const onlineStatus = useOnlineStatus();
    console.log("onlineStatus-"+ onlineStatus);
    if(onlineStatus==false){
        return(
            <h1>Looks like you are offline. Please check your internet connection</h1>
        )
    };

    const { loggedInUser, setUserName} =useContext(UserContext);
    
    return listOfRestaurants.length ==0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter flex">
                <div className="search m-2 p-4 flex items-center">
                    <input type="text" className="border border-solid border-black my-4 rounded-lg" value={searchText} 
                    onChange={(e)=>{
                    setSearchText(e.target.value);
                    }}/>
                    <button className=" mx-1  px-2  rounded-lg" onClick={()=>{
                        //filter the restaurants cards logic
                        //search
                        console.log(searchText);
                        const filteredRestaurants= listOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                
                        );
                        setFilteredRestaurants(filteredRestaurants);
                    }}><img className="w-9" src="https://cdn-icons-png.flaticon.com/128/9968/9968777.png"/></button>

                </div> 
                <div className = "search m-4 p-4 flex items-center">
                <button className=" m-2 px-4 shadow-lg bg-green-200 rounded-lg" 
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.2
                    );
                    setListOfRestaurants(filteredList);
                }}> 
                Top Rated Restaurants 
                </button>
                <div className=" m-4 p-4 flex items-center">
                <label>userName</label>
                <input className="border border-black px-3 m-2 rounded-lg"
                value ={loggedInUser} 
                onChange={(e)=> setUserName(e.target.value)}/>

                </div>
                
                </div>
               
            </div>
            <div className="flex flex-wrap">     
            {   
                filteredRestaurants.map((restaurant) => (
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                    {/*if restaurant is promoted then add promoted label to it*/
                    restaurant.info.aggregatedDiscountInfoV3 !== undefined? <RestaurantCardDiscounted resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}
                    
                </Link>
            ))
            }
          
            </div>

        </div>

    );

};

export default Body;