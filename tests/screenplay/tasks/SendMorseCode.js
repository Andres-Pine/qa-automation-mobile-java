const Enter = require('../interactions/Enter');
const Tap = require('../interactions/Tap');

class SendMorseCode {
  constructor(code) {
    this.code = code;
  }

  static withText(code) {
    return new SendMorseCode(code);
  }

  async performAs(actor) {
    await actor.attemptsTo(
      Enter.text(this.code).into('id=io.appium.android.apis:id/text'),
      Tap.on('~Vibrate')
    );
  }
}

module.exports = SendMorseCode;
