/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    branches: ["master"],
    plugins: [
        '@semantic-release/commit-analyzer', // It will increment the version for us. Determine the type of release by analyzing commits
        //: This plugin analyzes the commit messages and determines the type of release (major, minor, or patch) based on conventional commit message format.
        '@semantic-release/release-notes-generator',// Generate release notes for the commits added 
        //It generates release notes based on the commits added to your repository, which can be useful for creating changelogs.
        '@semantic-release/github', // it creates the release itself, also creates the tag with the correct verion for us 
        //: This plugin handles the creation of releases on GitHub, including tagging with the correct version.

        '@semantic-release/npm'
    ]
  };