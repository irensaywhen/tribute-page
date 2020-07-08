// Gulp modules
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const eslint = require("gulp-eslint");

// Webpack modules
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");

// Other modules
const pngquant = require("imagemin-pngquant");
const browserSync = require("browser-sync").create();

function assets() {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        return reject(err);
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join("\n")));
      }
      resolve();
    });
  });
}

function lint() {
  return (
    gulp
      .src(["src/js/**/*.js"])
      // eslint() attaches the lint output to the eslint property
      // of the file object so it can be used by other modules.
      .pipe(eslint())
      // eslint.format() outputs the lint results to the console.
      // Alternatively use eslint.formatEach() (see Docs).
      .pipe(eslint.format())
      // To have the process exit with an error code (1) on
      // lint error, return the stream and pipe to failOnError last.
      .pipe(eslint.failOnError())
  );
}

function styles() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["defaults"],
      })
    )
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
}

function copyHTML() {
  return gulp.src("./src/*.html").pipe(gulp.dest("./dist"));
}

function copyImages() {
  return gulp
    .src("img/*")
    .pipe(
      imagemin({
        progressive: true,
        use: [pngquant()],
      })
    )
    .pipe(gulp.dest("dist/img"));
}

function serve(done) {
  browserSync.init(
    {
      server: "./dist",
      port: 8080,
      host: "0.0.0.0",
    },
    done
  );
}

function reload(done) {
  browserSync.reload();
  done();
}

function watch() {
  gulp.watch("src/scss/**/*.scss", styles);
  gulp.watch("src/js/**/*.js", gulp.series(lint, assets, reload));
  gulp.watch("./src/*.html").on("change", gulp.series(copyHTML, reload));
}

exports.assets = assets;
exports.copy = gulp.parallel(copyHTML, copyImages);
//exports.default = defaultTask;
exports.develop = gulp.series(
  lint,
  assets,
  copyHTML,
  copyImages,
  styles,
  serve,
  watch
);
exports.styles = styles;
