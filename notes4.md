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

# Inline CSS
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


# Need to make dynamic restaurant cards
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

# UI LAYER & DATA LAYER TOGETHER builds a frontend application

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

Whenever STATE VARIABLE Updates, React rerenders the component
