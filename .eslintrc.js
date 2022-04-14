module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  plugins: ['react', '@typescript-eslint', 'tailwindcss'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    'react/prop-types': ['off'],
    'react/display-name': ['off'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unescaped-entities': ['off'],
    'no-restricted-syntax': 1,
    'no-use-before-define': 0,
    'no-param-reassign': 1,
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': 2,
    curly: 'error',
    'max-len': [1, 120],
    'no-useless-escape': 1,
    'func-names': 0,
    'function-paren-newline': ['error', 'consistent'],
    'prefer-spread': 1,
    'space-before-function-paren': 0,
    'react/no-multi-comp': 1,
    'no-else-return': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    strict: 'error',
    'no-underscore-dangle': 'off',
    'symbol-description': 'error',
    'no-shadow': 'off',
    'no-multiple-empty-lines': 2,
    '@typescript-eslint/no-shadow': ['error'],
    yoda: ['error', 'never', { exceptRange: true }]
  }
};