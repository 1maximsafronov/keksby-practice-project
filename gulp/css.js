const gulp = require(`gulp`);
const csso = require(`postcss-csso`);
const sass = require(`gulp-sass`);
const rename = require(`gulp-rename`);
const server = require(`browser-sync`).create();
const plumber = require(`gulp-plumber`);
const postcss = require(`gulp-postcss`);
const sourcemaps = require(`gulp-sourcemaps`);
const autoprefixer = require(`autoprefixer`);

const css = () => {
  return gulp
    .src(`src/sass/style.scss`)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename(`style.min.css`))
    .pipe(sourcemaps.write(`.`))
    .pipe(gulp.dest(`build/css`))
    .pipe(server.stream());
};


module.exports = css;
