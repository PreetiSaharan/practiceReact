In Production

remove all the comments
remove console.log


React makes the code faster along with other packages and libraries

npm - does Not stand for node pacakage manager
npm has NO fullform
npm manages packages but doesn't not stand for it
npm is a repository of all the packages (all the libraries etc)
when you create app - there is already npm inside it
package.json is the configuration for npm
packages are also called depenedencies
npm take care of the version of the package.json and the versions of diff packages in package.json


BUNDLER
most imp package in the proj to be installed- bundler
ex- webpack, parcel, vite & esbuild
bundler packages/bundles your app such that can push to the production
our whole code needs to be minified, bundled together(css, html, js files), compressed before going to production (this compression is done by BUNDLER)
we will use parcel as bundler (parcel comes as node package)

command to install any dependency- npm install -D parcel  (D here stands for dev dependency means installing parcel as dev dependency not as normal dependency) (installing parcel from npm)


2 kinds of dependencies are there---
1. Dev dependency- required when developing the app, i.e, during development phase 
2. Normal dependency- used during production phase also along with development phase


caret (^)
when there is minor upgrade, parcel wll automatically install the minor version 
^version “Compatible with version”, will automatically update you to all future minor/patch versions ^1.2.3 will use releases from 1.2.3 to < 2.0.0


tilde (~)
automatically install the major version 
a little riskier 
~version “Approximately equivalent to version”, ~1.2.3 will use releases from 1.2.3 to < 1.3.0.


package-lock.json & package.json
p.json- keeps track of what version of package installed (use tilde/ caret not exact version mentioned (approx version))
p-l.json- keep track the exact version of that dependency or package installed
p-l.json - keeps track that zame versions installed in production as in local such that the code doesn't break
how many package.json & package-lock.json there in our project?
every package/dependency has it's own p.json & it's own o-l.json ( as maintain it's own dependencies and this chain goes on)



node_modules- database or code for packages that we installed (fetches all the code of all the dependencies installed using npm)
(there are so many codes other tha parcel - our proj has a dependency parcel, so got that code in node modules, parcel also has dependency on other packages/libraries/dependencies- thoise also get installe, these dependencies might further have other dependencies -this is called TRANSITIVE DEPENDENCIES)

NODE MODULES(extremely bulky) is the collection of dependencies
we put it inside .gitignore
it's so bulky hence don't put it on github & production

but we do put package.json & package-lock.json in github & production (imp as maintains the version of dependencies) & if i have these package.json & package-lock.json, can recreate node modules through "npm install" command in this repository. hence not required to push node modules ionside git

whatever you can regenerate, don't put it on github

.gitignore - contains all the files/ modules you don't want to upload on git

explaining npx parcel index.html
npx is similar to npm (npx used to execute a package) (here executing parcel) (npm is used to install a package)

way to get react in our code
through cdn link to import react & react dom (not a good way as it first make a network to unpackaged site and also here specific react there (so need to update everytime))
better way - to get react as dependency (will get included in node modules also & also in package json)

normal js code doesn't have import/ export (js file refrenced in index.html file are treated as browser script)(so we need to tell it that it's not a normal js file but a module (so add type="module" in index.html where refrencing that js file))


PARCEL 
created dev build for you
created localhost for you (hosting on local server)
automatically refreshing the page once save the code (as it's doing hmr(hot module replacement)) Parcel uses file watching algorithm(keeps an eye on all the files, as soon as you save, parcel builds it again) helps in hmr 
(with each build, the time is reducing as it's doing caching)(faster build)

The most expensive thing on vrowser is image uploading so, parcel helps in image optimisation

PARCEL DOES
-Dev build
-Local server
-HMR= hot module Replacement (hot loading)
-file watching algo (written in C++)
-Caching - faster builds
-Image Optimisation
-Minification
-Bundling
-Compressing files
-consistent hashing
-code splitting
-differential bundling (your app can be opened inside any browser & even older browsers) (diff bundling - parcel adds some extra things to help you run on even older browser)
-better error suggestions (better error handling)
-http hosting
-tree shaking (parcel will remove unused code for you)




React along with bundler(parcel) and other things helps in faster website creation (makes react app faster)
-creates diff dev & production build (prod build more time)

-npx parcel build index.html (the build here makes parcel bundle everything, minimize it & put everything inside dist folder)(earlier dist was containing development build & now will contain prod build files)(this can be rebuild everytime we execute the command)
dist along with other files- is now production ready code
production build is highly optimized code 
parcel cache- also regeneratable

browserslist is an npm package
adding this in package.json (what to write in those values -website browserslist)
"browserslist":{
    "last 2 Chrome versions",
    "last 2 Firefox versions"
  }
can configure as per country etc (can mnake your app work for previous/older versions also)



COMMAND LIST
-npm install -D parcel (to install)
-npx parcel index.html (command to setup our proj in parcel (or igniting our app, ie.e hosting our app on local server - localhost:1234))
{note: the core dump & size error resolved using command- ulimit -c unlimited }
-npm install react (not using -D as want to install it as normal dependency)
-npx parcel build index.html (command to build in production)(here will get an error, as conflict encountered due to "main" inside package.json (remove that line as while buuilding in prod, main is mentioned in command (here, index.html)))(main - tells the entry point)

{to resolve malloc() size issue, core dumped issue
-lsof -i :1234 (command to check what's running on 1234 port
)
-nvm install --lts
-nvm use --lts
-npm update
-lsof -i :1234
-rfkill
-npx parcel index.html (means executing parcel through source file index.html)(creating script in package.json such that don't have to use this command again & again)
GO TO PACKAGE.JSON & find script of start - is required to start a proj
}
-npm run start or npm start(behind the scenes execute the pacakge parcel hosting using script start in dev build)
-npm run build (for production build)




