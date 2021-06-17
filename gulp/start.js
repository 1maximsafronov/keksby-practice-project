const css = require(`./css`);
const gulp = require(`gulp`);
const copy = require(`./copy`);
const html = require(`./html`);
const clean = require(`./clean`);
const svgsprite = require(`./svgsprite`);
const webpimg = require(`./webpimg`);
const localserver = require(`./localserver`);
const copyImages = require(`./copyImages`);
const js = require(`./js`);

const start = gulp.series(
  clean,
  copy,
  copyImages,
  webpimg,
  css,
  js,
  svgsprite,
  html,
  localserver
);

module.exports = start;
