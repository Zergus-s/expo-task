/** @type {import('jest').Config} */
const config = {
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  preset: "react-native",
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo(nent)?|@expo(nent)?/.*|@unimodules|unimodules|sentry-expo|native-base|@expo-google-fonts/.*|react-redux)",
  ],
  moduleNameMapper: {
    "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    "^@app/(.*)$": "<rootDir>/src/app/$1",
    "^@entities/(.*)$": "<rootDir>/src/entities/$1",
    "^@features/(.*)$": "<rootDir>/src/features/$1",
    "^@config/(.*)$": "<rootDir>/src/config/$1",
    "^@widgets/(.*)$": "<rootDir>/src/widgets/$1",
    "^@testing$": "<rootDir>/src/testing",
    "^@testing/(.*)$": "<rootDir>/src/testing/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^expo-image$": "<rootDir>/__mocks__/expo-image.js",
    "^@expo/vector-icons$": "<rootDir>/__mocks__/@expo/vector-icons.js",
  },
};

module.exports = config;
