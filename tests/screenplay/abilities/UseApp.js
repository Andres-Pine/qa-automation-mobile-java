class UseApp {
  static withDriver() {
    return new UseApp();
  }

  async findElement(selector) {
    return await $(selector);
  }
}

module.exports = UseApp;
