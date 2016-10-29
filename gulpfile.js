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



/**************TASKS para Distribuição**************/

//Task de Build do projeto
gulp.task('build', ['clean'], function() {
    gulp.start('sass', 'usemin', 'copyFiles')
});

//Task de Upload para github Pages
gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});


//Limpeza da pasta dist
gulp.task('clean', function() {
    return gulp.src('dist/')
        .pipe(clean());
});

//Copia os outros arquivos arquivos
gulp.task('copyFiles', function() {
    gulp.src('src/css/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'));
});

//Transpila o código ES6 para ES5
gulp.task('babel', function() {

    //Transpila js Index.html
    gulp.src('src/js/index/app-es6/**/*')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js/index/app/'));

    //Trasnpila js Home.html
    return gulp.src('src/js/home/app-es6/**/*')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['transform-es2015-modules-systemjs']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js/home/app/'))
});

//Compila o código SASS
gulp.task('sass', function() {

    //Home.html
    gulp.src('src/css/html.home/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/compilado/'));

    //Index.html
    return gulp.src('src/css/html.index/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/compilado/'));
});

//Copia os arquivos HTML e faz o minify
gulp.task('usemin', ['babel'], function() {
    return gulp.src('src/**/*.html')
        .pipe(usemin({
            'js': [uglify],
            'css': [autoprefixer, cssmin]
        }))
        .pipe(gulp.dest('dist/'))
});

//Servidor Baseado no DIST
gulp.task('server', function() {
    browser.init({
        server: {
            baseDir: 'dist/'
        }
    });

    //Change Listeners
    gulp.watch('dist/**/*').on('change', browser.reload);
});


/**************TASKS DE DEVELOP **************/

//Servidor de desenvolvimento
gulp.task('serverDEV', function() {
    browser.init({
        server: {
            baseDir: 'src/'
        },
        socket: {
            namespace: '/controle-ponto'
        }
    });

    //Change Listeners
    gulp.watch('src/js/**/*.js', ['babelDEV']);
    gulp.watch('src/**/*').on('change', browser.reload);
});

//Transpiler de Desenvolvimento
gulp.task('default', function() {
    gulp.start('babelDEV', 'sass', 'serverDEV')
});


gulp.task('babelDEV', function() {
    gulp.src('src/js/index/app-es6/**/*')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/js/index/app/'));

    return gulp.src('src/js/home/app-es6/**/*')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015'],
            plugins: ['transform-es2015-modules-systemjs']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/js/home/app/'))
});


gulp.task('jshint', function() {
    return gulp.src('src/js/index/app-es6/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(jsReport));
});
