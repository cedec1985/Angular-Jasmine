export default {
  spec_dir: "./build",
  spec_files: [
    "build/app/**/**/*.spec.js","build/app/**/**/*.js","build/*.[sS]pec.?(m)js","build/*.js","build/app/**/*.spec.js","build/app/**/*.js",
    "build/app/*.js","build/app/*.spec.js"
  ],
  helpers: [
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}
