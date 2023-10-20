/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    branches: ["master"],
    plugins: [
        // It will increment the version. This plugin analyzes the commit messages and determines the type of release (major, minor, or patch) based on conventional commit message format.
        '@semantic-release/commit-analyzer', 
        // It generates release notes based on the commits added to your repository, which can be useful for creating changelogs.
        '@semantic-release/release-notes-generator',
        // This plugin handles the creation of releases on GitHub, including tagging with the correct version.
        '@semantic-release/github',
        // This plugin is responsible for releasing new versions of the package on the npm registry. 
        "@semantic-release/npm",
        {
            "pkgRoot": "dist"
        },
        // This plugin is responsible for updating the package.json file with the new version. It is also configured to commit the updated package.json file during the release process.
        "@semantic-release/git",
        {
          "assets": ["package.json"]
        }
    ]
  };