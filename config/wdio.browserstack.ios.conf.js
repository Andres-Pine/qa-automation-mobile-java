const baseConfig = require('./wdio.conf.js').config;

exports.config = {
  ...baseConfig,
  
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  
  specs: [__dirname + '/../tests/specs/ios.*.spec.js'],
  
  services: ['browserstack'],
  
  capabilities: [{
    'bstack:options': {
      deviceName: 'iPhone 15 Pro',
      osVersion: '17',
      projectName: 'QA Automation Mobile',
      buildName: 'iOS Tests',
      sessionName: 'iOS TestApp Tests',
      debug: true,
      networkLogs: true
    },
    platformName: 'ios',
    'appium:app': process.env.BROWSERSTACK_APP_ID_IOS, // bs://hash_del_app
    'appium:automationName': 'XCUITest'
  }]
};
