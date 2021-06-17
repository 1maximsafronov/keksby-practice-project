const gulp = require(`gulp`);
const start = require(`./gulp/start`);
const build = require(`./gulp/build`);
const publish = require(`./gulp/publish`);
const clean = require(`./gulp/clean`);

module.exports.start = start
module.exports.build = build;
module.exports.publish = publish;
module.exports.clean = clean;
