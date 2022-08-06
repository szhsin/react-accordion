const config = require('../.eslintrc');

module.exports = {
  ...config,
  extends: [...config.extends, 'plugin:@next/next/recommended'],
  rules: { ...config.rules, 'no-console': 0 },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended']
    }
  ]
};
