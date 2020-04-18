//Tests for Header page
var RosterPage = require('../page-objects/roster_page')
var LoginPage = require('../page-objects/login_page')
describe('Login Page Tests', function () {
    var loginPage
    var rosterPage
    beforeEach(function () {
        loginPage = new LoginPage();
        rosterPage = new RosterPage();
        //Since this is not a angular site
        browser.ignoreSynchronization = true
        //Open url
        browser.get('file:///C:/Users/Koushik/Desktop/Angular/Protractor/superhero/index.html')
    })
    afterEach(function () {

    })
    it('Should display all the default roster elements', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.submitBtn.click()

        expect(rosterPage.roosterTitleText.isDisplayed()).toBe(true)
        expect(rosterPage.roosterTitleText.getText()).toEqual('Build Your Superhero Roster:')

        expect(rosterPage.wolverineItemText.isDisplayed()).toBe(true)
        expect(rosterPage.wolverineItemText.getText()).toEqual('Wolverine')

        expect(rosterPage.ironManItemText.isDisplayed()).toBe(true)
        expect(rosterPage.ironManItemText.getText()).toEqual('Iron Man')

        expect(rosterPage.deadPoolItemText.isDisplayed()).toBe(true)
        expect(rosterPage.deadPoolItemText.getText()).toEqual('Deadpool')

        expect(rosterPage.thorItemText.isDisplayed()).toBe(true)
        expect(rosterPage.thorItemText.getText()).toEqual('Thor')

        expect(rosterPage.spidermanItemText.isDisplayed()).toBe(true)
        expect(rosterPage.spidermanItemText.getText()).toEqual('Spider-Man')

    })
    fit('Should add hero on submit', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.submitBtn.click()

        rosterPage.addSuperHeroTxt.sendKeys('Kaushik')
        rosterPage.addSuperHeroBtn.click()
        browser.sleep(5000)


        expect(element(by.css('#hero-list > li:nth-child(6)')).isDisplayed()).toBe(true)
        expect(element(by.css('#hero-list > li:nth-child(6)')).getText()).toEqual('Kaushik')


    })
})