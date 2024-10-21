// using props

import User from "./User";
import UserClass from "./UserClass";
const About =()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>Meet our Team</h2>
           

            <UserClass name={"Roopa class prop"} location={"sonipat class"}/> 
        </div>
    )
}

export default About;