/**
 * Created by Jitender Kumar on 21-07-2021.
 */

module.exports = {
  configFile: require('path').join(__dirname),
  projectRoot: require('path').join(__dirname, '../'),
  configPath: require('path').join(__dirname, '/config/libraries.js'),
  constants: require('path').join(__dirname, '/constant.js'),
  accountLocaters: require('path').join(__dirname, '/helper/accountHelper.js'),
  elementUtil: require('path').join(__dirname, '/util/elementUtil.js'),
};
