/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2022, sourceType: 'module', ecmaFeatures: { jsx: true } },
  env: { browser: true, node: true, es2022: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:security/recommended',
    'plugin:react-hooks/recommended',
    'prettier' // Desactiva reglas que chocan con prettier
  ],
  plugins: ['@typescript-eslint', 'import', 'security'],
  settings: { 'import/resolver': { typescript: true, node: true } },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-eval': 'error',
    'security/detect-object-injection': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/no-explicit-any': 'error',
    'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'], 'newlines-between': 'always', alphabetize: { order: 'asc' } }],
    'import/no-cycle': 'error',
    'max-lines': ['warn', { max: 300, skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': ['warn', { max: 80 }]
  },
  overrides: [
    { files: ['*.config.*', 'compliance/*.mjs', 'core-dsp/*.mjs'], rules: { 'no-console': 'off', 'security/detect-object-injection': 'off' } },
    { files: ['**/*.test.*', '**/*.spec.*'], env: { jest: true, vitest: true }, rules: { 'max-lines': 'off' } }
  ],
  ignorePatterns: ['node_modules', 'dist', 'build', '.next', 'coverage']
};
