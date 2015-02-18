var path = require('path');

var gulp = require('gulp');
var runSequence = require('run-sequence');

var babel = require('gulp-babel');
var builder = require('systemjs-builder');

var CONFIG = {
  src: 'src/*.js',
  systemBuild: 'systemBuild', // SystemJS build directory
//  dist: 'dist',
  babel: {modules: 'system'},   // use SystemJS as module builder in 6to5
  bundleName: 'main',         // SystemJS bundle name
  bundleBuild: 'dist/app.js'  // final
};

var options = {
  //minify: true,
  //sourceMaps: true,
  config: {
    baseURL: path.resolve( CONFIG.systemBuild )
  }
};

// compile all ES6 modules to ES5 and register modules via SystemJS
gulp.task('build:system', function () {
  return gulp.src( CONFIG.src )
    .pipe(babel( CONFIG.babel ))
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

gulp.task('build', function(callback) {
  runSequence('build:system', ['build:bundle'], callback);

});

gulp.task('watch', function() {
  gulp.watch(CONFIG.src, ['build']);
});
