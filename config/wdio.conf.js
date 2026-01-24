// wdio.conf.js - Configuración base compartida
exports.config = {
  runner: 'local',
  specs: [__dirname + '/../tests/specs/**/*.spec.js'],
  exclude: [],
  maxInstances: 1,
  
  capabilities: [],
  
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  
  framework: 'mocha',
  reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false,
  }]],
  
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  // Hooks
  before: function (capabilities, specs) {
    // Configuración global antes de tests
  },

  afterTest: async function(test, context, { error, result, duration, passed, retries }) {
    await driver.takeScreenshot();
  }
};
