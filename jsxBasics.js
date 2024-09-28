import React from "react";
import ReactDOM from "react-dom/client";

// React Element
//React Element is an object // when we renders this React element ( object), html element is created
//React element using core react

/*
const heading =React.createElement("h1", {id:"headingId"},"wow this is me" );
console.log("heading "+ heading);
*/

// JSX Tag
// React element using JSX
const jsxHeading = (<h1 className="head" tabIndex="1">
    wow this is h1 tag using JSX
    </h1>); // for single line jsx, not require round brackets
console.log("jsxHeading "+ jsxHeading);


const elem =<span> React element - damn</span>

// React functional component // can put double nested tags also
const Title=() => (
    <h1 className="head" tabIndex="7"> 
    {elem}
    learning React
    </h1>
)

const data=9090;
// through this we can put component inside component- this is called 
//Component composition (babels understands this and transcompile in html)
//inside JSX  code, using {} , can write ANY js code inside it

// these 3 ways of using Title is same - completely same (so can call it in any of the below ways)
const HeadingComponent = () => (
    <div id="container">
        <Title/>
        {Title()}
        <Title></Title>
        {data}
        <h1 className="heading"> hey this is multiple tags as React func comp</h1>
    </div>
);



/*
# REACT FUNCTIONAL COMPONENT

const HeadingComponent = function(){
    return (
        <h1>
        this is functional component
        </h1>
        );
    };
};

const HeadingComponent = () => {
    return <h1>this is functional component</h1>;
};

const HeadingComponent = () => <h1>this is functional component</h1>;

const HeadingComponent = () => (
    <h1>this is functional component</h1>;
);
*/

// so can remove return & curly parentheses ( all 3 are same)
// & if writingf in multiple lines can remomove return but shall put () as required 
//to wrap them given using multiple lines

const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(jsxHeading);
root.render(<HeadingComponent/>);