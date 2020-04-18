//Tests for Header page
var votePage = require('../page-objects/vote_page')
var LoginPage = require('../page-objects/login_page')
describe('Login Page Tests', function () {
    var loginPage
    var rosterPage
    beforeEach(function () {
        loginPage = new LoginPage();
        votePage = new VotePage();
        //Since this is not a angular site
        browser.ignoreSynchronization = true
        //Open url
        browser.get('file:///C:/Users/Koushik/Desktop/Angular/Protractor/superhero/index.html')
    })
    afterEach(function () {

    })
    it('Should display all the login page elements', function () {

    })
})