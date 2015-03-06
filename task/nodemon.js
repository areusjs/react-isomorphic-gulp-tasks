var nodemon = require('gulp-nodemon'),
  livereload = require('gulp-livereload');

exports.start = start;

function start() {
  var nm = nodemon({
    script: 'server.js',
    watch: ['server.js', 'dist/**/*.js']
  });

  //nm.on('restart', function () {
    //livereload.reload();
  //});

  return nm;
}
