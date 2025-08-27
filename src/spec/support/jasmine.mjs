export default {
  spec_dir: "./build",
  spec_files: [
    "build/app/**/*.spec.js","build/app/**/*.js","build/*.[sS]pec.?(m)js",
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
