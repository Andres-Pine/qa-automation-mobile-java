const baseConfig = require('./wdio.conf.js').config;
require('dotenv').config();

exports.config = {
  ...baseConfig,
  
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  
  specs: [__dirname + '/../tests/specs/android.*.spec.js'],
  
  services: ['browserstack'],
  
  capabilities: [{
    'bstack:options': {
      deviceName: 'Google Pixel 7',
      osVersion: '13.0',
      projectName: 'QA Automation Mobile',
      buildName: 'Android Tests',
      sessionName: 'Android ApiDemos Tests',
      debug: true,
      networkLogs: true
    },
    platformName: 'android',
    'appium:app': process.env.BROWSERSTACK_APP_ID, // bs://hash_del_app
    'appium:automationName': 'UiAutomator2'
  }]
};
