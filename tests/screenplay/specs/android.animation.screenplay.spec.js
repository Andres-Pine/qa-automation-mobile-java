const Actor = require('../actors/Actor');
const UseApp = require('../abilities/UseApp');
const PerformAnimation = require('../tasks/PerformAnimation');
const Wait = require('../interactions/Wait');

describe('ApiDemos Android - Animaciones (Screenplay)', () => {
  let user;

  before(() => {
    user = new Actor('Usuario Móvil').can(UseApp.withDriver());
  });

  it('Debe ingresar a Animation y agregar botones', async () => {
    await user.attemptsTo(
      PerformAnimation.addButtons(3),
      Wait.for(2000)
    );
  });
});
