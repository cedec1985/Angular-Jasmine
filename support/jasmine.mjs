export default {
  spec_dir: "./build",
  spec_files: [
    '../*.spec.ts',
    '../*.ts',
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
