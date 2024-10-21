before starting a project 
# 1st step - planning
Planning - how our app should look like (UI/ wireframe)
           name our app

           UI/ wireframe
           hould have header - logo on left & home about cart in right side
           body (search bar, search button, restaurant cards (will have image of food + star ratings))
           footer (copyright things )

           what all components will my app have?
           HEADER (logo, Nav items)
           BODY  (search, cardContainer)
           FOOTER (copyright, address, contact info)

           button(gives top rated restaurants((above 4 rating)))

           const Header =() => {
            return (
                <div>
                    <div>
                         <img src=""/>
                    </div>
                </div>
            )
           }
MUST REMEMBER - after return use normal brackets (not curly)

Inline CSS
in html tag itself ex- <h1 style="color:pink"></h1>

INSIDE JSX , INLINE STYLE/ INLINE CSS 
is not given like in html 
rather here given as JS object

const styleCard={
    background: "peach";
}

Ex- const ResCard=() => {
    return (
    <div className="res-card" style={styleCard}> 
    </div>
    )
}

This is the way to use inline styles- BUT NOT BEST PRACTICE TO CODE (looks complex) or like below
const ResCard=() => {
    return (
    <div className="res-card" style={{
    background: "peach";
    }}> 
    </div>
    )
}


Need to make dynamic restaurant cards
as don't want all to be BLUE TOKAI
this dynamic rescard thing can be done through PROPS (short form for properties which can be passed to a component)

Res-card- is a functional component ( is JS function at the end of the day)
props are just normal arguments to the function

passing a prop to a component is just like passing arg to a JS function

for ex- let's pass res-name="bluetokai"
props given are wrapped in objects AND then passes to component by REACT

(can even see the props - through console.log - they are objects)
Can pass any number of props to component
props are wrapped in obj & then passed to components


const RestaurantCard= (props) => {
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/6/4/707393e9-88eb-4740-b49f-1eba70aac8ca_07c208b4-21d3-495f-a719-b71748ffcd1c.jpg"/>
            <h3>{props.resName}</h3> 
            <h5>{props.cuisine}</h5>
            <h5>{props.stars}</h5>
            <h5>{props.time}</h5>
        </div>

    );

};

#####can be DESTRUCTURED ON THE FLY ### this is normal JS

const RestaurantCard= (resName, cuisine, resRating, resTime) => {
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/FOOD_CATALOG/IMAGES/CMS/2024/6/4/707393e9-88eb-4740-b49f-1eba70aac8ca_07c208b4-21d3-495f-a719-b71748ffcd1c.jpg"/>
            <h3>{resName}</h3> 
            <h5>{cuisine}</h5>
            <h5>{resRating}</h5>
            <h5>{resTime}</h5>
        </div>

    );

};

<RestaurantCard resName="Blue Tokai" cuisine="Coffee"/> 
(JSX We used)

# SWIGGY DATA
looks complicated - using carousal etc
but it is INDUSTRY STANDARD
they are using configDriven UI
carousal will be diff in diff area as diff offers at diff locations (our website is driven by Data(diff config)) (Ui is driven by config(data))

UI LAYER & DATA LAYER TOGETHER builds a frontend application

cloudinaryImageId: "tp4rxsh4oedgaxkpgkgd" -- swiggy has hosted all its images on cdn (like react code is there on cdn)

in javascript can add 2 strings
but has to put in curly brackets{}
ex- 

src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+cloudinaryImageId}


# BEST PRACTICES TO WRITE CODE
-separate files for separate things
- src folder - we write the source code files here (convention) (app.js inside src folder)
-app.js file- remove the comments
-best practice is to make separate files in different components (header in diff & body in diff files, etc)
-create components folder - there put files of components [REACT file structure](name file same as component name)
-some people also write it as .jsx (good way- .js)
- NEVER hardcoded data in your component file (neither pput url there)
-create utils folder & create file name constants.js (contain hardcoded data)
-code in 1 file should not be more than 100 lines
-
-Reusable components (makes it easier)
-const{name, deliveryTime}= resData?.sla; // ?. means optional chaining
- JS map must filter reduce be used (instead of repeating - 
            <RestaurantCard resData={resList[0]} />
            <RestaurantCard resData={resList[1]} />
            <RestaurantCard resData={resList[2]} />
            <RestaurantCard resData={resList[3]} />
            <RestaurantCard resData={resList[4]} />)

- Whenever using .map(used for loop) - must give unique key to that
# Why we need keys
when have many children(components at same level), react optimise them while rendering, each children at same level must have unique ids (otherwise won't know which children to render- will render all the children/ component)

REACT says never use indexes as keys (because the order might change)(index- 0, 1, 2 , 3 in arrays/lists)(won't throw error)
NOT using key is unacceptable(using index as key as last resort)




Whatever you can make using React can be created using normal html & css but react makes your developer experience better, you can do more by writing less. this is the adv of using framework. Also optimizes the webpages, which makes it faster.


# CREATED SEPARATE FILES FOR SEPARATE COMPONENTS
1) header code put into Header.js file- now it has to be imported in app.js file & for it to be imported there, first has to be exported from header.js file.
line- export default Header; (inside Header.js file)(name of component)
import Header from "./components/Header.js";
or can put "./components/Header"

2 ways to export data or component;
1) DEFAULT EXPORT ----   export default Header;
2) NAMED EXPORT (used generally when have to export multiple things from a single file)(in 1 file, can have only 1 default export) ----just write export infront of CDN_URL & LOGO_URL
---- export const CDN_URL="kijunf/ijuh";
     export const LOGO_URL="jdnucidm/oejd";

# 2 TYPES OF IMPORT
1) DEFAULT IMPORT (ex- import Header from "./components/Header";)
2) NAMED IMPORT -- import { CDN_URL } from "../utils/constants";

DEFAULT IMPORT/ EXPORT
export default Component;
import Component from "path";

NAMED EXPORT/IMPORT
export const Component;
import {Component} from "path";


# REACT HOOK
creates superpowerful variable
react element - JS obj
React hook - JS function (prebuilt)
functional react components - JS functions

React hooks - normal    JS utility functions (written by FB developer)
2 most imp hooks
--useState() - use to generate superpowerful react variables (first need to import this from react like named import (we imported react as default import)) (used to create state variable)
--useEffect()

State variable - used to maintain the state of the component
HOW TO CREATE STATE VARIABLE
const [listOfRes] = useState(); [this is how you receive a state variable]

# HOW TO CREATE A NORMAL VARIABLE 
let listOfRes;

const [listOfRestaurants]= useState([])
since listOfRestaurants is a state variable (tit can't be modified normally, for it to modify we need to write a function, which is named as setListOfRestaurants (i.e set keyword before name of the state variable) )

ex- const [listOfRes, setListOfRes] = useState([]);

useState([]) - means default value is empty array 
useState(null) -means default value is null

normal case
let resList = []; //(declare variable)
resList= ["abc"]; // update/modify variable

# STATE VARIABLE
const [resList, setResList] = useState([]); //declare- default value empty
setResList (filteredData); // modified/updated

in case of normal variable changes don't reflect automatically in UI, but when make changes on STATE variable (onclick)- it reflects on UI as well-

Whenever State Variable changes/updates, React rerenders the component (i.e as soon as Data changes, UI updates (with minimum code, React makes DOM operations fast))
as soon as the setListOfRestaurants is called, React immediately updates the UI (superpowerful State Variable)


now using const [listOfRestaurants, setListOfRestaurants]= useState([{
        id: "183603",
        name: "Bikaner Wala",
        cloudinaryImageId: "tp4rxsh4oedgaxkpgkgd",
        locality: "Jind Rd",
        areaName: "Roop Nagar",
        costForTwo: "₹150 for two",
        cuisines: [
              "Sweets",
              "Snacks"
        ],
        avgRating: 3.9,
        veg: true,
        sla: {
              deliveryTime: 17,
        }
    },
    {
        id: "183597",
        name: "Raj Food",
        cloudinaryImageId: "hmgscp7dwv5flnrzm4dz",
        locality: "Kaushik Nagar",
        areaName: "Scheme No 19",
        costForTwo: "₹200 for two",
        cuisines: [
          "Thalis",
          "North Indian",
          "Street Food",
          "Tandoor"
        ],
        avgRating: 4.2,
        veg: true,
        sla: {
          deliveryTime: 20,
        }
      },
      {
        id: "183594",
        name: "Da Pizza Inn",
        cloudinaryImageId: "e7qwxlmhvlxj96hiaqv5",
        locality: "Safidon Gate",
        areaName: "Roop Nagar",
        costForTwo: "₹200 for two",
        cuisines: [
              "Pizzas",
              "Italian",
              "Pastas"
        ],
        avgRating: 3.2,
        veg: true,
        sla: {
              deliveryTime: 24
        }
    },
    {
        id: "183417",
        name: "Charan Dass Samose Wale",
        cloudinaryImageId: "a1pygnhx63npytwvr0vu",
        locality: "Dyal Bagh Colony",
        areaName: "Roop Nagar",
        costForTwo: "₹100 for two",
        cuisines: [
              "Snacks",
              "Fast Food"
        ],
        avgRating: 4.5,
        veg: true,
        sla: {
              deliveryTime: 22,
        }
    },
    {
        id: "236826",
        name: "Aggarwal Sudh Vaishno Bhojnalya",
        cloudinaryImageId: "ea48t5faiwxmza5eukka",
        locality: "Gohana Road",
        areaName: "Roop Nagar",
        costForTwo: "₹150 for two",
        cuisines: [
              "Indian",
              "Tandoor"
        ],
        avgRating: 4.3,
        veg: true,
        sla: {
              deliveryTime: 28
        }
    },
    {
        id: "223544",
        name: "Hungerz Hub",
        cloudinaryImageId: "xyk2ctaqvnm4sefdzhjd",
        locality: "Safidon Gate",
        areaName: "Roop Nagar",
        costForTwo: "₹150 for two",
        cuisines: [
              "Burgers",
              "Pizzas",
              "Chinese",
              "Continental",
              "Pastas",
              "Beverages"
        ],
        avgRating: 4,
        sla: {
              deliveryTime: 38
        }
    }
    ]);

    can make it const [listOfRestaurants, setListOfRestaurants]= useState(resList)

# REACT SUPERPOWERS
    -React uses Reconciliation Algorithm (also known as React Fibre)
    let's say, resContainer has 7 res cards - UI changes to filtering these 7 to 3 filtered res Cards

    Virtual DOM - is a representation of an Actual DOM 
    Virtual DOM is Body, header, footer (are nothing but JS object & this object is REACT Virtual DOM (representing div inside div)in JSX)
    Actual DOM - tags (div inside div etc)(
        <div>
            <div>
                <h1></h1>
            </div>
        </div>
    )

# Diff Algorithm - 
Find out the difference between the old virtual DOM & new virtual DOM (for ex- here from 7 resCards- got 3 res Crads after filtering out--- so diff algorithm count the difference b/w them (here 4 nodes), then actually update the UI DOM as per the difference on every render cycle)

    In React 16, new algo to update UI came - React Fibre (new way of finding the diff & updating the UI )- makes the REACT faster
    finding out diff b/w 2 objects is faster (virtual DOMs are objects)(finding diff b/w 2 html code is tough, hence, react is faster & efficient)

    Whenever there is any change in the REACT State Variable, React finds the diff using diff algo & rerenders the UI (making it faster as React doesn't touch Actual DOM or html often)- this is called React Fibre Architecture

    REACT is fast because REACT is doing efficient DOM manipulation because it has Virtual DOM & diff algo(as can find the diff b/w virtual DOMs & then updates the UI)

    React is constantly tracking listOfRestaurants (state variable), whenever it updates i.e. as soon as setListOfrestaurants is called, React updates UI (react starts Reconciliation Algo)

    REACT also perform INCREMENTAL RENDERING (ability to split rendering work into chunks & spread out multiple frames)

 useState returns array in our example (called DESTRUCTURING ON THE FLY)
 const [listOfRestaurants, setListOfRestaurants]= useState(resList)

 above code is SAME AS BELOW CODE 

 1)const arr = useState(resList);
 2)const [listOfRestaurants, setListOfRestaurants]= arr;

OR the line 2 can further be written as -

 const listOfRestaurants = arr[0]; 
 const setListOfRestaurants = arr[1];

 # REACT HOOKS
 help to create state variable which are superpowerful as React keeps an eye on them, whenever they update, React will trigger diff algo & find the difference and then updates the UI