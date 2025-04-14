'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('neobytescore-build');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
