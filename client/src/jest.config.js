module.exports = {
    transform: {
        '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    testEnvironment: 'jsdom',
};