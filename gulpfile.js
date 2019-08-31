const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const clean = require('postcss-clean');
const concat = require('gulp-concat');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const notify = require('gulp-notify');
const postcss = require("gulp-postcss");
const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

// 画像の最適化
function imgmin() {
  return gulp.src('src/images/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin([
      pngquant('65-80'),
      mozjpeg({quality: 85, progressive: true}),
      imagemin.svgo(),
      imagemin.optipng(),
      imagemin.gifsicle()
    ]))
    .pipe(gulp.dest('dist/images'));
};

//jsファイルを結合して圧縮
function jsCom() {
  return gulp
    .src("src/js/**/*.js", { sourcemaps: true })
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(plumber())
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js", { sourcemaps: 'maps' }));
}

// sassをコンパイルして、プレフィクサーつけて圧縮
function sassCom() {
  return gulp
    .src("src/sass/*.scss")
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded"
    }).on("error", sass.logError))
    .pipe(postcss([
      // autoprefixer({
      //   browsers: ["last 2 versions", "ie >= 11", "Android >= 4"],
      //   cascade: false
      // }),
      autoprefixer(),
      clean()
    ]))
    .pipe(gulp.dest("dist/css"))
};

const browserSyncOption = {
  // port: 8080,
  server: {
    // baseDir: '',
    index: 'index.html',
  },
  reloadOnRestart: true,
};

function browsersync(done) {
  browserSync.init(browserSyncOption);
  done();
}

function watchFiles(done) {
  const browserReload = () => {
    browserSync.reload();
    done();
  };
  gulp.watch('src/sass').on('change', gulp.series(sassCom, browserReload));
  gulp.watch('src/js').on('change', gulp.series(jsCom, browserReload));
  gulp.watch('src/images').on('change', gulp.series(imgmin, browserReload));
  gulp.watch('*.html').on('change', gulp.series(browserReload));
}

gulp.task('default', gulp.series(gulp.parallel(sassCom, jsCom, imgmin), gulp.series(browsersync, watchFiles)));

gulp.task("imgmin", imgmin);
gulp.task('jsCom', jsCom);
gulp.task('sassCom', sassCom);