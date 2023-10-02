/* eslint-env node */
const Configuration = {
    /*
     * Resolve and load @commitlint/config-conventional from node_modules.
     * Referenced packages must be installed
     */
    extends: ['@commitlint/config-conventional'],
    /*
     * Any rules defined here will override rules from @commitlint/config-conventional
     */
    rules: {
      'subject-case': [0],
      'body-max-line-length': [2, 'always', Infinity],
    },
  };
  
  module.exports = Configuration;