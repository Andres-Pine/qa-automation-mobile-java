const Actor = require('../actors/Actor');
const UseApp = require('../abilities/UseApp');
const CalculateSum = require('../tasks/CalculateSum');
const Wait = require('../interactions/Wait');

describe('TestApp iOS - Suma (Screenplay)', () => {
  let user;

  before(() => {
    user = new Actor('Usuario iOS').can(UseApp.withDriver());
  });

  it('Debe realizar suma de números', async () => {
    await user.attemptsTo(
      CalculateSum.with('10', '12', '12', '10'),
      Wait.for(2000)
    );
  });
});
