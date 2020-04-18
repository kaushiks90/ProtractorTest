var NavPage = function () {}
NavPage.prototype = Object.create({}, {
    homeLnk: {
        get: function () {
            return element(by.css('#navbarSupportedContent > ul > li.nav-item.active > a'))
        }
    },
    linkLnk: {
        get: function () {
            return element(by.css('#navbarSupportedContent > ul > li:nth-child(2) > a'))
        }
    },
    heroFactsLnk: {
        get: function () {
            return element(by.linkText('Hero Facts'))
        }
    },
    logoutLnk: {
        get: function () {
            return element(by.linkText('Logout'))
        }
    },
    wolverineOption: {
        get: function () {
            return element(by.linkText('Wolverine'))
        }
    },
    spidermanOption: {
        get: function () {
            return element(by.linkText('Spider-Man'))
        }
    },
    searchTxt: {
        get: function () {
            return element(by.id('search-box'))
        }
    },
    searchBtn: {
        get: function () {
            return element(by.xpath('//*[@id="search-form"]/button'))
        }
    },

    wolverinPopupHeader: {
        get: function () {
            return element(by.id('#wolverineModalLabel'))
        }
    },
    wolverinPopupMessage: {
        get: function () {
            return element(by.xpath('//*[@id="wolverineModal"]/div/div/div[2]'))
        }
    },
    wolverinPopupXBtn: {
        get: function () {
            return element(by.xpath('//*[@id="wolverineModal"]/div/div/div[1]/button/span'))
        }
    },
    wolverinPopupCloseBtn: {
        get: function () {
            return element(by.xpath('//*[@id="wolverineModal"]/div/div/div[3]/button'))
        }
    },


    spidermanPopupHeader: {
        get: function () {
            return element(by.id('#spidermanModalLabel'))
        }
    },
    spidermanPopupMessage: {
        get: function () {
            return element(by.xpath('//*[@id="spidermanModal"]/div/div/div[2]'))
        }
    },
    spidermanPopupXBtn: {
        get: function () {
            return element(by.xpath('//*[@id="spidermanModal"]/div/div/div[1]/button/span'))
        }
    },
    spidermanPopupCloseBtn: {
        get: function () {
            return element(by.xpath('//*[@id="spidermanModal"]/div/div/div[3]/button'))
        }
    },

})
module.exports = NavPage