module.exports = {
  collectCoverageFrom: [
    '<rootDir>/micro-apps/**/**/src/**/*.{js,jsx,mjs,ts,tsx}',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coveragePathIgnorePatterns: [
    '/stories/',
    '/themes/',
  ],
  coverageThreshold: {
    global: {
      branches: 15,
      functions: 14,
      lines: 25,
      statements: 25,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/fileTransform.js',
    '\\.(css|less)$': '<rootDir>/config/jest/fileTransform.js',
  },
  reporters: ['jest-standard-reporter'],
  roots: [
    '<rootDir>/micro-apps',
  ],
  setupFilesAfterEnv: [
    './config/jest/setup.js',
  ],
  testMatch: ['**/__tests__/**/*.{js,jsx,mjs,ts,tsx}', '**/?(*.)+(spec|test).{js,jsx,mjs,ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/'],
  // testResultsProcessor: 'jest-teamcity-reporter',
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.(js|jsx|mjs|ts|tsx)$': './node_modules/babel-jest',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './config/jest/fileTransform.js',
    '^.+\\.css$': './config/jest/cssTransform.js',
  },
  transformIgnorePatterns: ['/node_modules/'],
  verbose: true,
};