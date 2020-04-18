var RosterPage = function () {}
RosterPage.prototype = Object.create({}, {
    roosterTitleText: {
        get: function () {
            return element(by.css('body > div.container-fluid > div:nth-child(4) > h3'))
        }
    },
    wolverineItemText: {
        get: function () {
            return element(by.css('#hero-list > li:nth-child(1)'))
        }
    },
    ironManItemText: {
        get: function () {
            return element(by.css('#hero-list > li:nth-child(2)'))
        }
    },
    deadPoolItemText: {
        get: function () {
            return element(by.css('#hero-list > li:nth-child(3)'))
        }
    },
    thorItemText: {
        get: function () {
            return element(by.css('#hero-list > li:nth-child(4)'))
        }
    },
    spidermanItemText: {
        get: function () {
            return element(by.css('#hero-list > li:nth-child(5)'))
        }
    },
    addSuperHeroLbl: {
        get: function () {
            return element(by.css('#addHero-form > div > label'))
        }
    },
    addSuperHeroTxt: {
        get: function () {
            return element(by.id('#heroInput'))
        }
    },
    addSuperHeroBtn: {
        get: function () {
            return element(by.xpath('//*[@id="addHero-form"]/button'))
        }
    },
})
module.exports = RosterPage