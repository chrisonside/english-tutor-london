// As browserSync's server can only deal with static files, I'm using gulp-connect-php
// We tell browserSync to forward all calls from localhost:8080 to 127.0.0.1:8000,
// which is 127.0.0.1 (usually same as localhost) plus the port on which you want to access the webserver (8000).
// This won't work if 8000 is already in use
// This doesn't rely on MAMP - gulp-connect-php uses the built-in server in PHP 5.4.0+
var gulp = require('gulp');
var connect = require('gulp-connect-php');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('connect', function() {
    connect.server({}, function (){
	    browserSync({
	    	proxy: '127.0.0.1:8000',
	     	port: 8080,
        	open: true,
        	notify: false
	    });
	  });
});

gulp.task('sass', function(){
	return gulp.src('sass/main.scss') // gulp.src tells Gulp which files to use
		.pipe(sass()) // sends it through a gulp plugin
		.pipe(gulp.dest('css')) // tells Gulp where to output the files after task completion
		.pipe(browserSync.reload({ // allow BrowserSync to inject new CSS styles into browser
			stream: true
		}))
});

gulp.task('default', ['connect', 'sass'], function(){
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch(['index.html', 'viewModules/*.php'], browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});