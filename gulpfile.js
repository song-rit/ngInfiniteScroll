
var gulp = require('gulp');

var browserSync = require('browser-sync');


gulp.task('start', function() {
	console.log('Gulp Start... OK');
});


gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['start', 'browser-sync'], function() {
	gulp.watch(['*.html'], browserSync.reload);
	gulp.watch(['*.js'], browserSync.reload);
});

