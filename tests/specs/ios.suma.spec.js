const TestAppPage = require('../pageobjects/TestApp.page');

describe('TestApp iOS - Validar suma', () => {
  it('Debe realizar suma de números', async () => {
    await TestAppPage.tapTestGesture();
    await driver.pause(1000);
    
    await TestAppPage.enterIntegerA('10');
    await TestAppPage.enterIntegerA('12');
    
    await TestAppPage.enterIntegerB('12');
    await TestAppPage.enterIntegerB('10');
    
    await TestAppPage.tapComputeSum();
    await driver.pause(2000);
  });
});
