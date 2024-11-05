# DIFFERENT WAYS TO ADD CSS TO OUR WEBSITE

# 1- separte index.css file
- already using

# 2- SCSS/ SASS
not used in production ready applications because are not scalable

so, NOT Recommended

# 3- Styled Components ( esp for React Applications)

Recommended for production ready big scale applications
eg - used by UBER, SPOTIFY, etc

# 4- CSS UI LIBRARIES/ FRAMEWORKS

React Component CSS Libraries/ Frameworks to make your Website beautiful (they already have prebuilt css inside them)
(just need to import buttons - no need to write it's color, font etc)

Material UI 
Bootstrap
Chakra UI
Ant Design


# 5- Tailwind Css
Rapidly build modern websites without ever leaving your HTML or JSX (our react code)
works with html/css/ js/ angular/ react/jsx etc
highly compatible

# TAILWIND CSS INSTALLATION
GO to frameworks - go to parcel - as using it there check the command to install it for parcel - copy it and implement it on command line/ Terminal

Tailwind uses PostCss behind the scenes - PostCSS is a tool use dto transform CSS with javascript

npx tailwindcss init - initializes the tailwindd css into our repository after instally it 
this line creates a tailwind.config.js file in our code - configuration files for our tailwind

.postcssrc - created to configure postcssrc

your parcel uses postcssrc to understand tailwindcss

# tailwind utility

can be used inside html file, js, jsx, ts, tsx etc files

now after setting up Tailwind css
can remove the entire code in index.css and replace with 3 lines

@tailwind base;
@tailwind components;
@tailwind utilities;

& NOW no other word needs to be written in the index.css file. (not touch it again)

now our project is configured to use tailwind css


# HOW TO USE TAILWIND CSS

it gives classname for every css you want to write in your app (prebuilt everything - so just have to use that class name in the respective js files)

w-[100px] -hard coded
flex- used to bring things in 1 line
flex-wrap - to wrap them (asin in flow)
sm - means writing css for device whose size is greater than sm (so can change the color/etc of something for mobile or desktop)

# PROS of TailwindCSS

can use on the fly - not have to change files
fast development
very lightweight - so when will make bundle of css - only will import the css that is required in our app (minimum css not all the classNames)(if used m-4 100 times, tailwind will put only 1 m-4 (i.e parcel will import only 1 m-4))


# CONS 
if have to add so many things in 1 class - huge line - looks ugly

js code looks so ugly (as sooo much of things written in className) - becomes less readable


