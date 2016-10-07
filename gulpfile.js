const gulp = require('gulp'),
browser = require('browser-sync');


gulp.task('server',function(){
    browser.init({
        server:{
            baseDir: 'src/'
        }
    })

    gulp.watch('src/**/*').on('change',browser.reload)
})