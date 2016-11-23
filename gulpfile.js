var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: ''
		},
	})
});

// Tasks are normally more complex, with 2 additional Gulp methods and a variety of Gulp plugins
gulp.task('sass', function(){
	return gulp.src('sass/main.scss') // gulp.src tells Gulp which files to use
		.pipe(sass()) // sends it through a gulp plugin
		.pipe(gulp.dest('css')) // tells Gulp where to output the files after task completion
		.pipe(browserSync.reload({ // allow BrowserSync to inject new CSS styles into browser
			stream: true
		}))
});

gulp.task('default', ['browserSync', 'sass'], function(){
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('index.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});
