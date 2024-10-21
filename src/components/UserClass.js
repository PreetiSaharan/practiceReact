// creating user as class based component  (User.js is user as functional component)
// how to receive prop passed in About page to UserClass
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            count: 0, // that's how we initialize state variable in class based compo
            count2:2,
        };
    }
    
    render(){
        const {name, location} = this.props; //destructuring // if don't destructure here, gotta use - this.props.name etc
        const {count, count2} = this.state; // destructed // otherwise - this.state.count to be used

        return (
            <div className="user-card">
                <h3> Count= {count}</h3>
                <button
                onClick={()=>{ 
                    //Never update state variables directly
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 +1,
                    });
                }}>
                    Count Increase
                </button>
                <h3> Count2= {count2}</h3>
                <h3>Name: {name}</h3> 
                <h3> Location: {location}</h3>
                <h3>Contact: roopaSingh7@gmail.com</h3>
            </div>
            );
    }
}

export default UserClass;