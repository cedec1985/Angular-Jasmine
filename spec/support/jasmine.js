export default {
  spec_dir: "./dist/out-tsc",
  spec_files: [
      "app/*.?(m)js",
      "app/*.spec.?(m)js",
      "app/*spec.?(m)js",
      "app/*.ts",
      "app/*.spec.ts",
      "app/**/*spec.ts",
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
