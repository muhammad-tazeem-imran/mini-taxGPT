module.exports = {
  extends: ['next', 'plugin:storybook/recommended', 'eslint:recommended', 'next/core-web-vitals', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-expressions': ['error', { 'allowShortCircuit': true }],
    'quote-props': 0,
    'radix': 0,
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'default-case': 0,
    'quotes': [0, 'single', { 'avoidEscape': true }],
  },
  env: {
    browser: true,
    es6: true
  },
}
