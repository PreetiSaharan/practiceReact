// creating user as class based component  (User.js is user as functional component)
// how to receive prop passed in About page to UserClass
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
    
    /*
        this.state ={
            count: 0, // that's how we initialize state variable in class based compo
            count2:2,
        };
    */
        this.state={
            userInfo:{
                name:"dummy",
                location:"default"
            },
        };
        console.log(this.props.name + "Child Constructor");
    }
    
    async componentDidMount(){
        console.log(this.props.name + "Child ComponentDidMount");
        const data = await fetch("https://api.github.com/users/PreetiSaharan");
        const json = await data.json();
        

        this.setState({
            userInfo: json,
        });
        
        console.log(json);
        console.log("userinfo" + this.state.userInfo);
        
        }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("component Will Unmount");
    }


    render(){
        console.log(this.props.name + "Child Render");
    

        const {name, location, avatar_url} = this.state.userInfo;
        

        console.log(name);

        return (
            <div className="user-card border-solid w-72 h-80 m-4 p-4 bg-blue-50 rounded-lg">
                <img src= {avatar_url} />
                <h3> Name: {name}</h3>
                <h3> Location: {location}</h3>
                <h3>Contact: preeti@gmail.com</h3>
            </div>
            );
    }
    /*
    render(){
        const {name, location} = this.props; //destructuring // if don't destructure here, gotta use - this.props.name etc
        const {count, count2} = this.state; // destructed // otherwise - this.state.count to be used

        console.log(this.props.name + "Child Render");

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

    */
}



export default UserClass;