const config = { 
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverageFrom: ["packages/**/src/**/*.{js,ts,jsx,tsx}","ffxi-query-tool-app/src/**/*.{js,ts,jsx,tsx}"],
    coveragePathIgnorePatterns: ["<rootDir>/src/index.ts", "<rootDir>/node_modules/"],
    collectCoverage: true,
    coverageReporters: [
        "text-summary",
        "json-summary"
    ]
}
module.exports = config;