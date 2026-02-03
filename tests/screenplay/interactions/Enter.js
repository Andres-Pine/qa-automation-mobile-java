class Enter {
  constructor(text) {
    this.text = text;
    this.targetSelector = null;
  }

  static text(text) {
    return new Enter(text);
  }

  into(selector) {
    this.targetSelector = selector;
    return this;
  }

  async performAs(actor) {
    const element = await $(this.targetSelector);
    await element.setValue(this.text);
  }
}

module.exports = Enter;
