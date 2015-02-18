# ES6 babel & SystemJS Boilerplate 

This is an ES6 Boilerplate where the source code is transpiled to ES5 via Babel (old 6to5) and where  
all modules are bundled into one single file via SystemJS for production without including any Traceur runtime.

### Getting started
```bash
# clone this repository
git clone https://github.com/weiland/es6-babel-systemjs-boilerplate.git
cd es6-babel-systemjs-boilerplate

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
Run something like `server`, `live-server`, `puer` (or whatever kind of local server you use)  

### Requirements
The project depends on node, gulp, systemjs-builder and babel.  


### Todos
This project was just a quick-start and there are still some bugs and things left todo
- [ ] improve build task 
- [ ] add a small livereload webserver / browerSync
- [ ] try to move all gulp tasks to npm scripts
- [ ] add more and more complex examples
- [ ] watch task should not die from a compiling error

## 
The project's main idea is to transpile  ES6 modules to ES5 and handle the modules via SystemJS' self executing bundle  
which means that we don't need to include any traceur or es6-module-loader etc.  
The source can/should be written in ES6 and is build to one single bundle file.  


### Contributing
Feel free to contribute :)
