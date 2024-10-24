import RestaurantCard from "./RestaurantCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer.js"
import { Link } from "react-router-dom";

const Body = () => {
    //Local State Variable (scope- inside this component)
    //passing empty array- ie.e default value is empty array(can put null, etc if wanna put that as default)
    const [listOfRestaurants, setListOfRestaurants]= useState([]);
    const [searchText, setSearchText] = useState(""); // default value- empty string
    const [filteredRestaurants, setFilteredRestaurants]= useState([]);
    
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
   

    return listOfRestaurants.length ==0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={(e)=>{
                    setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                        //filter the restaurants cards logic
                        //search
                        console.log(searchText);
                        const filteredRestaurants= listOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                
                        );
                        setFilteredRestaurants(filteredRestaurants);
                    }}>search</button>

                </div>
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.2
                    );
                    setListOfRestaurants(filteredList);
                }}> 
                Top Rated Restaurants 
                </button>
            </div>
            <div className="res-container">
                
               
            {   
                filteredRestaurants.map((restaurant) => (
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                    <RestaurantCard  resData={restaurant}/>
                </Link>
            ))
            }
          
            </div>

        </div>

    );

};

export default Body;