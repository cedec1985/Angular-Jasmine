export default function (config){
  config.set({
  spec_dir: "./build",
  spec_files: [
    "build/app/**/**/*.spec.js","build/app/**/**/*.js","build/*.[sS]pec.?(m)js","build/*.js","build/app/**/*.spec.js","build/app/**/*.js",
    "build/app/*.js","build/app/*.spec.js",
    "app/**/*.spec.ts","app/**/*.ts","app/**/**/*.spec.ts","app/**/**/*.ts","app/*.ts","app/*.spec.ts","*.ts","app/*.d.ts","app/*.spec.helpers.ts",
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
