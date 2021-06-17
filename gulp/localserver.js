const gulp = require(`gulp`);
const css = require(`./css`);
const html = require(`./html`);
const copy = require(`./copy`);
const server = require(`browser-sync`).create();
const svgsprite = require(`./svgsprite`);

const refresh = (done) => {
  server.reload();
  done();
}

const localserver = () => {
  server.init({
    server: `build`,
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch(`src/html/*.html`, gulp.series(html, refresh));
  gulp.watch(`src/img/icon-*.svg`, gulp.series(svgsprite, html, refresh));
  gulp.watch(`src/sass/**/*.{scss,sass}`, gulp.series(css, refresh));
  gulp.watch(`src/js/*.js`, gulp.series(copy, refresh));
};

module.exports = localserver;
