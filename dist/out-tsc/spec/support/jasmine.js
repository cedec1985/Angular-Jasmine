export default {
    spec_dir: "./dist/out-tsc",
    spec_files: [
        "./dist/out-tsc/**/*.[sS]pec.?(m)js",
        "./dist/out-tsc/**/*[sS]pec.?(m)js",
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
//# sourceMappingURL=../../../../spec/support/jasmine.js.map