var gulp = require('gulp'),
  nodemon = require('./task/nodemon'),
  jsx = require('./task/jsx'),
  sass = require('./task/sass'),
  clean = require('./task/clean');

/**
 * NOTE: The purpose of this file is to
 * specify all tasks. Do not put task-specific
 * logic here. Use the /gulp directory for that.
 */

gulp.task('default', ['jsx', 'sass']);
gulp.task('dev', ['jsx-watch', 'sass-watch', 'nodemon']);

gulp.task('jsx', jsx.toJs);
gulp.task('jsx-watch', jsx.toJsWatch);

gulp.task('sass', sass.toCss);
gulp.task('sass-watch', sass.toCssWatch);

gulp.task('nodemon', nodemon.start);

gulp.task('clean', clean.clean);
