// ApiDemos.page.js - Page Object para ApiDemos Android
class ApiDemosPage {
  get osOption() {
    return $('~OS');
  }

  get morseCodeOption() {
    return $('~Morse Code');
  }

  get textInput() {
    return $('id=io.appium.android.apis:id/text');
  }

  get vibrateButton() {
    return $('~Vibrate');
  }

  get animationOption() {
    return $('~Animation');
  }

  get defaultLayoutAnimationsOption() {
    return $('~Default Layout Animations');
  }

  get addButton() {
    return $('~Add Button');
  }

  async tapOS() {
    await this.osOption.click();
  }

  async tapMorseCode() {
    await this.morseCodeOption.click();
  }

  async enterText(text) {
    await this.textInput.setValue(text);
  }

  async tapVibrate() {
    await this.vibrateButton.click();
  }

  async tapAnimation() {
    await this.animationOption.click();
  }

  async tapDefaultLayoutAnimations() {
    await this.defaultLayoutAnimationsOption.click();
  }

  async tapAddButton() {
    await this.addButton.click();
  }
}

module.exports = new ApiDemosPage();
