const Actor = require('../actors/Actor');
const UseApp = require('../abilities/UseApp');
const OpenTestGesture = require('../tasks/OpenTestGesture');
const Wait = require('../interactions/Wait');

describe('TestApp iOS - Test Gesture (Screenplay)', () => {
  let user;

  before(() => {
    user = new Actor('Usuario iOS').can(UseApp.withDriver());
  });

  it('Debe presionar Test Gesture', async () => {
    await user.attemptsTo(
      OpenTestGesture.now(),
      Wait.for(2000)
    );
  });
});
