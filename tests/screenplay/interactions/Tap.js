class Tap {
  constructor(selector) {
    this.selector = selector;
  }

  static on(selector) {
    return new Tap(selector);
  }

  async performAs(actor) {
    const element = await $(this.selector);
    await element.click();
  }
}

module.exports = Tap;
