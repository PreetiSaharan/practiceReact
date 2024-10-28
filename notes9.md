## HOW TO WRITE CODE IN OPTIMIZED MANNER

# SINGLE RESPONSIBILITY FUNCTION

1 function/class/menthod/component - should have a single responsibility
ex- only job of restaurantMenu is to show menu (only 1 responsibility of 1 component)

## MODULARITY 
break down your code in multiple small modules - make code - more modular and testable (unit testing efficient- as can write test cases on for restaurantMenu)
Easy to catch bug - can know from which component bug is coming and can debug it 


Modular code - makes the code more REUSABLE, MAINTAINABLE, TESTABLE


Keep components as light as possible


# CUSTOM HOOKS

Hooks are special JS functions - given by react - useEffect, useState, & useParams(by react-dom library)

custom hooks- we can create - makes the component more modular, readable

hooks are like utility functions

RestaurantMenu - currently fetching data + displaying it - but should only be concerned about displaying it. So, we create a custom hook - for fetching data (such taht REstaurantMenu doesn't care about how date fetched but only on display)

# ALWAYS CREATE SEPARATE file for separate hook (custom hook under utils)

NAMING of hook - use keyword in start (small case)

hook - normal js function, exported like defaut export/ named

Create hook to check if customer is online or offline & throw error when offline that please check you internet connection

# thought process while writing a custom hook

useOnlineStatus
.js file create in utils
write it as arrow function
finalize contract- pass i/p, return o/p
logic

Custom hooks are reusable. Ex- useOnlineStatus used in body(error message) as well as header(to show green & red)

# Parcel is a bundler - will bundle all the files and create just 1 js file when do production build

But problem is this JS file size increases as the files in the project increase

So, when building a very large scale application, we will make smaller bundles (break down your app into smaller logical chunks)- it's called
Chunking
Code Splitting
Dynamic Bundling
Lazy Loading
On Demand Loading

# How to make smaller chunks of a large scale applications

LOGICAL SEPARATION of code- means a bundle should have enough code for a feature amd then can split up our bundle into these logical chunks

Ex- in mmt site - i can make 1 bundle only for flights, 1 for home states only and so on.

100 components inside flights can form 1 bundle 
hence not put a lot of load on 1 bundle such that request to 1 js bundle doesn't take a lot of time

ex- if in our project we create grocery delivery (has many components- grocery home page, grocery cart, etc) along with our food delivery. so we wikll make 1 bundle for grocery and 1 bundle for food delivery(also has 100s of child components)


# HOW we make a different bundle for Grocery
we don't import it normally but do lazy loading- means initially when we  go to our app (home)- it doesn't load the code for Grocery- only load it we we go to grocery page through it's link
-- called LAZY LOADING

i.e. NOT loading everything at once, but only loads that bundle ehen required- so also called- ON DEMAND LOADING


-- SO NOT IMPORT Grocery in foodOrderingApp.js (App.js) as normally(import Grovcery from "../components/Grocery.js")

but we import it using lazy(comes from React package- using named import)

const Grocery = lazy(()=> import 

import above is not other import - but a function 

# LAZY Function
importing grocery using lazy function & lazy function takes a callback function and this callback function uses "import" function - which takes the grocery path

const Grocery = lazy()=>{
    import("./components/Grocery");
}

when go to grocery psge - see other bundle is create for grocery



 




