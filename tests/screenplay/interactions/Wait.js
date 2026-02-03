class Wait {
  constructor(milliseconds) {
    this.milliseconds = milliseconds;
  }

  static for(milliseconds) {
    return new Wait(milliseconds);
  }

  async performAs(actor) {
    await driver.pause(this.milliseconds);
  }
}

module.exports = Wait;
