// 'use strict';


var gulp = require('gulp'); // gulp plugin
var sass = require('gulp-sass'); // gulp-sass plugin
var browserSync = require('browser-sync').create();
// var reload = browserSync.reload;

// gulp.task('browser-sync', function () {
//     browserSync.init({ proxy: 'http://localhost/src/'} );
// });


gulp.task('sass', function () { // sass is the task-name
  gulp.src('src/sass/**/*.scss') // get source files ending with .scss
    .pipe(sass().on('error', sass.logError)) // error handling
    .pipe(gulp.dest('src/css')) // outputs in the destination folder

});

gulp.task('sass:watch',function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});

// gulp.task('default', ['browser-sync', 'sass', 'watch']);