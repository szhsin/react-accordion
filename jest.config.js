module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.[jt]s?(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', 'regenerator-runtime/runtime.js'],
  clearMocks: true,
  collectCoverage: true
};
