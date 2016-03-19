var gulp = require('gulp')
var less = require('gulp-less')
var cssmin = require('gulp-minify-css');
gulp.task('default',function () {
    gulp.src(['source/less/main.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('source/css'));
});
gulp.task('lessWatch',function () {
    gulp.watch('source/less/*.less',['default'])
    gulp.watch('source/less/_partial/*.less',['default'])
    gulp.watch('source/less/_partial/post/*.less',['default'])
})
