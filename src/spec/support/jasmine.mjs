export default function (config){
  config.set({
  spec_dir: "./build",
  spec_files: [
    "**/**/*.spec.js","**/**/*.js","*.[sS]pec.?(m)js","*.js","**/*.spec.js","**/*.js",
    "*.js","*.spec.js",
    "**/*.spec.ts","**/*.ts","**/**/*.spec.ts","**/**/*.ts","*.ts","*.spec.ts","*.ts","*.d.ts","*.spec.helpers.ts",
  ],
  helpers: [
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
  })
}
