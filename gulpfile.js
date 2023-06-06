const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
// const imagemin = require('gulp-imagemin');
// const changed = require('gulp-changed');


function style() {
    return gulp.src('./build/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./asests/css'))
        .pipe(browserSync.stream())
}

function javascript() {
    return gulp.src("./build/js/*.js")
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./asests/js'))
        .pipe(browserSync.stream())
}

// function image() {
//     return gulp.src("./build/images/*.images")
//         .pipe(imagemin())
//         .pipe(gulp.dest('./asests/images'))
//         .pipe(browserSync.stream())
// //         gulp.src(imgSrc)
// }


function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./build/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js', javascript);
    // gulp.watch('./images/**/*.images', image);

}


exports.style = style;
exports.watch = watch;
exports.javascript = javascript;
// exports.image = image;