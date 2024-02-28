// @ts-check
/** @type {import('eslint').ESLint.ConfigData} */
const config = {
    env: {
      'react-native/react-native': true,
    },
    extends: [
      'eslint:recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'prettier',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
      'import/ignore': ['react-native-reanimated'],
      react: {
        version: 'detect',
      },
    },
    plugins: ['react-native'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-empty-interface': [
        'error',
        { allowSingleExtends: true },
      ],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { destructuredArrayIgnorePattern: '^_' },
      ],
      'import/no-empty-named-blocks': 'warn',
      'import/no-named-as-default': 'off',
      'import/no-unused-modules': 'warn',
      'import/no-useless-path-segments': 'warn',
      'import/first': 'warn',
      'import/newline-after-import': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-native/no-unused-styles': 'warn',
      'react-native/split-platform-components': 'error',
      'react-native/no-raw-text': 'error',
      'react-native/no-single-element-style-arrays': 'error',
    },
  };
  
  module.exports = config;