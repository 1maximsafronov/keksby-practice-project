const gulp = require(`gulp`);
const ghpages = require(`gh-pages`);
const build = require(`./build`);

const loadOnGithub = () => {
  return ghpages.publish(`build`, function () { });
};

const publish = gulp.series(build, loadOnGithub);

module.exports = publish;
