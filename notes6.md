# MONOLITH & MICROSERVICE ARCHITECTURE

Earlier all the projects/ apps built using monolith arch (everything was inside the single project (APIs, DBs, Authentication, UI etc) so everytime aby small change done in UI, again has to build the entire project)) (i.e. 1 service for the entire project)

# MICROSERVICES ARCH
Modern companies using it
We have diff services for diff jobs - auth service, DB service, Backend Service, UI service- all these microservices combined together to form a big app. 
THis is called Separation of Concerns and Microservices Arch followes Single Responsibility Principle (which each service has it's own job & no one interferes with it)
All teams work on diff services (unlike monolith)
How these microservices interact with each other? talk to each other

# Microservices Arch
-can use diff tech stacks in diff microservices (independent of each other)
- all the services run on diff ports 
- all these can be deployed on same domain name (url)
- they interact by making call to other services

# 2 APPROACHES HOW THE UI FETCH DATA FROM BACKEND
1) as soon as our page loads, can make API call, wait for data to come, then quickly renders the UI {here for some time, our page is frozen and then suddenly dATA comes}
2)as soon as the page loads, we will quickly render the UI(whatever we get), then make API call, when the data comes,  re-render the UI (in REACT we use this) (here since quickly renders the skeleton first, the page doesn't seem to be )

then suddenly when data comes, we see the data on the page. This is better approach, 2 renders are fine (as React renders very quickly)

To use the 2nd approach, we need useEffect Hook (hook is nothing but a normal JS function which React gives us)
useEffect comes from react library 
useEffect - takes 2 arguments (1st is an arrow function(which is a callback function) & 2nd arg is a dependency array) ex- 
useEffect(()=>{}, []);
- we call useEffect function with a callback function

# When will the callback function of useEffect function is called????
called after your component renders

const Body = () => {
    useEffect(()=>{
        console.log("useEffect used");
    }, []);
    //body component
    console.log("this is body");
    return(
........
    );
}

here since callBack function of useEffect is called after the component(here body) is rendered. 
Console looks like
1) this is body
2) useEffect used

logic (call back function goes to the callback queue & executed once our function(here component is executed))

useEffect used in 2nd approach (because 1st body is rendered, then useEffect(fetch data) is called then again rendered)

# fetch() - browserAPI  (fetch is superpower JS engine has)
fetch - fetch data from API
fetch returns a promise 
7 we need to resolve promise either using .then , catch & try 
or async & await

# CORS POLICY ISSUE
Calling Swiggy API
Our browser blocks us from calling api from one origin to another
 (here our browser chrome is not allowing us to call swiggy's api from local host)

 HOW to bypass cors policy
 extension

 json.data.cards.data
 json?.data?.cards?.data - optional chaining

# SHIMMER UI
 while data is fetched (loading)
 using spinner - is old fashioned & not best practice
 rather shimmer UI is used (load a fake page until the data is loaded)-- way better UI Experience 

 Youtube , swiggy - all use shimmer UI
 2nd approach 
 Loads --> Render --> API --> Render

  //if my listOfRestaurants is empty, we will show spinning loader
    // called Conditional Rendering
    if(listOfRestaurants.length ==0){
        return <Shimmer/>;
    }

# CONDITIONAL RENDERING - rendering on the basis of condition (above is the example)

if(listOfRestaurants.length ==0){
        return <Shimmer/>;
    }

can also be written as  TERNARY OPERATOR

return listOfRestaurants.length ==0 ? <shimmer/> : (
    ...............
)


# WHY DO WE NEED useState

when use normal JS variable- it will change the state but doesn't update the change in UI
so, here state got updated but our UI didn't render (if want the refresh to be dynamic, we use state variables)

whereas State Variable - store the change in state as well as update the UI (Ex- login btn to logout & vice versa on click)


# How do we use useState
useState creates state variable which when changes renders the UI (i.e updates the UI), the state variable can't be modified directly but by using 2nd argument - setN**me (is a function which is used to update the state variable)
setN - fuunction is later called with updated value

setN changes - the whole component rerenders 

# HOW CONST VARIABLE CAN BE MODIFIED?
const [BtnNameReact, setBtnNameReact] = useState("Login");
setBtnNameReact - when called, updates the values of BtnNameReact, header component rerenders (at that time BtnNameReact variable is new variable)

everytime, login btn clicked- Reconciliation Process is triggered, the React finds diff b/w old virtual DOM & new Virtual DOM (diff Algo)

Only changes the button, doesn't affect anything else (despite the entire header component is rendered)


# Why input box is not working

const [searchText, setSearchText] = useState(""); 
<input type="text" className="search-box" value={searchText}/>
<button onClick={()=>{
    //filter the restaurants cards logic
    //search
    console.log(searchText);
}}>search</button>

here, value of search box is tied to  searchText
so, even when we are trying to type something in the input box, nothing is being written there (as it's value is tied to searchText - which is bydefault an empty string)

# To fix the above issue, we need to use onChange Handler
default - empty string
so as soon as the input changes, onChange function will update the searchText with the new value (because value is tied to the searchText)

<input type="text" className="search-box" value={searchText} 
                    onChange={(e)=>{
                    setSearchText(e.target.value)
                    }}/>


e is the arg(i.e value typed in input box)
when we type in the input box - the local state variable (searchText) changes, & when state variable changes React rerenders the body component (so when i am typing every letter of a word in input box, everytime i type a letter, the state variable changes & React rerenders) (react is so damn fast)

# Whenever State Variable Updates, React triggers a Reconciliation Cycle (i.e. Re-renders the component)

# React is faster because of the Reconciliation process (or React Fibre) as using diff algo (which finds the diff b/w old & new virtual doms making the DOM operations extremely fast) It updates the DOM only when required & only that portion of DOM which requires to be updated-- That's why React is Faster

