describe('super Hero Page', function () {
  beforeEach(function () {
    browser.ignoreSynchronization = true;
  });
  afterEach(function () {});
  it('should load the correct url', function () {
    //Open Url
    browser.get(
      'file:///C:/Users/Koushik/Desktop/Angular/Protractor/superhero/index.html'
    );
    //Enter Text into the field
    element(by.id('loginEmail')).sendKeys('Just Testing');
    element(by.id('loginPassword')).sendKeys('password');

    //Verify stuff
    expect(element(by.id('login-title')).getText()).toEqual(
      'Welcome. Please Log In.'
    );
    expect(element(by.id('loginEmail')).getAttribute('value')).toEqual(
      'Just Testing'
    );

    browser.sleep(5000);
  });
});
