// https://css-tricks.com/gulp-for-beginners/

// So after installing gulp globally: sudo npm install gulp -g
// Then running `npm init` in our project to create the package.json
// And installing Gulp into the project locally: npm install gulp --save-dev
// --save-dev ensures gulp gets added to devDependencies in package.json
// dependencies are required to run, devDependencies only to develop

// I also installed the plugin gulp-sass - npm install gulp-sass --save-dev
// And npm install browser-sync --save-dev (no gulp- prefix as Browser Sync works with Gulp so no plugin required)


// require tells Node to look in node_modules for package named gulp
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
// We need to create a browsersync task to enable Gulp to spin up a web server (for development) using BrowserSync.
// As we're running a server, we need to let Browser Sync know where the root of the server should be.
// In our case it's the home folder
gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: ''
		},
	})
});

// These tasks can also be run in the command line - e.g. gulp hello
gulp.task('hello', function(){
	console.log('hi there');
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

// You can use node globs (matching patterns) for file paths if you want
// e.g. **/*.scsss matches any file ending with .scss in root folder and any child directories
// *.+(scss|sass) would match any file ending with .scss or .sass in root folder

// You could watch one type of file individually. 
gulp.watch('sass/**/*.scss', ['sass']); 

// But usually, you want mulitple watch processes. So you can group them into a watch task.
// Also we can run watch and browserSync together
// This tells watch task that browserSync must be completed before watch is allowed to run
// We also want sass to run before watch, so the CSS will already be the latest whenever we run a Gulp command
// So if I run gulp watch in command line...
// ... Gulp will start browserSync and sass tasks concurrently...
// ... And when both tasks are completed, only then will watch run.
gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('sass/**/*.scss', ['sass']);
	// Then other watchers would go here, which call on BS's reload function
	gulp.watch('index.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});



