import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    environment: 'jsdom',
    include: ['src/__tests__/**/*.test.?(c|m)[jt]s?(x)'],
    coverage: {
      enabled: true,
      provider: 'v8',
      include: ['src/**/*.ts?(x)'],
      exclude: ['src/__tests__', 'index.ts']
    },
    setupFiles: ['@testing-library/jest-dom', 'jest-dom-extended/vitest']
  }
});
