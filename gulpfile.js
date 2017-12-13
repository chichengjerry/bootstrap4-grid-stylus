// Gulp Task runner

const path = require('path');
const del = require('del');

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const src = path.join(__dirname, 'styl');
const dist = path.join(__dirname, 'dist');

gulp.task('clean', (done) => del([ dist ]).then(() => done()));

gulp.task('stylus', () => {
  return gulp.src(src + '/index.styl')
    .pipe(plugins.stylus({
      compress: false
    }))
    .pipe(plugins.autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest(dist))
});

gulp.task('default', (done) => plugins.sequence('clean', 'stylus', done));
