exports.module = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['jasmine','@angular-devkit/build-angular'],
    // list of files / patterns to load in the browser
    files: [
      "build/app/*.spec.js","build/**/*.js","build/*.js","build/*.[sS]pec.?(m)js","build/app/**/*.spec.js","build/app/**/*.js","build/app/**/**/*.spec.js","build/app/**/**/*.js","build/*.spec.helpers.js"
    ],
    Plugins: [
     require('karma-jasmine'),
     require('karma-chrome-launcher'),
     require('karma-jasmine-html-reporter'),
     require('@angular-devkit/build-angular/plugins/karma'),
     require('karma-coverage'),
     require('karma-webpack'),
     require('karma-junit-reporter'),
    ],

    // list of files / patterns to exclude
    exclude: [
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor

  //  preprocessors: {"**/*.ts": "karma-typescript"
   client : {
    jasmine :{
      failSpecWithNoExpectations: false
    },
    clearContext: false
   },
   jasmineHtmlReporter:{
   suppressAll : true
   },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ['progress','kjhtml'],
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ['Chrome'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    restartOnFileChange:true,
    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity
})}


