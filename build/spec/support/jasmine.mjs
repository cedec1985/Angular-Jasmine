export default {
    spec_dir: "./build",
    spec_files: [
        "testdemo/src/app/*[sS]pec.?(m)js",
        "testdemo/src/app/*.[sS]pec.?(m)js",
    ],
    helpers: [
        "helpers/**/*.?(m)js"
    ],
    env: {
        stopSpecOnExpectationFailure: false,
        random: true,
        forbidDuplicateNames: true
    }
};
//# sourceMappingURL=../../../spec/support/jasmine.mjs.map