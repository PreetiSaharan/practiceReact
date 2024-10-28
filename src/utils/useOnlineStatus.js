
// don't need any i/p (means don't need any info from caller(compo where this hook used))

import { useState, useEffect } from "react";
const useOnlineStatus =()=>{
    
    //state variable - keeping track of onlineStatus, if online return true, if offline, return false
    const [onlineStatus, setOnlineStatus]= useState(true); //default - true- internet workin
    
    //check if online through event listener
    //since want to call event listener only once = empty da in useEffect hook
    useEffect(() =>{
        window.addEventListener("offline", () =>{ //superpower given by window/browser
            // whenever value becomes online, update the value with false- update through setOnlineStatus
            setOnlineStatus(false);
            console.log("false onlineStatus is called");
        });
        window.addEventListener("online", () =>{ 
            setOnlineStatus(true);
            console.log("false onlineStatus is called");
        });
         
    }, []);

    return onlineStatus; // will return boolean
};

export default useOnlineStatus;