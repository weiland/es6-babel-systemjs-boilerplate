# ES6 6to5 & SystemJS Boilerplate for modern JS apps

This is an ES6 Boilerplate where the source code is transpiled to ES5 via 6to5 and  
all modules are bundled into one single file via SystemJS for production without including any Traceur runtime.

## Getting started
```bash
# clone this repository
git clone https://github.com/weiland/es6-6to5-systemjs-boilerplate.git
cd es6-6to5-systemjs-boilerplate

# install node dependencies
npm install

# build your code
gulp build

# automatically re-build the bundle on every change in the src
gulp watch
```

### Development
Place your ES6 javascript code in the `src` directory.  
The `index.html` is your entry point. (run `gulp build` to make sure it exists)  
Run something like `server`, `live-server`, `puer` (or what kind of local server you prefer)  

For development, i offer using the  `index_dev.html` which depends on the bower `system.js` package and  
also includes a traceur runtime (which is only used for development)  
Run `bower install` to install the system.js bower package.  

### Requirements
The project depends on node, gulp, systemjs-builder and 6to5.  






### Todos
This project was just a quick-start and there are still some bugs and things left todo
- [ ] improve build task 
- [ ] add a small livereload webserver / browerSync
- [ ] try to move all gulp tasks to npm scripts
- [ ] add more and more complex examples

## 
The project's main idea is to transpile  ES6 modules to ES5 and handle the modules via SystemJS' self executing bundle  
which means that we don't need to include any traceur or es6-module-loader etc.  
The source can/should be written in ES6 and is build to one single bundle file.  


Feel free to contribute :)
