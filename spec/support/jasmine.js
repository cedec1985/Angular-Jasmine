export default {
  spec_dir: "./build",
  spec_files: [
      "app/*.?(m)js",
      "app/*.spec.?(m)js",
      "app/*spec.?(m)js",
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
