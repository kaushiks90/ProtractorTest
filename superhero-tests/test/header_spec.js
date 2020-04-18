//Tests for Header page
var HeaderPage = require('../page-objects/header_page')
var LoginPage = require('../page-objects/login_page')
describe('Login Page Tests', function () {
    var loginPage
    var headerPage
    beforeEach(function () {
        loginPage = new LoginPage();
        headerPage = new HeaderPage();
        //Since this is not a angular site
        browser.ignoreSynchronization = true
        //Open url
        browser.get('file:///C:/Users/Koushik/Desktop/Angular/Protractor/superhero/index.html')
    })
    afterEach(function () {

    })
    it('Should contain all the header elements', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.rememberChk.click()
        loginPage.submitBtn.click()

        expect(headerPage.headerTitleLbl.isDisplayed()).toBe(true)
        expect(headerPage.headerTitleImg.isDisplayed()).toBe(true)
        expect(headerPage.headerTitleBody.isDisplayed()).toBe(true)

        expect(headerPage.headerTitleLbl.getText()).toEqual('Superhero Roster')
        expect(headerPage.headerTitleBody.getText()).toEqual('Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.')



    })
})