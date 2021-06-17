const gulp = require(`gulp`);
const rename = require(`gulp-rename`);
const server = require(`browser-sync`).create();
const terser = require(`gulp-terser`);

const js = () => {
  return gulp.src("src/js/script.js")
    .pipe(terser())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(server.stream());
}

module.exports = js;
