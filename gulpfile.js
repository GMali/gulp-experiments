var gulp = require('gulp');
var shell = require('gulp-shell');

/**
 * gulp utils
 * Runs ./utils with args and saves the output to file.text
 */
gulp.task('utils', shell.task('./utils args > file.txt'))

