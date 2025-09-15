export default{

  "stopSpecOnExpectationFailure": false,
  "stopOnSpecFailure": false,
  "srcDir": "build/src/app",
  "srcFiles": [
    "**/*.mjs",
    "*.mjs"
  ],
  "specDir": ".",
  "specFiles": [
    "**/*.spec.mjs",
    "*.spec.mjs",
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

