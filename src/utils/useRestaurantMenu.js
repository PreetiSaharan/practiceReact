
// writing custom hook (js function, what's i/p, o/p)

import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null); //default value null
    
    useEffect(()=> {
        fetchMenu();
    }, []); // useEffect takes 2 arg - 1st cb function & other is DA (here using empty DA as want to render it once)


    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    return resInfo;
};

export default useRestaurantMenu;