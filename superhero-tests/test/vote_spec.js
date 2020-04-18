//Tests for Header page
var VotePage = require('../page-objects/vote_page')
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
    it('Should display all the elements for voting elements', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.submitBtn.click()


        expect(votePage.voteTitleTxt.isDisplayed()).toBe(true)
        expect(votePage.voteTitleTxt.getText()).toEqual('Vote for your favorite Superhero movie')

        expect(votePage.xMenLbl.isDisplayed()).toBe(true)
        expect(votePage.xMenLbl.getText()).toEqual('X-Men')

        expect(votePage.avengersLbl.isDisplayed()).toBe(true)
        expect(votePage.avengersLbl.getText()).toEqual('Avengers')

        expect(votePage.deadpoolLbl.isDisplayed()).toBe(true)
        expect(votePage.deadpoolLbl.getText()).toEqual('Deadpool')

        expect(votePage.spidermanHomecomingLbl.isDisplayed()).toBe(true)
        expect(votePage.spidermanHomecomingLbl.getText()).toEqual('Spider-Man Homecoming')

        expect(votePage.ironManLbl.isDisplayed()).toBe(true)
        expect(votePage.ironManLbl.getText()).toEqual('Iron Man')

        expect(votePage.submitBtn.isDisplayed()).toBe(true)


        expect(votePage.xmenRbtn.isDisplayed()).toBe(true)
        expect(votePage.avengersRbtn.isDisplayed()).toBe(true)
        expect(votePage.deadPoolRbtn.isDisplayed()).toBe(true)
        expect(votePage.spiderManRbtn.isDisplayed()).toBe(true)
        expect(votePage.IronManRbtn.isDisplayed()).toBe(true)



        expect(votePage.movieLbl.isDisplayed()).toBe(true)
        expect(votePage.movieLbl.getText()).toEqual('Movie')

        expect(votePage.voteLbl.isDisplayed()).toBe(true)
        expect(votePage.voteLbl.getText()).toEqual('Votes')




        expect(votePage.xmenMovieLbl.isDisplayed()).toBe(true)
        expect(votePage.xmenMovieLbl.getText()).toEqual('X-Men')

        expect(votePage.avengersMovieLbl.isDisplayed()).toBe(true)
        expect(votePage.avengersMovieLbl.getText()).toEqual('Avengers')

        expect(votePage.deadpoolMovieLbl.isDisplayed()).toBe(true)
        expect(votePage.deadpoolMovieLbl.getText()).toEqual('Deadpool')

        expect(votePage.spiderManMovieLbl.isDisplayed()).toBe(true)
        expect(votePage.spiderManMovieLbl.getText()).toEqual('Spider-Man Homecoming')

        expect(votePage.ironManMovieLbl.isDisplayed()).toBe(true)
        expect(votePage.ironManMovieLbl.getText()).toEqual('Iron Man')





        expect(votePage.xmenVoteLbl.isDisplayed()).toBe(true)
        expect(votePage.xmenVoteLbl.getText()).toEqual('10')

        expect(votePage.avengersVoteLbl.isDisplayed()).toBe(true)
        expect(votePage.avengersVoteLbl.getText()).toEqual('5')

        expect(votePage.deadpoolVoteLbl.isDisplayed()).toBe(true)
        expect(votePage.deadpoolVoteLbl.getText()).toEqual('22')

        expect(votePage.spiderManVoteLbl.isDisplayed()).toBe(true)
        expect(votePage.spiderManVoteLbl.getText()).toEqual('12')

        expect(votePage.ironManVoteLbl.isDisplayed()).toBe(true)
        expect(votePage.ironManVoteLbl.getText()).toEqual('1')


    })

    it('should add 1 to X-Men votes', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.submitBtn.click()

        // votePage.xmenRbtn.click()

        votePage.submitBtn.click()

        expect(votePage.xmenVoteLbl.getText()).toEqual('11')

        expect(votePage.voteAlert.getText()).toEqual('Thanks for voting!')
        expect(votePage.voteAlert.isDisplayed()).toBe(true)

        expect(votePage.voteForm.isDisplayed()).toBe(false)



    })
    it('should add 1 to Avengers votes', function () {
        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.submitBtn.click()

        expect(votePage.voteAlert.isDisplayed()).toBe(false)

        votePage.avengersRbtn.click()
        votePage.submitBtn.click()

        expect(votePage.avengersVoteLbl.getText()).toEqual('6')

        expect(votePage.voteAlert.getText()).toEqual('Thanks for voting!')
        expect(votePage.voteAlert.isDisplayed()).toBe(true)

        expect(votePage.voteForm.isDisplayed()).toBe(false)

    })
    it('should add 1 to Deadpool votes', function () {

        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.submitBtn.click()

        expect(votePage.voteAlert.isDisplayed()).toBe(false)

        votePage.deadPoolRbtn.click()
        votePage.submitBtn.click()

        expect(votePage.deadpoolVoteLbl.getText()).toEqual('23')

        expect(votePage.voteAlert.getText()).toEqual('Thanks for voting!')
        expect(votePage.voteAlert.isDisplayed()).toBe(true)

        expect(votePage.voteForm.isDisplayed()).toBe(false)
    })
    it('should add 1 to Spider votes', function () {

        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.submitBtn.click()

        expect(votePage.voteAlert.isDisplayed()).toBe(false)

        votePage.spiderManRbtn.click()
        votePage.submitBtn.click()

        expect(votePage.spiderManVoteLbl.getText()).toEqual('13')

        expect(votePage.voteAlert.getText()).toEqual('Thanks for voting!')
        expect(votePage.voteAlert.isDisplayed()).toBe(true)

        expect(votePage.voteForm.isDisplayed()).toBe(false)
    })
    it('should add 1 to ironman votes', function () {

        loginPage.emailFld.sendKeys('k@gmail.com')
        loginPage.passwordFld.sendKeys('EmailField')
        loginPage.submitBtn.click()

        expect(votePage.voteAlert.isDisplayed()).toBe(false)

        votePage.IronManRbtn.click()
        votePage.submitBtn.click()

        expect(votePage.ironManVoteLbl.getText()).toEqual('2')

        expect(votePage.voteAlert.getText()).toEqual('Thanks for voting!')
        expect(votePage.voteAlert.isDisplayed()).toBe(true)

        expect(votePage.voteForm.isDisplayed()).toBe(false)
    })
})