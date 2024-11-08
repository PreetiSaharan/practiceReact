# -------- REDUX -------------------
# Redux works in DATA Layer of our application

# Create our own REDUX STORE

# REDUX IS NOT MANDATORY in your application

for small sized applications, redux is not needed

for very big applications - where there is huge use of data addition, modification, etc - there REDUX is used

# Redux and react are different libraries (separate)

when building react application - redux is not mandatory but can use it when application is big. Use redux only when required

# Other libraraies used to manage state-- ZUSTAND

# Why Use REDUX
handling data, manageing store - when building big scale applications

Redux - widely used
used to primarily handle the state of applications
redux also helps in debugging

# REDUX - A predictable State Container for JS Apps
react & redux great combo

but can be used with other libraries as well

# What we will use?
 React Redux library- used to bridge teh gap between 2

 Redux - older- won't use
 Redux Toolkit - latest - we will use this not Vanilla Redux

 # Redux Toolkit
 Standard way to write redux logic
 address 3 concerns of Vanilla Redux
 1) very complex
 2) had alot of packages (now only 2 library req- redux-react & redux-toolkit)
 3) required a lot of boiler plate


 # Architecture of Redux Toolkit

BUILDING CART FEATURE
 We will build CART page ( & when add some food - it goes to CART (on side of cart (in header) it will show the count of items there in cart (like in swiggy))

 to store all these cart info - we will use REDUX TOOLKIT STORE

 React Store is kind of a very big JS object with a lot of data in it which is kept in global central place. can be accessed from anywhere
All data is kept inside it

absolutely fine in keeping all data inside   redux store
but such that it don't become extremely big - SLICES 

# diff SLICES in REDUX
to keep data separate - logical partitions are made - these logical partition are called slices

ex- cart slice, theme slice, user slice, etc

CART SLICE
initially empty

# how data go to the CART Slice
can't directly add data to slice

when click on ADD button it DISPATCHES an action - then then this action calls a function and this function (REDUCER FUNCTION) will modify the CART slice

this function is known as REDUCER

# when click on ADD button it DISPATCHES an action which calls the REDUCER Function which updates the slice of our REDUX Store (WRITE DATA IN REDUX SLICE)

It makes the entire the EASIER

# HOW TO READ DATA FROM CART SLICE IN REDUX STORE

we use SELECTOR - to read the data from our store and it will give data to the component (header)

The process of Using SELECTOR is called SUBSCRIBING TO THE STORE (that means in sync with the store - i.e when the store data updates, it will update the component)


# REDUX STORE CREATION STEPS
- Install @reduxjs/toolkit & react-redux
- Build our own Store (inside utils)
- Connect our store to our app
- Create a cart slice 
- Dispatch Action
- Selector (read)


once created appStore.js file - now need to provide that store to our application - i.e. to our app.js using PROVIDER

Import provider from react-redux

reduxtoolkit- related to redux (configure is redux job)
react-redux- helps to connect redux to react (bridge)

wrap whole app in provider

# now create cartSlice.js in utils
using cartSlice function - which takes a configuration to make a slice- 1st config it takes is - name, 2nd config it takes - initialState- empty array then takes reducers- write reducer functions corresponding to each action

actions -are like small apis to communicate with redux store- eg -add item, remove an item, clear the cart

reducer function modifies the data in sl;ice of your state - as it gets access to State and action 

Once the slice is built- in that export reducer & actions
and then add that cartSlice to appStore - create a reducer (responsible to modify the appStore)

in APP STORE - WE HAVE BIG REDUCER - which contains reducers for each slice - reducers modify the store

# NOW SUBSCRIBE TO THE STORE USING SELECTOR

selector is nothing but a react hook - hook is nothing but js function

selector - useSelector hook gives us access to the store - need to tell whaT portion of the store

# click on add item - dispatch an action // NAMED IMPORT OF ACTIONS

To dispatch an action we use useDispatch React Hook

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const dispatch = useDispatch();
    const handleAddItem =()=>{
        // Dispatch an action
        dispatch(addItem("pizza")); // here whatever i pass to addItem is my actionPayload -i.e. which goes to the Cart slice

    }

# Difference between below 3 (difference is in the time of execution)
onClick = {handleAddItem}
onClick={()=> handleAddItem} -- it's a callBack function
onClick={handleAddItem(item)} -- here calling the function right away

1. onClick = {handleAddItem}
This sets handleAddItem directly as the function to be called when the button (or other element) is clicked. This is the most common approach when you want to call the function without any arguments at the time of the click.

2. onClick={() => handleAddItem(item)}

    This syntax uses an arrow function to wrap handleAddItem(item).
    The function handleAddItem will only be called when the button (or element) is actually clicked.
    This is the correct way to pass an argument (item) to handleAddItem in an onClick handler.

3. onClick={handleAddItem(item)}

    Here, handleAddItem(item) is called immediately when the component renders, not when the button is clicked.
    This is because adding parentheses () immediately invokes the function.
    As a result, handleAddItem(item) will run on render, and the result (if any) will be assigned to onClick instead of the function itself.

Summary

To trigger handleAddItem(item) on a click event, use onClick={() => handleAddItem(item)}.


## this line means
 {cartItems.length==0 && <h1>Cart is empty, Please add your favourite foood..</h1>} 

 cartItems.length ==0? <h1>cart is..</h1> : 

 // so 1st line means same as 2nd line 7 don't need to give fasle scenario like in 2nd


 ##### BE CAREFUL ABOUT THESE WHILE USING REDUX STORE
## 1st
when using selector - make sure subscribing to the right specific portion of store - otherwise a big performance loss

const cartItems =useSelector((store)=> store) -- huge performance loss (i don't want my cartItems to change when any change happens in store )

const cartItems = useSelector((store)=> store.cart.items);-- very efficient

## 2nd mistake

REDUCER - when creating app store - 1 big reducer 

reducers- in cart - multiple small reducer functions

when exporting - 1 reducer from store

## 3rd 
in vanilla reducer - warning - DONT MUTATE STATE
state mutation was prohibited
use to create a newState (i.e. copy & then use to modify it)

const newState = [...state];
newState.items.push(action.payload);
return newState


Now (NEW VERSION)- can modify our state- HAVE TO MUTATE THE STATE
- can mutate directly (state.items.push(action.payload))

Earlier returning - mandatory
now not mandatory

# Redux is still doing the same as vanilla behind the scenes using Immer Library (difference b/w mutated & earlier state is found out by redux )

redux toolkit uses Immer bts

therefore can't directly do - state=[]; make the local variable empty but not the original state becomes empty - hence not works

inside redux - console.log(current(state));

# redux toolkit says - either mutate the existing state or return a new state 
ex - state.items.length = 0; or return {items: []}; // will clear the cart

# REDUX DEV TOOLS - EXTENSION - helps in debugging
very usefule - when therre are 10000s of components and many components are mutating the same state

can find at which action our code failed - hence - easy to debug

# read about rtk query (used when making an api call)
earlier we used middleware & thungs
















