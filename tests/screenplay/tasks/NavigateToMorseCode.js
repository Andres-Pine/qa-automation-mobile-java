const Tap = require('../interactions/Tap');

class NavigateToMorseCode {
  static now() {
    return new NavigateToMorseCode();
  }

  async performAs(actor) {
    await actor.attemptsTo(
      Tap.on('~OS'),
      Tap.on('~Morse Code')
    );
  }
}

module.exports = NavigateToMorseCode;
