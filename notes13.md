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