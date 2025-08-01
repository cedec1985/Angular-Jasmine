export default {
  spec_dir: "build",
  spec_files: [
    "app/*.?(m)js",
    "app/*.ts",
    "app/*.spec.?(m)js",
    "app/*.spec.ts"
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
