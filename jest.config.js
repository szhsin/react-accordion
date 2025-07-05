module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.[jt]s?(x)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom', 'jest-dom-extended/jest'],
  clearMocks: true,
  collectCoverage: true
};
