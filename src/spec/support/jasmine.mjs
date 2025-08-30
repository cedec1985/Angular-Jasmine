export default {
  spec_dir: "./build",
  spec_files: [
    "**/*.spec.js","**/*.js","*.[sS]pec.?(m)js","*.js","*.spec.js"
  ],
  helpers: [
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}
