export default {
  spec_dir: "build",
  spec_files: [
    "app/*.?(m)js",
    "app/*.ts",
    "app/*.spec.?(m)js",
    "app/*.spec.ts",
    "dist/out-tsc/**/*.?(m)js",
    "dist/out-tsc/**/*.ts",
    "dist/out-tsc/**/*.spec.?(m)js",
    "dist/out-tsc/**/*.spec.ts",
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
