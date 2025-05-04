module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "universe/native",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "import", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
      node: true,
    },
  },
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
  },
  env: {
    node: true,
    "react-native/react-native": true,
  },
  ignorePatterns: [
    ".expo/",
    "node_modules/",
    "dist/",
    "web-build/",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js",
    ".eslintrc.js",
  ],
};
