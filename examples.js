//------------------------MAP example----------------------------------------
const languages = ["CSS", "python", "java", "js", "react"];
const App = ()=>{
  return(
    <ul>{languages.map((language)=> <li>{language}</li>)}</ul>
  )
};
export default App;

//-----------------------------create counter with increment & decrement (USESTATE)------------------------------------
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


//---------------------SHOW MORE (map & useState) -------------------------------------------------------
import React, { useState } from 'react'
//import styled from 'styled-components'

const App = () => {
  const names =  ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"];
  const[showAll, setShowAll] = useState(false);
  const showAllFunction = ()=>{
    setShowAll(!showAll)
  }
  
  return(
    <div>
      <ul>
      {showAll? names.map((name)=> <li>{name}</li>): names.slice(0,3).map((name)=> <li>{name}</li>)}
      </ul>
      <button onClick={showAllFunction}> {showAll? "Show Less":"Show More"}</button>
    </div>
  )
  
}

export default App;

//------------------------Conditional rendering----------------------------------------------
{isLoggedIn ==false? <DisplayLoggedOut/> : <DisplayLoggedIn/>}

//---------------------------------using ref---------------------------------------------------------
const node = this.myCallRef. current;

//----------------------useState hook----------------------------------------------------
import {useState} from "react";
const[resList, setResList] = useState();

//--------------useEffect Hook--------------------------------------------------
import {useEffect} from "react";

useEffect (cbf, dependency);

//----------------------------------React Fragments-------------------------------
<React.Fragment>
  <h1> Hi my name is Preeti</h1>
  <p>This is my intro</p>
</React.Fragment>


//----------------------------------------------EXAMPLES---------------------------------------------------

//-------------------- EVENT HANDLER & useState------------------------------
const [counter, setCounter] = useState(0);
<button onClick={()=>{ setCounter (counter +1)}} ></button>

//---------------Context API - used in classComponents //DO LATER-----------------------------
const MyContext = React.createContext();
//parent component as - provider


//-------------------------------useContext Hook-------------------------------------
import React, { createContext, useContext } from "react";

//Create a Context
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

//------------------------------------PROPS-----------------------------------------
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

//----------------------------------PROPS passing -----------------------------------------
import React from "react";

const Parent = ()=>{
  const data = "hello world";
  return (
    <div>
      <Child data={data}/>
    </div>
  )
}

const Child = ({data})=>{
  return (
    <div>
      <p> this is the child data -- {data}</p>
    </div>
  )
}


export default Parent;
//------------------------------------Map - key id or key prop---------------------------------
const Body = ()=> {
  return (
    <div>
      {resList.map((res) => (
        <ResCard key={res.id} resData ={res}/>
      ))}
    </div>
  )
}


//----------------------------------USEEFFCT EX (useEffect)--------------------------------------
useEffect (()=>{fetchData()}, []);
const fetchData = async () =>{
  const data = await fetch("swiggyAPI");
}
const json = await data.json; 

//-------------------------------MAP, FILTER, REDUCE -----------------------------------------
import React from 'react'
//import styled from 'styled-components'

const users=[
  {firstName: "Akshay", lastName: "Kumar", age: "26"},
  {firstName: "Naz", lastName: "Kumar", age: "32"},
  {firstName: "Donald", lastName: "Trump", age: "80"},
  {firstName: "Melinda", lastName: "Trump", age: "80"},
  {firstName: "Don", lastName: "Ghosh", age: "80"},
  {firstName: "Sonal", lastName: "Saini", age: "29"}
]

//return full names (map)
// return age and it's count (reduce)
// return first name of all the people with age <30years (can chain filter & map)

//(can chain any of these)

const App = () => {

  const fullNames = users.map((user)=> user.firstName + " "+user.lastName);
  console.log(fullNames);

  const ageCount = users.reduce(function(acc, curr){
    if(acc[curr.age]){
      acc[curr.age] ++;
    }else {
      acc[curr.age]= 1
    }
    return acc;
  }, {})
  console.log(ageCount); 

  const firstName = users.filter((user)=> user.age < 30).map((x)=> x.firstName)
  console.log(firstName);

  const firstNameUsingReduce = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName); 
  }
  return acc; 
}, []);
  console.log(firstNameUsingReduce);
  
  const arr = [5,18,7,9,2,3];

  const doubleMap = arr.map((x)=> x*2);
  console.log(doubleMap);

  const oddFilter = arr.filter((x)=> x%2);
  console.log(oddFilter);

  const maxReduce = arr.reduce(function(max, curr){
    if(curr>max) max=curr;
    return max;
  },0);
  console.log(maxReduce);

  const sumReduce = arr.reduce((sum, curr)=>{
    sum=sum + curr;
    return sum;
  }, 0);
  console.log(sumReduce);
  
}

export default App;


//-----------------------------ACCORDIAN --------------------------------------------------
import React, {useState} from "react";

const Accordian =()=>{
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordian = (index)=>{
    setActiveIndex(activeIndex === index? null: index);
  }

  const accordianItems =[
    {
      title:"HTML", 
      content:"HTML is the standard markup language for documents designed to be displayed in a web browser."
      },
    {
      title: "CSS", 
      content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
      },
    {
      title: "Javascript", 
      content:"JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
      }
    ];

    return(
      <div>
      {accordianItems.map((item, index)=>(
        <div key={index}>
        <div onClick={()=>toggleAccordian(index)}>{item.title}</div>
        {activeIndex === index && (<div>{item.content}</div>)}
        </div>
      ))}
      </div>
    )
}

export default Accordian;


//----------------------------COUNTER (useState)--------------------------------------
import {useState} from "react";

function counter(){
  const [count, setCount] = useState(0);
  const increaseCounter =()=>{
    setCount(count+1);
  }
  return(
    <div>
    <button onClick={increaseCounter}>counter: {count}</button>
    </div>
  )
}

export default counter;


//----------------------------CONTACT FORM ----------------------------------------
/*
//import submitForm from './submitForm';
import {useRef} from "react";

export default function App() {
  const name= useRef(null);
  const email = useRef(null);
  const message = useRef(null);

  const submitForm = async(e)=>{
    e.preventDefault();

    const formData ={
      name: name.current.value,
      email: email.current.value,
      message: message.current.value
    }
     if(!formData) return;

    try{
    const response = await fetch("https://www.greatfrontend.com/api/questions/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)

    });
    if(!response.ok){
      throw new Error("submission failed")
    }
    alert("SUCCESS! your message has been successfully sent");
    name.current.value ="";
    email.current.value ="";
    message.current.value="";
  }catch(error){
    console.log("Error");
    a;lert("error encountered in submitting the form. Please Try again.")
  }

  }

  

  return (
    <div>
    <h2>Contact Us Form</h2>
    <form onSubmit= {submitForm}>
      <div>
      <input ref={name} type="text" placeholder="Name" />
      <input ref={email} type="text" placeholder="Email ID" />
      <textarea ref={message} placeholder="Message" />
      </div>
      <button type="submit"> Send</button>
    </form>
    </div>
  );
}
*/


import { useRef, useState, useEffect } from "react";

export default function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!formData) return; // Do nothing if there's no formData

    const submitFormData = async () => {
      try {
        const response = await fetch("https://www.greatfrontend.com/api/questions/contact-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }

        alert("Your message has been successfully sent!");

        // Clear form fields after successful submission
        if (nameRef.current) nameRef.current.value = "";
        if (emailRef.current) emailRef.current.value = "";
        if (messageRef.current) messageRef.current.value = "";
        setFormData(null); // Reset the formData state
      } catch (error) {
        console.error("Error submitting the form", error);
        setError("There was an error submitting your message. Please try again.");
      }
    };

    submitFormData();
  }, [formData]); // Trigger this effect when formData changes

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    setError(null); // Reset any previous error
    setFormData({
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Contact Us Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input ref={nameRef} type="text" placeholder="Name" required style={{ width: "100%", marginBottom: "10px" }} />
        </div>
        <div>
          <input ref={emailRef} type="email" placeholder="Email ID" required style={{ width: "100%", marginBottom: "10px" }} />
        </div>
        <div>
          <textarea ref={messageRef} placeholder="Message" required style={{ width: "100%", minHeight: "100px", marginBottom: "10px" }}></textarea>
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px" }}>Send</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}


//------------------------------ADD PROGRESS BAR------------------------------------------
import React, { useState } from "react";

const ProgressBarApp = () => {
  const [progressBars, setProgressBars] = useState([]);

  const addProgressBar = () => {
    setProgressBars([...progressBars, { id: Date.now() }]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={addProgressBar} style={{ marginBottom: "20px" }}>
        Add Progress Bar
      </button>
      <div>
        {progressBars.map((bar) => (
          <ProgressBar key={bar.id} />
        ))}
      </div>
    </div>
  );
};

const ProgressBar = () => {
  const progress = 50; // Static progress set to 50%

  return (
    <div
      style={{
        width: "100%",
        height: "20px",
        backgroundColor: "#e0e0e0",
        borderRadius: "10px",
        marginBottom: "10px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#76c7c0",
        }}
      ></div>
    </div>
  );
};

export default ProgressBarApp;


//----------------------------PAGINATION---------------------------------------------
import React, { useState } from "react";

const UserTable = () => {
  // User data
  const users = [
    { id: 1, name: "Emily Chen", age: 28, occupation: "Software Engineer" },
    { id: 2, name: "Ryan Thompson", age: 32, occupation: "Marketing Manager" },
    { id: 3, name: "Sophia Patel", age: 25, occupation: "Data Analyst" },
    { id: 4, name: "Michael Lee", age: 41, occupation: "CEO" },
    { id: 5, name: "Olivia Brown", age: 29, occupation: "Graphic Designer" },
    { id: 6, name: "Alexander Hall", age: 38, occupation: "Sales Representative" },
    { id: 7, name: "Isabella Davis", age: 26, occupation: "Teacher" },
    { id: 8, name: "Ethan White", age: 35, occupation: "Lawyer" },
    { id: 9, name: "Lily Tran", age: 30, occupation: "Nurse" },
    { id: 10, name: "Julian Sanchez", age: 39, occupation: "Engineer" },
    { id: 11, name: "Ava Martin", age: 27, occupation: "Journalist" },
    { id: 12, name: "Benjamin Walker", age: 42, occupation: "Doctor" },
    { id: 13, name: "Charlotte Brooks", age: 31, occupation: "HR Manager" },
    { id: 14, name: "Gabriel Harris", age: 36, occupation: "IT Consultant" },
    { id: 15, name: "Hannah Taylor", age: 24, occupation: "Student" },
    { id: 16, name: "Jackson Brown", age: 40, occupation: "Business Owner" },
    { id: 17, name: "Kayla Lewis", age: 33, occupation: "Event Planner" },
    { id: 18, name: "Logan Mitchell", age: 37, occupation: "Architect" },
    { id: 19, name: "Mia Garcia", age: 29, occupation: "Artist" },
    { id: 20, name: "Natalie Hall", age: 34, occupation: "Teacher" },
    { id: 21, name: "Oliver Patel", age: 38, occupation: "Software Developer" },
    { id: 22, name: "Penelope Martin", age: 26, occupation: "Writer" },
    { id: 23, name: "Quinn Lee", age: 35, occupation: "Entrepreneur" },
    { id: 24, name: "Rachel Kim", age: 30, occupation: "Dentist" },
    { id: 25, name: "Samuel Jackson", age: 42, occupation: "Lawyer" },
    { id: 26, name: "Tessa Hall", age: 28, occupation: "Graphic Designer" },
    { id: 27, name: "Uma Patel", age: 39, occupation: "Marketing Manager" },
    { id: 28, name: "Vincent Brooks", age: 36, occupation: "IT Consultant" },
    { id: 29, name: "Walter White", age: 41, occupation: "Engineer" },
    { id: 30, name: "Xavier Sanchez", age: 33, occupation: "Sales Representative" },
    { id: 31, name: "Yvonne Martin", age: 29, occupation: "Teacher" },
    { id: 32, name: "Zoe Lee", age: 27, occupation: "Data Analyst" },
    { id: 33, name: "Abigail Brown", age: 34, occupation: "Nurse" },
    { id: 34, name: "Caleb Harris", age: 38, occupation: "Business Owner" },
    { id: 35, name: "Diana Taylor", age: 31, occupation: "Event Planner" },
    { id: 36, name: "Eleanor Walker", age: 40, occupation: "CEO" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  const totalPages = Math.ceil(users.length / usersPerPage);

  // Get current users for the page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleUsersPerPageChange = (event) => {
    setUsersPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Reset to the first page when users per page changes
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users Data Table</h2>

      {/* Table */}
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{ marginRight: "10px" }}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>

        {/* Users Per Page Selector */}
        <div style={{ marginLeft: "20px" }}>
          <label htmlFor="usersPerPage">Users per page: </label>
          <select
            id="usersPerPage"
            value={usersPerPage}
            onChange={handleUsersPerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserTable;



