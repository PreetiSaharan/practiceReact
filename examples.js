/*
//Conditional rendering
{isLoggedIn ==false? <DisplayLoggedOut/> : <DisplayLoggedIn/>}

// using ref
const node = this.myCallRef. current;

// useState hook
import {useState} from "react";
const[resList, setResList] = useState();

//useEffect Hook
import {useeffect} from "react";

useEffect (cbf, dependency);

// React Fragments
<React.Fragment>
  <h1> Hi my name is Preeti</h1>
  <p>This is my intro</p>
</React.Fragment>

*/

// create counter with increment & decrement
import React, { useState } from 'react';
const App = () => {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <div className="buttons">
        <button onClick={handleClick1}> Increment </button>
        <button onClick={handleClick2}> Decrement </button>
      </div>
    </div>
  );
};
export default App;



////////////////////////////////////////////////////////////
// EXAMPLES

//// EVENT HANDLER & useState
const [counter, setCounter] = useState(0);
<button onClick={()=>{ setCounter (counter +1)}} ></button>

//// Context API - used in classComponents //DO LATER
const MyContext = React.createContext();
//parent component as - provider


/////useContext Hook
import React, { createContext, useContext } from "react";

// Create a Context
const MyContext = createContext("Default Value");

const ChildComponent = () => {
  const value = useContext(MyContext); // Consume context
  return <p>Context Value: {value}</p>;
};
// App - parent component
//MyContext.Provider: Provides the value "Hello, useContext!".
//useContext: Used in ChildComponent to access the provided value
const App = () => (
  <MyContext.Provider value="Hello, useContext!"> 
    <ChildComponent />
  </MyContext.Provider>
);

export default App;

//////////PROPS 
// Props PASSING (resname & cuisine are props)
<RestaurantCard 
  resName ="dominos"
  cuisine ="pizza"
/>
//Props Receiving
const RestaurantCard = (props) => {
  return (
    <div>{props.resName} </div>
  )
}
//or destructuring on the fly
const RestaurantCard = ({resName, cuisine}) => {
  return (
    <div>{resName}</div>
  )
}


/////////////Map - key id or key prop
const Body = ()=> {
  return (
    <div>
      {resList.map((res) => (
        <ResCard key={res.id} resData ={res}/>
      ))}
    </div>
  )
}


//////// USEEFFCT EX (useEffect)
useEffect (()=>{fetchData()}, []);
const fetchData = async () =>{
  const data = await fetch("swiggyAPI");
}
const json = await data.json; 


