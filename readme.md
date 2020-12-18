Figuring out an IE dev-time issue with Linaria...

- first commit: just a super bare bones webpack 5 + react 17 setup

- second commit: installed linaria, making sure to add browserslist config to support ie 10 & 11

  - You can see that, just using the `css` template literal for creating classnames,  IE doesn't run into any problems. The `app.js` bundle that webpack outputs doesn't contain any ES6 syntax like the spread operator or const or arrows. (Babel takes care of this.)
