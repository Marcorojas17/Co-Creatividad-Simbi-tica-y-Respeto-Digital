module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'compliance', 'seal', 'frequency', 'dsp']],
    'subject-case': [0],
    'header-max-length': [2, 'always', 120]
  }
};
