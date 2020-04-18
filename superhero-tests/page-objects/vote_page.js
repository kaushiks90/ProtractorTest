var VotePage = function () {}
VotePage.prototype = Object.create({}, {
    voteTitleTxt: {
        get: function () {
            return element(by.css('body > div.container-fluid > div:nth-child(6) > div > h4'))
        }
    },
    xMenLbl: {
        get: function () {
            return element(by.css('#vote-form > div:nth-child(1) > label'))
        }
    },
    avengersLbl: {
        get: function () {
            return element(by.css('#vote-form > div:nth-child(2) > label'))
        }
    },
    deadpoolLbl: {
        get: function () {
            return element(by.css('#vote-form > div:nth-child(3) > label'))
        }
    },
    spidermanHomecomingLbl: {
        get: function () {
            return element(by.css('#vote-form > div:nth-child(4) > label'))
        }
    },
    ironManLbl: {
        get: function () {
            return element(by.css('#vote-form > div:nth-child(5) > label'))
        }
    },


    submitBtn: {
        get: function () {
            return element(by.css('#vote-form > button'))
        }
    },


    xmenRbtn: {
        get: function () {
            return element(by.id('heroMovieRadio1'))
        }
    },
    avengersRbtn: {
        get: function () {
            return element(by.id('heroMovieRadio2'))
        }
    },
    deadPoolRbtn: {
        get: function () {
            return element(by.id('heroMovieRadio3'))
        }
    },
    spiderManRbtn: {
        get: function () {
            return element(by.id('heroMovieRadio4'))
        }
    },

    IronManRbtn: {
        get: function () {
            return element(by.id('heroMovieRadio5'))
        }
    },

    voteForm: {
        get: function () {
            return element(by.id('vote-form'))
        }
    },

    movieLbl: {
        get: function () {
            return element(by.css('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(1)'))
        }
    },

    voteLbl: {
        get: function () {
            return element(by.css('body > div.container-fluid > div:nth-child(6) > div > table > thead > tr > th:nth-child(2)'))
        }
    },

    xmenMovieLbl: {
        get: function () {
            return element(by.id('movieName1'))
        }
    },
    xmenVoteLbl: {
        get: function () {
            return element(by.id('movieVotes1'))
        }
    },

    avengersMovieLbl: {
        get: function () {
            return element(by.id('movieName2'))
        }
    },
    avengersVoteLbl: {
        get: function () {
            return element(by.id('movieVotes2'))
        }
    },

    deadpoolMovieLbl: {
        get: function () {
            return element(by.id('movieName3'))
        }
    },
    deadpoolVoteLbl: {
        get: function () {
            return element(by.id('movieVotes3'))
        }
    },

    spiderManMovieLbl: {
        get: function () {
            return element(by.id('movieName4'))
        }
    },
    spiderManVoteLbl: {
        get: function () {
            return element(by.id('movieVotes4'))
        }
    },

    ironManMovieLbl: {
        get: function () {
            return element(by.id('movieName5'))
        }
    },
    ironManVoteLbl: {
        get: function () {
            return element(by.id('movieVotes5'))
        }
    },

    voteAlert: {
        get: function () {
            return element(by.id('vote-alert'))
        }
    },




})
module.exports = VotePage