//Login Page Objects

var LoginPage = function () {}
LoginPage.prototype = Object.create({}, {
    emailFld: {
        get: function () {
            return element(by.id('loginEmail'))
        }
    },
    passwordFld: {
        get: function () {
            return element(by.id('loginPassword'))
        }
    },
    loginTitleTxt: {
        get: function () {
            return element(by.id('login-title'))
        }
    },
    emailFldLbl: {
        get: function () {
            return element(by.css('#form-login > div:nth-child(1) > label'))
        }
    },
    passwordFldLbl: {
        get: function () {
            return element(by.css('#form-login > div:nth-child(2) > label'))
        }
    },
    rememberChk: {
        get: function () {
            return element(by.id('rememberLoginChk'))
        }
    },
    rememberChkLbl: {
        get: function () {
            return element(by.css('#form-login > div.form-check > label'))
        }
    },
    submitBtn: {
        get: function () {
            return element(by.xpath('//*[@id="form-login"]/button'))
        }
    },
    loginErrorMsg: {
        get: function () {
            return element(by.id('login-alert'))
        }
    }

})
module.exports = LoginPage