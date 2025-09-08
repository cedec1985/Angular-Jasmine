export default{

  "stopSpecOnExpectationFailure": false,
  "stopOnSpecFailure": false,
  "srcDir": "src/app",
  "srcFiles": [
    "**/*.ts",
    "*.ts",
    "**/*.js",
    "*.js"
  ],
  "specDir": "./build",
  "specFiles": [
    "src/app/*.spec.js","src/app/*.spec.js","src/*.spec.js","src/*.js","**/*.spec.js","**/*.js"
  ],
  "esmFilenameExtension": "*.mjs",
  "modulesWithSideEffectsInSrcFiles": false,
  "enableTopLevelAwait": false,
  "env": {
    "stopSpecOnExpectationFailure": false,
    "stopOnSpecFailure": false,
    "random": true,
    "forbidDuplicateNames": true
  },

  "listenAddress": "localhost",

  "hostname": "localhost",

  "browser": {
    "name": "chrome"
  }

}
