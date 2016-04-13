var gulp = require('gulp')
var less = require('gulp-less')
var cssmin = require('gulp-minify-css');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
gulp.task('default',function () {
    gulp.src(['source/less/main.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(postcss([autoprefixer({
            browsers: ['last 2 versions']
        })]))
        .pipe(gulp.dest('source/css'));
});
gulp.task('lessWatch',function () {
    gulp.watch('source/less/*.less',['default'])
    gulp.watch('source/less/_partial/*.less',['default'])
    gulp.watch('source/less/_partial/post/*.less',['default'])
})
