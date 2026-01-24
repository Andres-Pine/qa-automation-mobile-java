// TestApp.page.js - Page Object para TestApp iOS
class TestAppPage {
  get testGestureButton() {
    return $('//XCUIElementTypeButton[@name="Test Gesture"]');
  }

  get integerA() {
    return $('~IntegerA');
  }

  get integerB() {
    return $('~IntegerB');
  }

  get computeSumButton() {
    return $('~ComputeSumButton');
  }

  get vkPointFeature() {
    return $$('//XCUIElementTypeOther[@name="VKPointFeature"]')[10];
  }

  async tapTestGesture() {
    await this.testGestureButton.click();
  }

  async enterIntegerA(value) {
    await this.integerA.setValue(value);
  }

  async enterIntegerB(value) {
    await this.integerB.setValue(value);
  }

  async tapComputeSum() {
    await this.computeSumButton.click();
  }

  async tapVKPointFeature() {
    await this.vkPointFeature.click();
  }
}

module.exports = new TestAppPage();
