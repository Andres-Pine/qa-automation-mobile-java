// wdio.android.conf.js - Configuración Android
const baseConfig = require('./wdio.conf.js').config;
const path = require('path');

exports.config = {
  ...baseConfig,

  port: 4723,
  path: '/',
  specs: [__dirname + '/../tests/specs/android.*.spec.js'],

  autoCompileOpts: {
    autoCompile: false
  },

  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'Android Emulator',
      'appium:app': path.join(process.cwd(), 'apps', 'ApiDemos-debug.apk'),
      'appium:autoGrantPermissions': true,
      'appium:newCommandTimeout': 240,
      'appium:noReset': false,
      'appium:fullReset': false
    }
  ]
};