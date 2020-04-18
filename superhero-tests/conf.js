let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html',
    captureonlyFailedSpecs: true
});
exports.config = {
    framework: 'jasmine2',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        browserName: 'chrome'
    },

    specs: [
        './test/login_spec.js',
        './test/header_spec.js',
        './test/nav_spec.js',
        //'./test/roster_spec.js',
        //'./test/vote_spec.js'
        //'./test/*_spec.js'
    ],

    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        //defaultTimeoutInterval: 360000,
        print: function () {}
    },

    // Setup the report before any tests start
    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    // Close the report after all tests finish
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    logLevel: 'WARN',
    onPrepare: function () {
        jasmine.getEnv().addReporter(reporter);

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            },
            summary: {
                displayDuration: false
            }
        }));
    }

}