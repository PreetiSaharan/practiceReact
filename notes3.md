# DOM Elements 
- like <div>, <h1>, <h2>, etc
similarly there are React Elements - 

to deal with browsers, we use ReactDOM
React.createElement - creates an object 
when do root.render - ReactDom TAKES this obj & converts it into h1 tag html and push it to the browser. it will REPLACE  everything inside root id element with whatever rendering

React.createElement - this is core React, very clumsy way to write html in react (browser tag)(not developer friendly)
so, fb developers created JSX (JS syntax which is easier to creat js elements)(JSX is NOT part of react) (JSX makes our life easier)

# JSX is NOT html in javascript
JSX  is diff syntax, html is diff, react is diff
JSX looks like html or looks like XML

JSX Is syntax, react element is object
JSX is not valid pure JS (JS Engine can't read it, Browser can't read it)(parcel transpiles the JS code before reaches to browser)
so, before render line, it's transpiled by Babel such that react/ browser can understand it(parcel dependency)
Babel is an open source JS compiler/ transpiler

react.create element gives React element (which is an obj)- which then converted to html element
JSX code is converted to React.createElement by Babel (transcompilation) (now react can understand it)
Babel also transpiles ES6 JS code which older browsers don't understand into something that they understand

JSX
attributes written in jsx, hyphens not used
If want to write JSX in multiple lines, you have to wrap it in parenthesis (round brackets) as babel needs to understand where jsx is starting and where it's ending (hence required to wrap it inside round brackets)

# REACT COMPONENTS
everything is a component in React
a header, footer, search bar, list of carts, etc are components
2 types of compo in react
1) Class based comp - the old way of writing code (nobody uses now)(uses class to write components)
2) Functional comp- the new way of writing components (uses JS functions to write components)

# What is a React functional comp?
just a normal JS function which returns some JSX code/ react element or multiple react elements
name the React functional comp starts with capital letter (starting in caps)- otherwise will get an error (ex- Heading not heading)


# React functional component Example

const HeadingComponent = () => {
    return <h1>this is functional component</h1>;
};

 const HeadingComponent = () => <h1>this is functional component</h1>;

const HeadingComponent = () => {
    <h1>this is functional component</h1>;
};


// so can remove return & curly parentheses ( all 3 are same)
// & if writingf in multiple lines can remomove return but shall put () as required to wrap them given using multiple lines, the tag this is returned (though removed the curly parenthesis & return keyword)
# arrow functions - cleaner way to write react functional component
inside JSX  code, using {} , can write any js code/ JS expression inside it

# Render
root.render(heading); [way to render react element, but react functional comp CAN NOT be rendered like this]
root.render(<HeadingComponent/>); [way to render react functional component as wrapping it](through this babel gets to know that it's a react functional component)


# JSX sanitizes the data - prevents crosssite scripting attacks
prevents malicious attacks - using curly braces inside React functional element ex- {data}

can write it as <Title/> or <Title></Title>
& can write it multiple number of times

Code is readable because using JSX

 