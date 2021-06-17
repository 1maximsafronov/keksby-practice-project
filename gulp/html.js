const gulp = require(`gulp`);
const include = require(`posthtml-include`);
const htmlmin = require(`gulp-htmlmin`);
const posthtml = require(`gulp-posthtml`);
const plumber = require(`gulp-plumber`);

const html = () => {
  return gulp
    .src(`src/html/*.html`)
    .pipe(posthtml([include()]))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(`build`));
};


module.exports = html;
