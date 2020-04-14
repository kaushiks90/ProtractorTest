describe('super Hero Page', function () {
  it('should load the correct url', function () {
    browser.ignoreSynchronization = true;
    browser.get('file:///C:/Users/Koushik/Desktop/Angular/Protractor/superhero/index.html');
    browser.sleep(10000);
  });
});