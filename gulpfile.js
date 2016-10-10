const gulp = require('gulp'),
    browser = require('browser-sync'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('babel', function () {

    gulp.src('src/js/app-es6/**/*')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['transform-es2015-modules-systemjs']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/js/app/'))
})

gulp.task('server', function () {
    browser.init({
        server: {
            baseDir: 'src/'
        }
    })

    //Change Listeners 
    gulp.watch('src/js/app-es6/**/*.js', ['babel']);
    gulp.watch('src/**/*').on('change', browser.reload);
})