import React from "react";
import ReactDOM from "react-dom/client";

/*
// ### HOW TO WRITE HELLO WORLD IN ReactS

const heading = React.createElement("h1", {id:"headingId", xyz:"abc"}, "Hello World from React"); 

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
*/

/*
// ### HTML CODE for tag inside tag

<div id="parent">
    <div id=child1>
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2> // these h1 & h2 are siblings
    </div>
    <div id=child2>
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2> // these h1 & h2 are siblings
    </div>
</div>

*/

// REACT Code for above (tag inside tag)
// parent - then child - then tag
// siblings wether at tag level or at child level
// are put inside arrays 
// so, 3rd arg of createElement becomes an array of children


const parent= React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {}, "this is react learning" ),
        React.createElement("h2", {}, "I am h2 tag" )
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "I am h1 tag" ),
        React.createElement("h2", {}, "I am h2 tag" )
    ])
]);

console.log(parent);
// better way to write the above react code is to use JSX
// as above code is very complex

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);