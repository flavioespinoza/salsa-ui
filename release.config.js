module.exports = {
	branches: ['main'],
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		[
			'@semantic-release/changelog',
			{
				changelogFile: 'CHANGELOG.md'
			}
		],
		[
			'@semantic-release/npm',
			{
				npmPublish: true
			}
		],
		[
			'@semantic-release/git',
			{
				assets: ['CHANGELOG.md', 'package.json'],
				message: 'chore(release): ${nextRelease.version} [skip ci]'
			}
		]
	]
}
