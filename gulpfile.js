var gulp        = require('gulp');
var source      = require('vinyl-source-stream');
var browserify  = require('browserify');

// browserify bundle for direct browser use.
gulp.task("bundle", function(){
  bundler = browserify('./src/index.js',
    {
      standalone: 'browserDebugJS',
      debug: false
    });

  return bundler.bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task("default", ["bundle"]);
