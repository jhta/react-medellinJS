var   gulp           = require('gulp'),
      source         = require('vinyl-source-stream'),
      browserify     = require('browserify'),
      reactify       = require('reactify'),
      watchify       = require('watchify'),
      to5ify         = require('6to5ify');
      rename         = require('gulp-rename'),
      stylus         = require('gulp-stylus'),
      concat         = require('gulp-concat'),
      uglify         = require('gulp-uglify'),
      webserver      = require('gulp-webserver');
      nib            = require('nib');

/**
 * Browserify streaming bundle
 */
function bundleScript(watch){

  /**
   * Browserify bundle options
   */
  var bundler = browserify('dev/js/main.js',{
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true  //show full path for debug
  });

  /**
   * Is update the bundler?
   */
  bundler =(watch)? watchify(bundler):bundler;
  bundler.transform(to5ify); //convert ES6 to ES5

  function rebundle(){
    var stream = bundler.bundle();
    stream.on('end',function(){
      console.log("browserify finished");
    })
    .on('error',function(err){
      console.log(err.message);
    });

    stream.pipe(source('main.js'))
      .pipe(rename('bundle.js')) // so it won't open by mistake when looking for main.js using cmd-T
      .pipe(gulp.dest('dist/js'));

  }

  bundler.on('update',rebundle);
  return rebundle();
}

gulp.task('browserify', function(){
  return bundleScript(false);
});


/**
 * task for CSS pre-processor stylus
 */
gulp.task('stylus', function() {
  gulp.src('dev/assets/styles/**.styl')
    .pipe(stylus({
      use: nib(),
      compress: true, //compress css
    }))
    .pipe(concat('style.css')) //concat css
    .pipe(gulp.dest('dist/assets'));
});


/**
 * [Copy index from dev to dist]
 */
gulp.task('index', function(){
  gulp.src('dev/index.html')
    .pipe(gulp.dest('dist'));
});

/**
 * [Run local server]
 */
gulp.task('server', function() {
  gulp.src('dist')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: false,
      fallback : 'index.html'
  }));
});

/**
 * [Watch changes ]
 */
gulp.task('watch', function() {
    bundleScript(true); // watchify
    gulp.watch('dev/**/*.styl',['stylus']);
    gulp.watch('dev/**/*.html',['index']);
});


gulp.task('dev',['browserify','stylus','index','server','watch']);
