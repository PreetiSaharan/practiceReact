import ItemList from "./ItemList";
//import { useState } from "react";

const RestaurantCategory= ({data, showItems, setShowIndex}) =>{
    console.log("props passed into RestaurantCategory",data,"and ", data.title);

    const handleClick = () => {
        setShowIndex();

    };

    //handleclick function - will show and hide (accordian- collapse etc)
    //create state Variable (using useState)- to show & collapse

    /* // when in uncontrolled state
    const [showItems, setShowItems] = useState(false); // byDefault false - means accordian in collapsed state

   
    const handleClick = () =>{
        setShowItems(!showItems); // if showItems true- setShowItems make it false and vice-versa
    }
    */

    return(
        <div>
        {/* Accordian Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer mb-4" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇</span>
            </div>
                {/* Accordian Body */}      
                { showItems && <ItemList items={data.itemCards}/>}
        </div>
       

        
        </div>
    )
}

export default RestaurantCategory;