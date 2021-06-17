
const gulp = require(`gulp`);
const imagemin = require(`gulp-imagemin`);

// npx gulp images
const images = () => {
  return gulp
    .src(`src/img/**/*.{png,jpg,svg}`)
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 90, progressive: true }),
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.svgo(),
      ]))
    .pipe(gulp.dest(`build/img`));
};

module.exports = images;
