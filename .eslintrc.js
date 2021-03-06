module.exports = {
  env: {
    browser: true,
    commonjs: true, 
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'react-app', // eslint-config-react-app
    'react-app/jest', // yeslint-config-react-app
    'eslint:recommended', // eslint-plugin-react
    'plugin:react/recommended', // eslint-plugin-react
    'plugin:jsx-a11y/recommended', // eslint-plugin-jsx-a11y
    'plugin:react-hooks/recommended', // eslint-plugin-react-hooks
    'plugin:jest/recommended', // eslint-plugin-jest
    'plugin:testing-library/react', // eslint-plugin-testing-library
    'plugin:import/recommended', // eslint-plugin-import
  ],
  parser: 'babel-eslint', // Uses babel-eslint transforms.
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    'import',
  ],
  root: true, // For configuration cascading.
  rules: {
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreComments: true,
        ignoreStrings: true,
      },
    ],
    indent: ['error', 2, { 'SwitchCase': 1 }],
    quotes: ['warn', 'single'], 
    semi: ['warn', 'never'],
    'comma-dangle': ['warn', 'always-multiline' ],
    'comma-spacing': ['warn', { 'before': false, 'after': true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 1 }],
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-vars': 'warn',
    'operator-linebreak': ['warn', 'before'],
    'arrow-parens': ['warn', 'as-needed'],
    'no-underscore-dangle': 'off',
    'spaced-comment': 'warn',
    'eol-last': ['warn', 'always'],
    'key-spacing': ['error', { 
      'beforeColon': false,
      'afterColon': true, 
    }],
    'object-curly-spacing': ['warn', 'always', { objectsInObjects: false }],
    'space-before-blocks': ['warn', 'always'],
    'prefer-destructuring': [
      'warn',
      {
        array: true,
        object: true,
      },
      { enforceForRenamedProperties: false },
    ],
    'object-curly-newline': ['warn', { multiline: true }],
    'object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],
    'array-element-newline': ['warn', 'consistent'],
    'array-bracket-newline': ['warn', 'consistent'],
    'no-alert': 'warn',
    'brace-style': ['warn', '1tbs'],
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'index',
          'sibling',
          'parent',
          'internal',
        ],
      },
    ],
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-spacing': ['warn', { before: true, after: true }],
  },
  settings: { 
    react: { version: 'detect' },
    'import/resolver': { node: { extensions: ['.js', '.jsx'] }},
  },
}
