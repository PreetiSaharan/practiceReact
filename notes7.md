# useEffect Hook
-imported from react library
-called using 2 args (cb function & dependency Array)
-if using useEffect inside a component, -everytime the component renders, useEffect is called
-dependency array changes the behaviour of this render
- inside useEffect, only cb function (1st arg is mandatory)(dependency array (DA) is not mandatory)
- if no DA, useEffect is called everytime the component renders, useEffect is also rendered (i.e. DA called)
Ex- useEffect (()=> {
    console.log("rendered");
});

-if DA  is empty, useEffect is called only on initial render & just once(i.e when the component is rendered for the 1st time)
Ex- useEffect (()=>{
    console.log("rendered");
}, []);

- if put something inside DA, useEffect is only called when the dependency changes (i.e. here useEffect is called, everytime btnNameReact changes (from login to logout etc))
Ex-  useEffect(()=>{
    console.log("rendered");
}, [btnNameReact]);

# BEST PRACTICE (useState Hook)

- Always call your useState hook inside a component(otherwise will throw error)
- as they have a specific purpose - i.e. useState is used to create LOCAL State variable inside your functional component (hence should be created inside a FUNCTIONAL COMPONENT(i.e. at higher level))
- always try to create hook ( create your state variables) at start of function
- never create hooks (state variables) inside a condition(if/else condition)(or loop) or inside a function)- create inconsistency in your code


# Creating different routes for each page
-using react router dom library (installed using command - npm install react-router-dom)
- to create routes, we need to create routing configuration
-import {createBrowserRouter} from "react-router-dom";
- # create routing configuration
info that tells the browser router that what will happen at a specific path (ex- what should happen if call /about url)

-createBrowserRouter - array of objects- takes a list of paths
path is nothing but object
- the obejct means - if path is / then load the home page

const appRouter = createBrowserrouter([
    {
        path: "/about",
        element: <About/>,
        errorElement: <Error/>
    }
])

# ERROR Page
CAN create our own ERROR PAGE using errorElement, ie.e if there is an error i.e somebody gave rabdom letter post /about/uduebd - then renders ERROR COMPONENT 

we also need to import routerProvider - as it will provide router config to our app

root.render(<AppLayout/>); 
now instead of rendering directly like above line, we' ll render the router config (as contains all the urls)


# react-router-dom - gives access to useRouteError hook (Named import) (shows detailed errors)

# Hook is a function at the end of the day

# A function starting with word "use" is a hook. Ex- useState, useEffect, useRouteError

# Want Header in all pages

-- Need to create Children Routes of App Layout (app layout stay as it is)
--want to use children as per the routes i require in a page
-- outlet is created & put below header & components as per routes goes to the outlet
if /, body goes to outlet,
if /about, about goes to outlet (outlet provided by react-router-dom)
(so now our header & footer is intact, only the rest changes as per the route)

we won't see Outlet component in our html as the children replace the Outlet as per our route

called Children Routes

# Never use anchor tag for routing in react (using href) - becuase the whole page gets refreshed

# REACT can navigate through diff pages without refreshing the whole page - through Link component given by react-router-dom
--Link component works exactly same as anchor tag (BUT WITHOUT RELOADING THE PAGE UNLIKE ANCHOR)

# Single Paged Applications
--Link just changes the component(refreshes the components) , does NOT reload the whole page - that's REACT applications are called # Single paged applications

# 2 types of routing in web apps you can have in your React applications
1) Client Side Routing (when only component refreshes(all the components are already there (doesn't make any network call, just refreshes the component)))
2) server Side Routing (reloads the page when switching between diff web pages )(makes network calls everytime)

- we are using client side routing (in our React app)

# DYNAMIC ROUTE 
we have dynamic route for every restaurant we have 
we will reuse the RestaurantMenu component for every restaurant (we will have dynamic data loaded but use the same component)

-- wanna give dynamic path to each restaurant
/restaurant/:resId (: here tells that this part of route is dynamic)

to fetch data through API (i.e. dynamic data) we use useEffect hook inside RestaurantMenu component 

# USEPARAMS (hooks)
i.e need to use read resId - read using hook - useParams 
useParams - named import from react-router-dom
params is an object with resId
so pass this resId to your url - making it dynamic
const params = useParams()- give the object having resId, so using object brackets- can extract the resId directly

# MENU COMPONENT
now require state variables (using useEffect) to store that data(json data of menu) ( such that whenever my state variable updates, it updates my UI(rerenders it))

# GraphQL
helps in dealing with underfetching and overfetching of data. soo that loads only that data which is equired in our code.

# MAP (used for iteration)
{itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name}</li>)} - here itemCards is being iterated and for each item(variable) - find it's name - and that value gets shown in list <li>. (/// //<li>{itemCards[0].card.info.name}</li> // this is being iterated )

whenever use map- must use "key" for it. 

# make menu cards in body clickable # Link (wrapper over anchor tag)
using link component (inbuilt) in Body (using link instead of anchor tag)(Link is a component given by react-router-dom(behind the scenes, Link is using anchor tag))
Link is a wrapper over anchor tag. <link to="/">Home</Link>
Now React-router-dom keeps a track that this home is a link and you don't have to refresh the page. It's a special type of link. (browser doesn't understand Link- so react-router-dom uses anchor bts and also keeping a track over it. Link is a wrapper over anchor tag)
import - named import of Link
key (map) should be in the parent jsx (here Link)
<Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>

# Single page application
when moving from one page to other- our page is not getting reloaded. Header & footer stays intact- this is single page application


