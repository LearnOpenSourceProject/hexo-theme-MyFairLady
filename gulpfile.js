var gulp = require('gulp')
var less = require('gulp-less')
gulp.task('default',function () {
    gulp.src(['source/less/main.less'])
        .pipe(less())
        .pipe(gulp.dest('source/css'));
});
gulp.task('lessWatch',function () {
    gulp.watch('source/less/*.less',['default'])
    gulp.watch('source/less/_partial/*.less',['default'])
})
