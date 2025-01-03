# Class based components (older way of writing codes)
Lets use class based components in ABOUT us page.
User.js - functional Component, USerClass - class based component

Functional component is nothing but a  normal javascript function
Class Component is nothing but a  normal Javascript class


# How to create a class based component

class keyword before the name of class

class UserClass extends React.Component{} // here this extends React.Component tells react that it's a class based component

we have render method inside class component
& this render method will return a piece of JSX which will be displayed on the UI

class UserClass extend React.Component}{
    render (){
        return(
            <div> 
            <h1> this is class component</h1>
            </div>
        )
    }
}


# Difference between Functional & Class based component
Functional component- a function which returns a piece of JSX
Class based component - a class which has a render method which returns a piece of JSX  ( & this JSX is converted top html & displayed to the webpage)

# React.Component
is a class given to us by React and UserClass is inherting some properties from it. since given to us by React- means we need to import it from somewhere
React.Component will come from react package

# Class based component
imported and exported same like functional component

# Props in  Class based component
passed the same way
Received - in UserClass we will create a constructor and this constructor will receive the props. Inside constructor we will write - super(props) - keyword used

we get prop in functional component as an argument
in class compo - we get prop inside constructor and have to use super(props)- if doesn't write - will throw error
// have to use this. - to use that prop received 
using "this" (this.props.name) - can access the prop anywhere in the class

// creating user as class based component  (User.js is user as functional component)
// how to receive prop passed in About page to UserClass
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        console.log(props);
    }
    
    render(){
        return (
            <div className="user-card">
                <h3>Name: Roopa</h3>
                <h3> Location: Noida</h3>
                <h3>Contact: roopaSingh7@gmail.com</h3>
            </div>
            );
    }
}

export default UserClass;


# summarise - how to get/ receive props from parent component inside class component
// whenever the new instance of class is created, the constructor is called - props is received here, must use super(props) - now can use the props anywhere in the class

can pass multiple things from parent compo - all those combine in a single object which gets passed in the props in UserClass / User 

# Creating state variables in class based component (& update the UI when state changes)
In functional compo - we use hook - useState (hooks- new concept)

In class based compo - no hooks
 State was created whenever a class instance was created

 # Class Instance- creating instance of a class
 rendering a functional component - means- FC loads - that means mounting that FC on the wenpage or calling or invoking that Fc
 Creating an instance of class - means loading a class based compo (cbc)
 i.e. Loading a cbc on the webpafe means creating a new instnace of that class (& giving it some props)

 so whenevr you create an instance of a class - constructor is called & this, this is the best place to receive props and to create state variables

 Earlier - used to create state inside constructor uising - this.state (state is a reserved word here) state - is a big object which contains all the state variables - so if multiple state variables to be created inside a cbc, done in same state object

 # In functional compo - bts react uses 1 object to keep all the state variables ( like in cbc)
  but in fc - syntax- const count1 = useState(0); const count2 = useState(2 );

# How to update the state variables 
FC- setCount
Cbc - 

onClick handler takes a callback function
 
cannot update state variables directly i.e. putting equal to value 
this.state.count = this.state.count++ ; // this is WRONG

// NEVER DIRECTLY UPDATE YOUR STATE VARIABLES

react gives you access to imp func - this.setState - and  can use this anywhere inside my cbc
and will pass an object inside this.setState - this obj will contain the updated value of state variables

this.setState{
    count: this.state.count+1
}

whenever the this.setState updates the state var - react rerenders the component- & changing the count value

if this.state has multiple state vars - but we are updating value of only 2 state vars through this.setState- then react doesn't touch other state vars, only updates those which are updated/ passed in setState

this.state ={
    count: 0,
    count1:1,
    count2:3,
    count4:4
}

this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 +1,
                    });
so only count & count2 val updated. other state vars are not even touched by react

when onclick button is clicked - react will find the diff - reconciliation process and only updates those state variables which are put inside setState and rerender the component


# LIFECYCLE OF react class based component (cbc)
# how this cbc is loaded/ mounted on webpage
# LIFECYCLE METHODS

whwnever about us page/ component is rendered onto the webpage or mounted onto the webpage, it basically starts rendering this jsx, when encounter uUserClass component - it will start loading UserClass - an instance of UserClass (cbc) is created - Constructor is called- the first thing when a class loads ( class loads means a new instance od that class is created)

Once constructor is called - then render is called - that's how this class is initiated

Methods of - classBasedcomponent (cbc)- constructor(), render(), componentDidMount()

when cbc is loaded - 1st - constructor method is called, then render - once it's mounted on the webpage,. then componentDidMount method is called

ABOUT component (cbc) - parent compo
USERCLASS (cbc) - child compo
so- 1st parent compo - constructor called, then its render then constructor of child compo, then render of child compo.

if componentDidMount also there in both the parent and child cbc

ORDER of calling lifecycle methods of parent & child (try console.log to see this sequence in code)
parent constructor
parent render
child constructor
child render
child componentDidMount
parent componentDidMount (once the child is mounted successfully i.e the parent is rendered completely (render method finished) i.e. the parent is fully mounted - hence the parent componentDidMount is called)

# USECASE Of componentDidmount - to make API calls
# Why api call made inside compoDidMount

in functional compo- we make api call in useEffect - once we load our compo then API call is made ( such that the react doesn't wait for api to return the results and show blank page)

Fc React- quicklyrender the compo once - make Api call - then fill the data(i.e. rerender)  (not wait for api to return data to render the compo - show blank page for too long)

Similarly in cbc - want to quickly render thr component, then make the api call and fill the data (i.e. rerender the compo) - that's why put api call inside comp

 # order of life cycle methods if there are 2 instances of cbc (UserClass) passed to About

 (can use same UserClass(cbc) but add diff props)

 ORDER
Parent Constructor 
Parent Render
Roopa class propChild Constructor 
Roopa class propChild Render 
Elon Musk class propChild Constructor 
Elon Musk class propChild Render 
Roopa class propChild ComponentDidMount 
Elon Musk class propChild ComponentDidMount
Parent CompoDidMount

# REACT is fast because
-it has 2 phases in which it work - render phase  & commit phase
sequence in which called (lifecycle)
1) Constructor method
2) Render method
3) React Updates DOM & refs
4) componentDidMount
(1&2 - RENDER PHASE, 3&4- COMMIT PHASE)

every child, parent, component - goes through this lifecycle

# How to make api call inside cbc
make componentDidMount as async
//returns promise that's why use - await
async componentDidMount (){
    const data = await fetch("https://api.github.com/users/PreetiSaharan");
    const json =  data.json();
}


# entire SEQUENCE IN USERCLASS
userclass callled
1st constructor is called (which has the state )
render called - here 1st state having dummy data called (so Dummy data is 1st loaded in REACT DOM till api calls and returns result)
component did mount called
here api call happens (inside componentDidMount)
till now - mounting cycle (now over when componenent was once rendered 1st)
now updating cycle starts
then setState called (updating state)
updates the userinfo (state varibale)
after that once again render happens -REACT will update the DOM with the updated values
then componentDidUpdate is called - called at the end. 
now our update cycle ends


# SEQUENCE of whole LIFECYCLE METHOD (Mounting cycle --> Updating --> Unmounting cycle)
constructor(dummy data)
render(dummy)
      <HTML Dummy>
 componnentDidMount
    <API Call>
    <this.setState> -- state variable is updated (using differential algo - reconciliation process)

Now UPDATE cycle
Render(through api data)
<html loaded with new api data>
componentDidUpdate

UNMOUNTING CYCLE (disappearing from UI)
ComponentWillUnmount() - called just before component disappears from ui (so called when move to diff page)

FunctionBasedComponent - simplified 
NEVER Compare React lifecycle methods to functional components hooks etc (they are not equivalent)


