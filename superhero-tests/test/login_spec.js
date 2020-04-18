//Tests for login page
var LoginPage = require('../page-objects/login_page')
describe('Login Page Tests', function () {
    var loginPage
    beforeEach(function () {
        loginPage = new LoginPage();
        //Since this is not a angular site
        browser.ignoreSynchronization = true
        //Open url
        browser.get('file:///C:/Users/Koushik/Desktop/Angular/Protractor/superhero/index.html')
    })
    afterEach(function () {

    })
    it('Should display all the login page elements', function () {
        expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true)
        expect(loginPage.loginTitleTxt.getText()).toEqual('Welcome. Please Log In.')

        expect(loginPage.passwordFld.isDisplayed()).toBe(true)
        expect(loginPage.emailFld.isDisplayed()).toBe(true)
        expect(loginPage.passwordFld.getText()).toBe('')
        expect(loginPage.emailFld.getText()).toBe('')

        expect(loginPage.emailFldLbl.isDisplayed()).toBe(true)
        expect(loginPage.passwordFldLbl.isDisplayed()).toBe(true)

        expect(loginPage.rememberChk.isDisplayed()).toBe(true)
        expect(loginPage.rememberChkLbl.isDisplayed()).toBe(true)
        expect(loginPage.rememberChk.isSelected()).toBe(false)

        expect(loginPage.submitBtn.isDisplayed()).toBe(true)
    })
    it('should display an error message when no username or password entered', function () {
        loginPage.submitBtn.click()
        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(loginPage.loginErrorMsg.getText()).toBe('An e-mail and password are required.')
        browser.sleep(1000);

    })
    it('should display error message when no password entered', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')

        loginPage.submitBtn.click()
        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(loginPage.loginErrorMsg.getText()).toBe('An e-mail and password are required.')
        browser.sleep(1000);
    })
    it('should display an error message when no user name entered', function () {
        loginPage.passwordFld.sendKeys('password')

        loginPage.submitBtn.click()
        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(loginPage.loginErrorMsg.getText()).toBe('An e-mail and password are required.')
        browser.sleep(1000);
    })
    it('should log the user in', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.rememberChk.click()
        loginPage.submitBtn.click()
        browser.sleep(5000);
    })

})