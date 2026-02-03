const Tap = require('../interactions/Tap');

class PerformAnimation {
  constructor(times) {
    this.times = times;
  }

  static addButtons(times) {
    return new PerformAnimation(times);
  }

  async performAs(actor) {
    await actor.attemptsTo(
      Tap.on('~Animation'),
      Tap.on('~Default Layout Animations')
    );

    for (let i = 0; i < this.times; i++) {
      await actor.attemptsTo(Tap.on('~Add Button'));
    }
  }
}

module.exports = PerformAnimation;
