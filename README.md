# React-Hot-Dev-Starter-Kit


##Introduction
A skeleton project for starting with a hot-loading development server to get going straight away...

Entry is in App.js which has some [react router 2.0](https://github.com/rackt/react-router) commented out code so that it can be easily included in the future by either adding a routes file and importing it or directly adding the routes to the Main.js file.

##So Many Starter-Kits already available for React so why ?!
Well, there's plenty of hot-loading starter kits already out there, to be honest, I'm only creating another one because I found the ones that are out there are either outdated, or bloated with a lot of stuff I don't want.

The [React-Transform-Plugin is going to be deprecated](https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf#.rm0ygrt9u) for some other method to be seen... For now just using vanilla checking if hot loading in index.js

##What It Includes:
- Webpack config [transforming jsx babel es6](https://babeljs.io/) to javascript into bundle.js found in the public folder

- Hot loading and error printing using react-redhat

- Testing with Mocha, expect, expect-jsx, react-test-utils. To run tests ```npm test```

- airbnb [eslint](https://github.com/yannickcr/eslint-plugin-react) settings which I highly recommend using with yuour favourite text editor's eslint plugin ! (Tested with Atom and Sublime Text)

- An [express](http://expressjs.com/) dev server which uses [webpack's dev middleware](https://github.com/webpack/webpack-dev-middleware)

- Allows you to serve static files from the public folder such as /images, /css or /js to add your own custom libraries

- Bootstrap V4 Alpha which has been mainly included for their [5 device grid system](http://v4-alpha.getbootstrap.com/layout/grid/) and also their [hidden/show utilities](http://v4-alpha.getbootstrap.com/layout/responsive-utilities/).


##What You Waiting For, I Know You Want It:
```
1. git clone https://github.com/VasilyShelkov/React-Hot-Dev-Starter-Kit.git

2. npm install

3. npm start or npm run dev

4. go to localhost:3000 in the browser of your choice
```
**bathe in the glory of my React-hot-dev-starter-kit and start developing your sexy ideas ASAP**
