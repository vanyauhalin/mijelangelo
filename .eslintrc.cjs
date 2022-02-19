/**
 * @type {import('eslint').Linter.ConfigOverride}
 */
const root = {
  files: './*.cjs',
  env: {
    es2022: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'max-len': ['error', 80, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: true,
    }],
  },
};

/**
 * @type {import('eslint').Linter.ConfigOverride}
 */
const core = {
  files: 'packages/core/src/**/*.ts',
  env: {
    es2022: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    project: 'packages/core/tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    'import/order': ['error', {
      alphabetize: {
        order: 'asc',
      },
    }],
    'import/prefer-default-export': 'off',
    'max-len': ['error', 80, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: true,
    }],
    'no-underscore-dangle': 'off',
    'sort-imports': ['error', {
      ignoreDeclarationSort: true,
    }],
  },
};

/**
 * @type {import('eslint').Linter.ConfigOverride}
 */
const test = {
  files: 'test/**/*.ts',
  env: {
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    project: 'test/tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    'import/order': ['error', {
      alphabetize: {
        order: 'asc',
      },
    }],
    'max-len': ['error', 80, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: false,
      ignoreStrings: false,
      ignoreTemplateLiterals: true,
    }],
    'sort-imports': ['error', {
      ignoreDeclarationSort: true,
    }],
  },
};

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  root: true,
  overrides: [
    root,
    core,
    test,
  ],
};
