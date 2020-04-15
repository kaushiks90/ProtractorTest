var TestPage = require('../page-objects/test_page')
describe('super Hero Page', function () {
  var testPage
  beforeEach(function () {
    testPage = new TestPage();
    browser.ignoreSynchronization = true;
    browser.get(
      'file:///C:/Users/Koushik/Desktop/Angular/Protractor/superhero/index.html'
    );

  });
  afterEach(function () {});
  it('should load the correct url', function () {
    //Open Url

    //Enter Text into the field
    testPage.emailFld.sendKeys('Just Testing');
    testPage.passwordFld.sendKeys('password');

    //Verify stuff
    expect(testPage.loginTitleTxt.getText()).toEqual(
      'Welcome. Please Log In.'
    );
    expect(testPage.emailFld.getAttribute('value')).toEqual(
      'Just Testing'
    );

    browser.sleep(5000);
  });
});