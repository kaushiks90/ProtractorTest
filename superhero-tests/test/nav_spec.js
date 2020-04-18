//Tests for Header page
var NavPage = require('../page-objects/nav_page')
var LoginPage = require('../page-objects/login_page')
describe('Login Page Tests', function () {
    var loginPage
    var navPage
    beforeEach(function () {
        loginPage = new LoginPage();
        navPage = new NavPage();
        //Since this is not a angular site
        browser.ignoreSynchronization = true
        //Open url
        browser.get('file:///C:/Users/Koushik/Desktop/Angular/Protractor/superhero/index.html')
    })
    afterEach(function () {

    })
    it('Should have all the Nav Elements', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.submitBtn.click()
        browser.sleep(5000)
        expect(navPage.homeLnk.isDisplayed()).toBe(true)
        expect(navPage.logoutLnk.isDisplayed()).toBe(true)
        expect(navPage.heroFactsLnk.isDisplayed()).toBe(true)

        navPage.heroFactsLnk.click()
        browser.sleep(5000)
        expect(navPage.wolverineOption.isDisplayed()).toBe(true)
        expect(navPage.spidermanOption.isDisplayed()).toBe(true)

    })
    it('Should display and close wolverine modal', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.submitBtn.click()

        navPage.heroFactsLnk.click()
        navPage.wolverineOption.click()

        browser.sleep(1000)

        expect(navPage.wolverinPopupHeader.isDisplayed()).toBe(true)
        expect(navPage.wolverinPopupMessage.isDisplayed()).toBe(true)
        expect(navPage.wolverinPopupXBtn.isDisplayed()).toBe(true)
        expect(navPage.wolverinPopupCloseBtn.isDisplayed()).toBe(true)


        expect(navPage.wolverinPopupHeader.getText()).toEqual('Wolverine Fact')

        expect(navPage.wolverinPopupMessage.getText()).toEqual('Wolverine made his first comic book appearance in 1974.')

        navPage.wolverinPopupCloseBtn.click()

    })
    it('Should display and close spiderman modal', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.submitBtn.click()

        navPage.heroFactsLnk.click()
        navPage.spidermanOption.click()

        browser.sleep(1000)

        expect(navPage.spidermanPopupHeader.isDisplayed()).toBe(true)
        expect(navPage.spidermanPopupMessage.isDisplayed()).toBe(true)
        expect(navPage.spidermanPopupXBtn.isDisplayed()).toBe(true)
        expect(navPage.spidermanPopupCloseBtn.isDisplayed()).toBe(true)


        expect(navPage.spidermanPopupHeader.getText()).toEqual('Spider-Man Fact')

        expect(navPage.spidermanPopupMessage.getText()).toEqual('Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.')

        navPage.spidermanPopupCloseBtn.click()
    })
    it('Should display login page without email on click of logout', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.submitBtn.click()

        navPage.logoutLnk.click()

        expect(loginPage.passwordFld.getText()).toBe('')
        expect(loginPage.emailFld.getText()).toBe('')
    })
    it('Should display login page with email on click of logout', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.rememberChk.click()
        loginPage.submitBtn.click()

        navPage.logoutLnk.click()

        expect(loginPage.emailFld.getAttribute('value')).toEqual('k@gmail.com')
        expect(loginPage.passwordFld.getAttribute('value')).toEqual('EmailField')
        expect(loginPage.rememberChk.isSelected()).toBe(true)

    })
    it('Should display alert not found on search button click', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.rememberChk.click()
        loginPage.submitBtn.click()

        navPage.searchTxt.sendKeys('Bob')
        navPage.searchBtn.click()

        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 3000)

        expect(browser.switchTo().alert().getText()).toEqual('Your search for Bob returned 0 reults. Try something else.')
        browser.switchTo().alert().accept()

    })
    it('Should display alert for found on search button click', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.rememberChk.click()
        loginPage.submitBtn.click()

        navPage.searchTxt.sendKeys('Wolverine')
        navPage.searchBtn.click()

        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 3000)

        expect(browser.switchTo().alert().getText()).toEqual('Wolverine is awesome!')
        browser.switchTo().alert().accept()
    })
})