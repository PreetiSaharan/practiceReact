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
            <div>
            <h1>About</h1>
            <h2>Meet our Team</h2>
            <UserClass name={"Roopa class prop"} location={"sonipat class"}/> 
            </div>
        )
    }

}

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