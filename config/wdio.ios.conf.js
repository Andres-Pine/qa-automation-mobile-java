// wdio.ios.conf.js - Configuración iOS
const baseConfig = require('./wdio.conf.js').config;
const path = require('path');

exports.config = {
  ...baseConfig,

  port: 4723,
  path: '/',
  specs: [__dirname + '/../tests/specs/ios.*.spec.js'],

  autoCompileOpts: {
    autoCompile: false
  },

  capabilities: [
    {
      platformName: 'iOS',
      'appium:automationName': 'XCUITest',
      'appium:deviceName': 'iPhone 17 Pro',
      'appium:app': path.join(process.cwd(), 'apps', 'TestApp.app'),
      'appium:newCommandTimeout': 240,
      'appium:noReset': true,
      'appium:fullReset': false
    }
  ]
};
