var gulp = require('gulp'),
  run = require('./task/run'),
  nodemon = require('./task/nodemon'),
  jsx = require('./task/jsx'),
  sass = require('./task/sass'),
  clean = require('./task/clean');

/**
 * NOTE: The purpose of this file is to
 * specify all tasks. Do not put task-specific
 * logic here. Use the /gulp directory for that.
 */

gulp.task('default', run(['jsx', 'sass']));
gulp.task('dev', run(['jsx-watch', 'sass-watch'], 'nodemon'));

gulp.task('jsx', jsx.toJs('./lib/components/App/App.jsx', 'app.js'));
gulp.task('jsx-watch', jsx.toJsWatch('./lib/components/App/App.jsx', 'app.js'));

gulp.task('sass', sass.toCss('./lib/components/App/App.scss', 'app.css'));
gulp.task('sass-watch', sass.toCssWatch('./lib/components/App/App.scss', 'app.css'));

gulp.task('nodemon', nodemon.start);

gulp.task('clean', clean.clean);

