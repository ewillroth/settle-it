module.exports = {
	roots: ['./src'],
	setupFilesAfterEnv: ['./jest.setup.ts'],
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	testPathIgnorePatterns: ['node_modules/'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testMatch: ['**/*.test.(ts|tsx)'],
	coveragePathIgnorePatterns: ['testUtils.tsx', 'themes/base/base.ts'],
	moduleNameMapper: {
		// Mocks out all these file formats when tests are run
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$':
			'identity-obj-proxy',
	},
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: -10,
		},
	},
};
