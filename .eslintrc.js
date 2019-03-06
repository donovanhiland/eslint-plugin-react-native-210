const ERROR = "error";
const WARN = "warn";
const OFF = "off";

module.exports = {
  parser: "@typescript-eslint/parser",

  plugins: ["react-native"],

  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },

  settings: {
    react: {
      version: "detect"
    }
  },

  rules: {
    "react-native/no-raw-text": ERROR
  }
};
