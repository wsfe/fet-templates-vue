module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 配置额外的rule
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'featfix',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'merge'
      ]
    ],
    'subject-case': [0]
  }
}
