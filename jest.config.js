module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@react-native-community|@react-native-async-storage))',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
