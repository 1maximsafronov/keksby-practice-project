const css = require(`./css`);
const gulp = require(`gulp`);
const copy = require(`./copy`);
const html = require(`./html`);
const clean = require(`./clean`);
const svgsprite = require(`./svgsprite`);
const optimizeImages = require(`./images`);
const webpimg = require(`./webpimg`);
const js = require(`./js`);

const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  webpimg,
  css,
  js,
  svgsprite,
  html
);

module.exports = build;
