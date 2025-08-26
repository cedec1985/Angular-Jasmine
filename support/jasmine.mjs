export default {
  spec_dir: "./build",
  spec_files: [
    'src/**/*.spec.ts','src/*.spec.ts',
    'src/**/*.ts','src/*.ts'
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
