const Actor = require('../actors/Actor');
const UseApp = require('../abilities/UseApp');
const NavigateToMorseCode = require('../tasks/NavigateToMorseCode');
const SendMorseCode = require('../tasks/SendMorseCode');
const Wait = require('../interactions/Wait');

describe('ApiDemos Android - Morse Code (Screenplay)', () => {
  let user;

  before(() => {
    user = new Actor('Usuario Móvil').can(UseApp.withDriver());
  });

  it('Debe navegar a Morse Code y enviar mensaje', async () => {
    await user.attemptsTo(
      NavigateToMorseCode.now(),
      SendMorseCode.withText('123'),
      Wait.for(2000)
    );
  });
});
