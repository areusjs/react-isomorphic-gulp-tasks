var gulp = require('gulp'),
  runSequence = require('run-sequence').use(gulp);

module.exports = function (/*...*/) {
  var args = Array.prototype.slice.call(arguments);
  return function (done) {
    args.push(done);
    return runSequence.apply(null, args);
  };
};
