var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
	gulp.src('./src/**/*.js')
		.pipe(concat('nuwindow-promises.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['default'], function() {
	gulp.watch('./src/**/*.js', ['scripts']);
});

gulp.task('build', ['default']);

gulp.task('default', ['scripts'], function() {

});