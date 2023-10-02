module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  ignorePatterns: ['.eslintrc.js'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    // Add any additional rules or overrides here
  },
};