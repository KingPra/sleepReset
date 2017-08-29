const gulp = require('gulp');
const sass = require('gulp-sass');
const browser = require('gulp-browser');
const strip = require('gulp-strip-comments');

gulp.task('default', ['html', 'css', 'js', 'sounds']);

gulp.task('html', () => {
  gulp.src('*.html')
  .pipe(strip())
  .pipe(gulp.dest('docs/'))
});

gulp.task('css', () => {
  gulp.src('*.scss')
  .pipe(sass())
  .pipe(strip.text())
  .pipe(gulp.dest('docs'))
});

gulp.task('js', () => {
  gulp.src('*.js')
  .pipe(strip())
  .pipe(gulp.dest('docs/'))
});

gulp.task('sounds', () => {
  gulp.src('sounds/*.mp3')
  .pipe(gulp.dest('docs/sounds'))
});

gulp.task('watch', ['default'], () => {
  gulp.watch('*.html', ['html']);
  gulp.watch('*.scss', ['css']);
  gulp.watch('*.js', ['js']);
  gulp.watch('sounds/*.mp3', ['sounds']);
});
