const ApiDemosPage = require('../pageobjects/ApiDemos.page');

describe('ApiDemos Android - Validar animaciones', () => {
  it('Debe ingresar a Animation y agregar botones', async () => {
    await ApiDemosPage.tapAnimation();
    await ApiDemosPage.tapDefaultLayoutAnimations();
    await ApiDemosPage.tapAddButton();
    await ApiDemosPage.tapAddButton();
    await ApiDemosPage.tapAddButton();
    await driver.pause(2000);
  });
});
