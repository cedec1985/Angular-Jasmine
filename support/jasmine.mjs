export default {
  spec_dir: "./build",
  spec_files: [
    'build/app/**/*.spec.js','build/app/**/*.js'
  ],
  helpers: [
    "helpers/*.ts"
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}
