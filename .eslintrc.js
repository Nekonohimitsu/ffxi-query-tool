const config = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jsdoc/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: ['@typescript-eslint', 'react', 'jest', 'jsdoc', 'eslint-plugin-tsdoc', 'spellcheck', 'unicorn', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the user of imports
    ecmaFeatures: { 
      jsx:true, // Allows for the parsing of JSX
    },
  },
  settings: {
    "react": {
      "version": "detect"
    },
    'react-hooks/rules-of-hooks': "error",
    'react-hooks/ehaustive-deps': "warn",
    'unicorn/filename-case': ['warn', { case: 'kebabCase'}],
    'react/display-name': 0, // Turning off this requirement, as it only fails during tests with mocked classes.
    'jsdoc/no-undefined-types': 0, //JSDOC doesn't follow Typescript imports at this time.
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/require-description': [1, {contents: ['any']}],
    '@typescript-eslint/no-unused-vars': ['warn', {varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    'jsdoc/check-tag-names': ['error', { definedTags: ['jsx'] }],
    'jsdoc/require-jsdoc': [1, {
      require: {
        ArrowFunctionExpression: true,
        ClassDeclaration: true,
        ClassExpression: true,
        FunctionDeclaration: true,
        FunctionExpression: true,
        MethodDefinition: true,
      },
      contexts: [
        'TSInterfaceDeclaration',
        'TSDeclareFunction',
        'TSMethodSignature',
        'TSPropertySignature',
        'TSTypeAliasDeclaration',
        'TSEnumDeclaration',
        'TSEmptyBodyFunctionExpression',
      ]
    }],
    'spellcheck/spell-checker': [1, {
      comments: true,
      strings: true,
      identifiers: true,
      lang: 'en_US',
      skipWords: [],
      skipIfMatch: [
        'https?://[^s]*', // for URLs
        '#([0-9a-fA-F]{6}|[0-9a-fA-F]{3}', // for css color codes
      ],
      minLength: 3
    }]
  }
};

module.exports = config;