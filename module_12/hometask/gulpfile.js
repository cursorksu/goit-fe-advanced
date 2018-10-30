var gulp = require('gulp'),
    sass = require('gulp-sass'),//Подключаем Sass пакет
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    minify = require('gulp-minify'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    babel = require("gulp-babel");

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('app/sass/main.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/sass/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
});

gulp.task("babel", function () {
    return gulp.src("app/js/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("app/js"));
});

gulp.task('compress', function() {
    gulp.src('app/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dest/images'))
});

gulp.task('minify-css', () => {
    return gulp.src('app/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dest/css'));
});

gulp.task('minify-js', function() {
    gulp.src(['app/js/*.js', 'app/js/*.mjs'])
        .pipe(minify())
        .pipe(gulp.dest('dest/js'))
});
gulp.task('minify-html', () => {
    return gulp.src('app/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dest'));
});

gulp.task('build', ['babel', 'compress', 'minify-css','minify-js', 'minify-html'], function() {
    gulp.build('images/*', ['compress']);
    gulp.build('app/js/**/*.js', ['babel']);
    gulp.build('app/css/**/*.css', ['minify-css']);
    gulp.build('app/js/**/*.js', ['minify-js']);
    gulp.build('app/*.html', ['minify-html']);

});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});



