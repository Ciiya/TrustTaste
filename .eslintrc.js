module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'import',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  env: {
    'react-native/react-native': true,
    es6: true,
    node: true,
  },
  rules: {
    // Errores de consola y debugger
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',

    // Prettier como fuente de estilo
    'prettier/prettier': 'error',

    // Buenas prácticas
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'off',

    // Opcional: ordenar imports
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
      },
    ],

    'react/prop-types': 'off', // innecesario con TypeScript
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
