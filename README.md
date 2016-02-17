# React-Hot-Dev-Starter-Kit


##Introduction
A skeleton project for starting with a hot-loading development server to get going straight away... 

Entry is in App.js which has some [react router 2.0](https://github.com/rackt/react-router) commented out code so that it can be easily included in the future by either adding a routes file and importing it or directly adding the routes to the Main.js file.

##So Many Starter-Kits already available for React so why ?!
Well, there's plenty of hot-loading starter kits already out there, to be honest, I'm only creating another one because I found the ones that are out there are either outdated, or bloated with a lot of stuff I don't want.

The [React-Hot-Loader is going to be deprecated](https://github.com/gaearon/react-hot-loader) for the [transform family](https://github.com/gaearon/react-transform-boilerplate) which is totally logical since you get a lot more development goodies included :D 

##What It Includes:
- Webpack config [transforming jsx babel es6](https://babeljs.io/) to javascript into bundle.js found in the public folder
- Transform settings in `.babelrc` using [react-transform](https://github.com/gaearon/babel-plugin-react-transform) which includes:
  1. [react-transform-hmr](https://github.com/gaearon/react-transform-hmr) - used for hot loading and is replacing the React-Hot-Loader
  2. [react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors) - catches errors inside components' render function, rendering the error instead of not showing anything. **No more having to keep the console open endlessly!**
- airbnb [eslint](https://github.com/yannickcr/eslint-plugin-react) settings which I highly recommend using with sublime text's eslint plugin !
- An [express](http://expressjs.com/) dev server which uses [webpack's dev middleware](https://github.com/webpack/webpack-dev-middleware)
- Allows you to serve static files at /images, /css and /js to add your own custom libraries
- Bootstrap V4 Alpha which has been mainly included for their [5 device grid system](http://v4-alpha.getbootstrap.com/layout/grid/) and also their [hidden/show utilities](http://v4-alpha.getbootstrap.com/layout/responsive-utilities/).


##What You Waiting For, I Know You Want It:
```
1. git clone https://github.com/VasilyShelkov/React-Hot-Dev-Starter-Kit.git

2. npm install

3. npm start

4. go to localhost:8080 in the browser of your choice
```
**bathe in the glory of my React-hot-dev-starter-kit and start developing your sexy ideas ASAP**
