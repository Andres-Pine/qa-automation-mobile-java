const Enter = require('../interactions/Enter');
const Tap = require('../interactions/Tap');

class CalculateSum {
  constructor(valueA1, valueA2, valueB1, valueB2) {
    this.valueA1 = valueA1;
    this.valueA2 = valueA2;
    this.valueB1 = valueB1;
    this.valueB2 = valueB2;
  }

  static with(valueA1, valueA2, valueB1, valueB2) {
    return new CalculateSum(valueA1, valueA2, valueB1, valueB2);
  }

  async performAs(actor) {
    await actor.attemptsTo(
      Enter.text(this.valueA1).into('~IntegerA'),
      Enter.text(this.valueA2).into('~IntegerA'),
      Enter.text(this.valueB1).into('~IntegerB'),
      Enter.text(this.valueB2).into('~IntegerB'),
      Tap.on('~ComputeSumButton')
    );
  }
}

module.exports = CalculateSum;
