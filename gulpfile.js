const gulp = require('gulp'),
    clean = require('gulp-clean'),
    browser = require('browser-sync'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    usemin = require('gulp-usemin'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    jsReport = require('jshint-stylish'),
    ghPages = require('gulp-gh-pages');


gulp.task('default'/*, ['clean']*/, function() {
    gulp.start('sass', 'usemin', 'copyFiles')
});

gulp.task('clean', function() {
    return gulp.src('dist/')
        .pipe(clean());
})

gulp.task('copyFiles', function() {
    gulp.src('src/css/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'));
})

gulp.task('babel', function() {
    gulp.src('src/js/autenticar/app-es6/**/*')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/js/autenticar/app/'));

    return gulp.src('src/js/index/app-es6/**/*')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['transform-es2015-modules-systemjs']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js/index/app/'))
})

gulp.task('sass', function() {

    gulp.src('src/css/index.html/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/compilado/'));

    return gulp.src('src/css/autenticar.html/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/compilado/'));
})

gulp.task('usemin', ['babel'], function() {
    return gulp.src('src/**/*.html')
        .pipe(usemin({
            'js': [uglify],
            'css': [autoprefixer, cssmin]
        }))
        .pipe(gulp.dest('dist/'))
})



gulp.task('server', function() {
    browser.init({
        server: {
            baseDir: 'dist/'
        },
        socket: {
            namespace: '/controle-ponto'
        }
    })

    //Change Listeners
    gulp.watch('src/js/index/app-es6/**/*.js', ['babel']);
    gulp.watch('dist/**/*').on('change', browser.reload);
})


/**DEV AREA */
gulp.task('serverDEV', function() {
    browser.init({
        server: {
            baseDir: 'src/'
        },
        socket: {
            namespace: '/controle-ponto'
        }
    })

    //Change Listeners
    gulp.watch('src/js/index/app-es6/**/*.js', ['babelDEV']);
    gulp.watch('src/**/*').on('change', browser.reload);
})

gulp.task('babelDEV', function() {
    gulp.src('src/js/autenticar/app-es6/**/*')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/js/autenticar/app/'));

    return gulp.src('src/js/index/app-es6/**/*')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['transform-es2015-modules-systemjs']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/js/index/app/'))
})


gulp.task('jshint', function() {
    return gulp.src('src/js/index/app-es6/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(jsReport));
})

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
})
