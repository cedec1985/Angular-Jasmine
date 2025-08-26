export default {
  spec_dir: "./build",
  spec_files: [
    'app/*.spec.ts','app/**/*.spec.ts',
    'app/*.ts','app/**/*.ts'
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
