const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', () =>
    gulp.src('./style/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./style'))
);

gulp.task('sass:watch', () => {
    gulp.watch('./style/**/*.scss', ['sass']);
});
