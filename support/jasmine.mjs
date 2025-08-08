export default {
  spec_dir: "./build",
  spec_files: [
    '**/app/*.spec.ts',
    '**/app/*spec.ts',
    '**/app/*.ts',
    '**/app/*.spec.js',
    '**/app/*spec.js',
    '**/app/*.js'
  ],
  helpers: [
    "helpers/**/*.?(m)js"
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}
