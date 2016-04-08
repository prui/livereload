var gulp = require('gulp');
var express = require('express');
var livereload = require('gulp-livereload');


var app = express();

var paths = {
  // sass: ['./scss/**/*.scss']
};

gulp.task('default', ['watch', 'createServer']);


gulp.task('watch', function() {
  var server = livereload.listen({
    basePath: 'www'
  });
  gulp.watch('www/**/*.*', function(file) {
    gulp.src(file.path)
      .pipe(livereload());
  });
});

gulp.task('createServer', function(done) {
  app.use(express.static('www'));
  var server = app.listen(8081, function() {
    var port = server.address().port
    console.error("服务监听%s端口成功", port)
  });

});
