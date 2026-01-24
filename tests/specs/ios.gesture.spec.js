const TestAppPage = require('../pageobjects/TestApp.page');

describe('TestApp iOS - Validar Test Gesture', () => {
  it('Debe presionar Test Gesture', async () => {
    await TestAppPage.tapTestGesture();
    await driver.pause(2000);
  });
});
