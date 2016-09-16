var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 6639,
      livereload: true,
      open: true,
      fallback: './app/index.html'
    }));
});