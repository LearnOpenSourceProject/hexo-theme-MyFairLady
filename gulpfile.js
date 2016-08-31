var gulp = require('gulp');
var cssmin = require('gulp-minify-css');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');
var postcss = require('gulp-postcss');

gulp.task('sass', function() {
    return gulp.src('./source/sass/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(postcss([autoprefixer({
            browsers: ['last 2 versions']
        })]))
        .pipe(gulp.dest('./source/dist'));
});

gulp.task('sass-lint', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});

gulp.task('watch', ['sass'], function() {
    gulp.watch('./source/sass/**/*.scss', ['sass']);
    gulp.watch('./source/sass/**/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass-lint', 'watch']);
