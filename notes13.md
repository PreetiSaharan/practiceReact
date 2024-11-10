#### TEST CASES

# HOW TO WRITE TEST CASES

# Why do we write TEST CASES
# Developer Testing

# Different types of testing a developer can do

Even a single line of code can mess up the entire application - therefore testing is imp


--MANUAL TESTING (through UI - how things are working- how features are working) - NOT efficient - as every time i am adding a single line in code - NOT gonna test all the features are again

--WRITE TEST CASES - code to test our applications automatically


## Different types of testing in REACT APPLICATION (developer can do)

--UNIT TESTING (test react components in isolation )
--INTEGRATION TESTING
--END TO END TESTING (E TO E TESTING)

--UNIT TESTING 
test react components in isolation 
tesing small unit of our app. ex- just testing header compo

--INTEGRATION TESTING
testing multiple components together
ex- testing features like SEARCH button (body compo, click event, input taken)

-- END TO END TESTING
starts from user landing to page - then following the entire journey of customer
- require tools like - selenium, etc

## Developer - concerned with 1st 2 types of testings

## LIBRARIES TO BE USED
1) React Testing Library (built on top of DOM testing library - all other testing libarraies built on top of DOM testing library)

if use create-react-app ---- react testing library comes inside it (we have created our app from scratch on the bundler - parcel)

REACT TESTING LIBRARY USES JEST - Jest is a standard to write test cases in javscript (js testing framework)

2) JEST (using along with babel - so need to setup some dependencies also)

# INSTALLATION STEPS

npm i -D @testing-library/react
npm i -D jest
npm install --save-dev babel-jest @babel/core @babel/preset-env

now configure babel - create babel.config.js


parcel already uses babel and already has it's config. Now we have made config to babel. 

so we need to make changes to parcel config of babel as otheriwse there will be contradiction and will throw error

go to parcel -> docs -> javascript -> babel-> usage with other tools (through this code can disable parcel - put this in parcelrc file )

{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}

put the above code in .parcelrc (create new file .parcelrc)

now babel.config.js will be used - won't conflict with parcel

# Setting up testing in our App
- Install eact Testing Library
- Install Jest
- Install Babel dependencies
- Configure babel
- Configure Parcel Config file (.parcelrc ) to disable default babel transpilation
- Jest configuration
command ( npx jest --init ) ( some questions )
- Install jsdom  library (if using jest version > 28)(React testing library -> setup->jest28->(npm install --save-dev jest-environment-jsdom))
-Need to install babel preset library- to make JSX work in test cases (command - npm i -D @babel/preset-react)
Include @babel/preset-react inside my babel config
-Install @testing-library/jest-dom (imp to work toBeInTheDocument) (command - npm i -D @testing-library/jest-dom )


# COMMAND TO run test
npm run test

TEST CASES need an env to run - JSDOM is like a browser and all our testing code runs here




## create __tests__ folder - where jest run the test cases

any js or ts file inside this - will be checked by jest

can create  file named header.test.js etc inside this folder

## __  is called dunder - so called dunder tests



To make jsx work (i.e jsx also tested)
-Need to install babel preset library- to make JSX work in test cases


Babel is a transpiler
bABEL preset react is helping react code(jsx) code to be converted into html - such that can be read by test cases

## meaning
const button = screen.getByRole("button"); 
there are diff types of roles - like heading, button, etc

can find button using -- screen.getByText("submit");
i.e anywhere there is text called submit (because it will be button)


# console.log
const inputBoxes = screen.getAllByRole("textbox"); 
console.log(inputBoxes);

console.log here returns the objects (virtual dom of inputs) (returns JSX element/ VirtualDOM object/ react fibre note)

when there are mukltiple inputs etc- use ALL

# BASIC FLOW OF TESTCASES
-Render something
-Query something
-Assert something


## when & how to group testcases
sometimes the test case file become bulky as so many testcases inside it 
-so group them using "describe ("contactUs test cases")"
-can have describe inside describe

instead of test("", ()=>{}), can use it("", ()=>{})

## TEST CASES for Header (unit)
-whether rendered or not
-render(<Header/>); -fails as test is not able to understand useSelector - as redux
-So, we need to use provider in test file
-Link to - is not react - it is coming from react router dom

import { BrowserRouter } from "react-router-dom";
now my test will understand Link Component


import "@testing-library/jest-dom"; requied for .toBeInTheDocument() to work. Ex- expect(loginButton).toBeInTheDocument(); 


## TESTING REASTAURANT CARD COMPONENT - HOW TO pass props while testing

props - means whats' ebing passed to the component

- done by creating mockData
- create new folder - mocks - for keeping mockData
- hard code data being put in that mocks

## INTEGRATION TESTS
--how to write test cases for integration of multiple components
--as soon as body loads-> type something in input-> search button click-> list of restaurants changes(only few there)

# get error when rendering body - shows error - fetch is not defined
 render(<Body />);
 because it is rendered in JS Dom which is browser like but NOT Browser - so can't understand what is fetch
 - so we will have to fake it - have to write a mock fetch function
 - replace fetch by global.fetch 
 - writing mock fetch function - making it similar to how browser gives us
 - fetch function returns a promise - & that promise returns a json- this json has a function which again returns a promise- so resolve that 
 - 

 ## TEST CANNOT MAKE AN ACTUAL NETWORK CALL as don't have browser - running on JSDOM - browser like env -these testcases run without internet also- therefore we use mock function & mock data
 

