var gulp   = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('default', ['watch']);

gulp.task('jshint', function() {
    return gulp.src(['public/js/**/*.js','app/**/*.js','server.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
    gulp.watch(['public/js/**/*.js','app/**/*.js','server.js'], ['jshint']);
});
