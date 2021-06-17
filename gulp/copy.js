const gulp = require(`gulp`);

const copy = () => {
  return gulp
    .src([
      `src/*.ico`,
      `src/img/**/*.svg`,
      `src/fonts/**/*.{woff,woff2}`,
    ], {
      base: `src`,
    })
    .pipe(gulp.dest(`build`));
};

module.exports = copy;
