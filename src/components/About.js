// using props

import User from "./User";
import UserClass from "./UserClass";
import React from "react"; // import {Component} from "react";

//Class Based Compo (cbc)
class About extends React.Component{
    constructor(props){
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent CompoDidMount");
    }

    render(){
        console.log("Parent Render");
        return(
            <div className="bg-green-100 p-5 my-10">
               
                <h1 className="text-center font-bold text-lg">All you need to know ABOUT US..</h1>
                <h3 className="font-bold text-center text-teal-600">Meet our Amazing Team!!</h3>
            
                <div className="flex flex-wrap">
                    <UserClass name={"Roopa"} location={"sonipat class"}/> 
                    <UserClass name={"Elon Musk"} location={"USA"}/>
                    <UserClass name={"Elon Musk class prop"} location={"USA class"}/>
                    <UserClass name={"Elon Musk class prop"} location={"USA class"}/>
                    <UserClass name={"Elon Musk class prop"} location={"USA class"}/>
                </div>
            </div>
        )
    }

}

    /*
    render(){
        console.log("Parent Render");
        return(
            <div>
            <h1>About</h1>
            <h2>Meet our Team</h2>
            <UserClass name={"Roopa class prop"} location={"sonipat class"}/> 
            <UserClass name={"Elon Musk class prop"} location={"USA class"}/>
            </div>
        )
    }

}
*/
/* Functional compo

const About =()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>Meet our Team</h2>
            <UserClass name={"Roopa class prop"} location={"sonipat class"}/> 
        </div>
    )
}
*/

export default About;