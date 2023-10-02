module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    ignorePatterns: ['.eslintrc.js'],
    parser: '@typescript-eslint/parser',
    rules: {
      // Add any additional rules or overrides here
    },
    env: {
      node: true,
      jest: true,
    },
  };