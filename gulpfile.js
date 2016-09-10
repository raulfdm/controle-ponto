const gulp = require('gulp'),
browser = require('browser-sync');


gulp.task('server',function(){
    browser.init({
        server:{
            baseDir: 'client/'
        }
    })

    gulp.watch('client/**/*').on('change',browser.reload)
})