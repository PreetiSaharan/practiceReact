// how props are passed (from About page) in functional components
/*const User = (props) =>{
    return (
    <div className="user-card">
        <h3>Name: {props.name}</h3>
        <h3> Location: Delhi</h3>
        <h3>Contact: preetisaharan97@gmail.com</h3>
    </div>
    );
};

*/

import {useState} from "react";

//Or destructure it on the fly // here props is received as an argument // multiple state variables
const User = ({name}) =>{
    const count = useState(0);
    const count2 = useState(2); 
    return(
        <div className="user-card">
        <h3>Count={count}</h3>
        <h3>Count2={count2}</h3>
        <h3>Name: {name}</h3>
        <h3> Location: Delhi</h3>
        <h3>Contact: preetisaharan97@gmail.com</h3>
    </div>
    )
}

export default User;
