var path = require('path');

var gulp = require('gulp');

var to5 = require('gulp-6to5');
var builder = require('systemjs-builder');

var CONFIG = {
  src: 'src/*.js',
  systemBuild: 'systemBuild', // SystemJS build directory
//  dist: 'dist',
  to5: {modules: 'system'},   // use SystemJS as module builder in 6to5
  bundleName: 'main',         // SystemJS bundle name
  bundleBuild: 'dist/app.js'  // final
};

var options = { config: { baseURL: path.resolve( CONFIG.systemBuild ) }};

// compile all ES6 modules to ES5 and register modules via SystemJS
gulp.task('build:system', function () {
  return gulp.src( CONFIG.src )
    .pipe(to5( CONFIG.to5 ))
    .pipe(gulp.dest( CONFIG.systemBuild ));
});

// bundle the SystemJS files to one single bundle standalone file
gulp.task('build:bundle', function () {
  builder.buildSFX(CONFIG.bundleName, CONFIG.bundleBuild, options).then(function() {
    console.log('Build complete');
  })
  .catch(function(err) {
    console.log('Build error');
    console.log(err);
  });

});

gulp.task('build', ['build:system', 'build:bundle']);

gulp.task('watch', function() {
  gulp.watch(CONFIG.src, ['build']);
});
