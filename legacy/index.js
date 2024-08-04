module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  globals: {
    React: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    },
  ],
  rules: {
    'no-console': 'error',
  },
};
