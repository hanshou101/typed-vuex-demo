const CircularDependencyPlugin = require("circular-dependency-plugin")
let circlePlugin = new CircularDependencyPlugin({
  exclude         : /a\.js|node_modules/,       // exclude detection of files based on a RegExp
  failOnError     : 'error',                    // add errors to webpack instead of warnings
  allowAsyncCycles: false,                      // // allow import cycles that include an asyncronous import,    e.g. via import(/* webpackMode: "weak" */ './file.js')
  cwd             : process.cwd(),              // set the current working directory for displaying module paths
});
module.exports = {
  configureWebpack: config => {
    config.plugins.push(circlePlugin);          // intend to detect circular-dependency .
  },
};
