/**
 * Created by Jitender Kumar on 21/07/2021.
 */
let router = require('../route.js');
let config;
let configfile;
let environment;
let env;
let flag = 0;

for (let i in process.argv) {
  environment = process.argv[i];
  switch (environment) {
    case 'DEV':
      flag++;
      config = require('./dev-config.js');
      configfile = './config/dev-config';
      env = 'DEV';
      break;

    case 'TST':
      flag++;
      config = require('./test-config.js');
      configfile = './config/test-config'
      env = 'TST';
      break;

    case 'PRD':
      flag++;
      config = require('./prod-config.js');
      configfile = './config/prod-config';
      env = 'PRD';
      break;

    default:
      continue;
  }
  break;
}

if (flag == 0) {
  console.log('Please pass the environment (DEV/TST/PRD) in the command..');
  process.exit(1);
}

module.exports = {
  environment: environment,
  expect: require('chai').expect,
  config: config,
  configfile: configfile,
  env: env,
};
