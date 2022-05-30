const config = { 
  transform: {
      "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: ["src/**/*.{js,ts,jsx,tsk}"],
  coveragePathIgnorePatterns: ["<rootDir>/src/index.ts", "<rootDir>/node_modules/"],
  collectCoverage: true
}
module.exports = config;