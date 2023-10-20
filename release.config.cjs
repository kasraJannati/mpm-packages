/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    branches: ["master"],
    plugins: [
        '@semantic-release/commit-analyzer', // It will increment the version for us. Determine the type of release by analyzing commits
        '@semantic-release/release-notes-generator',// Generate release notes for the commits added 
    ]
  };