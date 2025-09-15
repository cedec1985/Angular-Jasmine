export default function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: [
     "build/src/app/*.mjs","build/src/app/**/*.mjs","build/src/app/*.mjs","build/src/app/**/**/*.mjs",
     "build/src/app/*.spec.mjs","build/src/app/**/*.spec.mjs","build/src/app/*.spec.mjs","build/src/app/**/**/*.spec.mjs"
    ],
    Plugins: [
    import('karma-jasmine'),
    import('karma-chrome-launcher'),
    import('karma-jasmine-html-reporter'),
    import('karma-spec-reporter'),
  //  import('@angular-devkit/build-angular/plugins/karma'),
    import('karma-coverage'),
    import('karma-webpack')
    ],

    // list of files / patterns to exclude
    exclude: [
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor

  // preprocessors: {'**/*.ts': ['karma-typescript']},
   client : {
    jasmine :{
      failSpecWithNoExpectations: false
    },
    clearContext: false,
    random: false
   },
   jasmineHtmlReporter:{
   suppressAll : false
  },
   jasminespecReporter:{
    maxLogLines: 5,         // limit number of lines logged per test
    suppressErrorSummary: false,  // do not print error summary
    suppressFailed: false,    // do not print information about failed tests
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
}
   )}
