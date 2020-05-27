module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    // '^.+\\.wasm$': '<rootDir>/wasm-transformer.js',
  },
  // transformIgnorePatterns: ['/node_modules/(?!zokrates-js)'],
    transformIgnorePatterns: ['/node_modules/(?!zokrates-js)'],
}
