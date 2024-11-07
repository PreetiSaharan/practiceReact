# HIGHER ORDER COMPONENTS

is a JS function that takes a component as input, tweeks/ enhances it and returns that component back

//Writing HIgher Order Component
// will take restaurant Card as input and will returned enhanced version of it

adding something top of it but not change or modify RestaurantCard component


All React Applications has 2 layers - 1 layer is of data, other is UI Layer - UI Layer is powered by Data layer
UI Layer(static- JSX) (Virtual DOM representations)
Data Layer(Dynamic)- consists of your states, props (JS curly braces - the js code you write)

Data layer - must know how to manage it efficiently

c.card?.card?.["@type"] - right (means exactly same as below)
if @ there can't write .card?.card?.@type - wrong 

ACCORDIAN - feature used to collapse or exand a section (ex- recommended food items , etc section)- has 2 things Accordian header & accordian body

- has header & body(collapsable)

so the accordian we have built in that - each category maintain it's own state - so when click on that particular accordian then only it collapses or shows, but when open other category the previous opened one doesn't collapse - as each maintain their own state

# LIFTING UP THE STATE
BUT WE WANT TO Build an accordian where when we click one category - the opened one collapses, i.e. at 1 point only 1 category is opened

done through lifting up the state
i.e power to show and collapse power given to the parent i.e. here to restaurantMenu(Parent) Not restaurantCategory (children)

Now RestaurantCategory has become a controlled component - becuase Parent- RestaurantMenu is controlling it


When RestaurantCategory had it's own state - was uncontrolled component

# PROPS DRILLING - PROBLEM OF PASSING PROPS
passing props from parent to it's children to it's grandchildren - because grandchildren wants to access it
(still okay if has to pass data to 1-2 levels but not good if levels increase as the end level need it but the intermediary levels having nothing to do with it, are just passing it to the last level)

# SOLUTION to Props Drilling- REACT CONTEXT 
global data - that can be used anywhere, at any level. 
can be used anywhere
Ex- logged in user - is required everywhere
Ex- theme (light theme/ dark theme)- need this info all across app

keep contexts inside utils

# HOW CONTEXT IS created

import { createContext } from "react";
const UserContext = createContext({
    loggedInUser:"defaultUser" //giing default value to user
});

Now can access this context from anywhere in our app using REACT HOOK - useContext


# HOW CONTEXT IS USED ANYWHERE IN OUR APPLICATION
(imoport contextfile where you created context, import useContext hook from react, then get the data using useContext on your context and then return it)


import UserContext from "../utils/UserContext";
import {useContext} from "react";
const RestaurantCard= (props) => {
    const {loggedInUser} = useContext(UserContext);
     return (
        <div className="m-4 p-4 w-[250px] h-[530px] bg-gray-100 rounded-lg hover:bg-gray-300">
            <h5 className="font-bold">{loggedInUser}</h5>
        </div>

    );

};

# WHERE CONTEXT IS ONLY
Only for that data which is used at multiple places, multiple files
DO NOT PUT all data inside it 

# HOw to use context in CLASS BASED COMPONENT
(because there is no react hooks in it)
when you create context- Reacxt gives you power of .Consumer as well
inside this - jsx in which a callback function gets access to that data and this data is the conetxt data

.Consumer takes in a callback function through which we are able to access the loggedInUser

import UserContext from "../utils/UserContext";
class About extends React.Component{
    constructor(props){
        super(props);
    }
render(){
        console.log("Parent Render");
        return(
                <div> LoggedIN USER: 
                    <UserContext.Consumer>
                        {({loggedInUser})=> (<h1>{loggedInUser}</h1>)}
                    
                    </UserContext.Consumer>
                    </div>
        )
    }
};

# HOW TO UPDATE THE VALUE OF THE CONTEXT ( & PASS IT EVERYWHERE)

Ex- somebody logged in and now the value of loggedInUser changes to their name

let's say we write the authentication code in our app.js where the loggedInUser Info is getting updated

inside app.js file 
how to now use this updated value of context everywhere- using Context PROVIDERS
<UserContext.Provider></UserContext.Provider> is given to us by React & wrap our whole app in this provider & then can pass any value to it. Since entire app is wrapped inside provider, that means any value passed into the Providers can now be accessed by the entire app anywhere

If wrap only header inside provider - so the new value - preeti shown only in header and everywhere else default User will be shown

so, now wherever loggedInUser is written- will get Preeti Saharan, not default user

import UserContext from "./utils/UserContext";


//COMPONENT COMPOSITION
const AppLayout = ()=> {

    const [userName, setUserName]= useState();

    //Authentication
    useEffect(()=> {
        //Make an API call & send userName & password
        // got below data from API
        const userData ={
            name: "Preeti Saharan"
        };
        setUserName(userData.name);
    }, []);

    return (
        <UserContext.Provider value={{loggedInUser: userName}}>
            <div className="app"> 
            <UserContext.Provider value={{loggedInUser: Elon Musk}}>
                <Header/>
            </UserContext.Provider>   
                <Outlet/>
                {/** if path is "/", then it should have body component */}
                {/** if path is "/about", then below header, only About compo, etc */}
                <Footer/>
            </div>
        </UserContext.Provider>
    );  

};

can wrap only header in one provider and the entire app inside another provider, passing different values. So, can put provider inside provider 


# HOW TO DYNAMICALLY MODIFY THE CONTEXT
pass the setUserName as value in UserContext Provider along with loggedInUser- so can modify the setUserName and pass it to the context dynamically
 
so whenever the value of userName changes the state variable changes (setUserName) and it updates the context everywhere







# REDUX IS NOT INSIDE REACT (External)
for big applications need not to use Context, rather should use REDUX - is scalable
Redux- does the same work as context - i.e. state management

but context is inside react- for normal sized app - should use the context