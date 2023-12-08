// eslint-disable-next-line no-undef
module.exports = {
	"roots": [
		"<rootDir>/"
	],
	"testMatch": [
		"<rootDir>__tests__/*.test.ts"
	],
	"transform": {
		"^.+\\.(ts)$": "ts-jest"
	},
	"setupFilesAfterEnv": ["<rootDir>/__tests__/setup.ts"]
};