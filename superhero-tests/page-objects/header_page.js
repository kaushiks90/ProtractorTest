var HeaderPage = function () {}
HeaderPage.prototype = Object.create({}, {
    headerTitleLbl: {
        get: function () {
            return element(by.css('body > div.container-fluid > div:nth-child(1) > h1'))
        }
    },
    headerTitleImg: {
        get: function () {
            return element(by.css('body > div.container-fluid > div:nth-child(2) > img'))
        }
    },
    headerTitleBody: {
        get: function () {
            return element(by.css('body > div.container-fluid > div:nth-child(3) > div > p'))
        }
    },
})
module.exports = HeaderPage