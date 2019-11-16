//JS
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/scss/base.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
});


// gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 
//gulp.task('watch', function () {
//gulp.watch('app/scss/base.scss', ['sass']);
    // Other watchers
//})
