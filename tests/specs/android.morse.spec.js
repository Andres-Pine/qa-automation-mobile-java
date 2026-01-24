const ApiDemosPage = require('../pageobjects/ApiDemos.page');

describe('ApiDemos Android - Ingreso a modalidad morse', () => {
  it('Debe ingresar a Morse Code y vibrar', async () => {
    await ApiDemosPage.tapOS();
    await ApiDemosPage.tapMorseCode();
    await ApiDemosPage.enterText('123');
    await ApiDemosPage.tapVibrate();
    await driver.pause(2000);
  });
});
