module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    router: {
      type: 'confirm',
      message: 'Install vue-router?',
    },
    lint: {
      type: 'confirm',
      message: 'Use ESLint to lint your code?',
    },
    unit: {
      type: 'confirm',
      message: 'Set up unit tests',
    },
    autoInstall: {
      type: 'list',
      message: 'Should we run `npm install` for you after the project has been created? (recommended)',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm',
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn',
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no',
        },
      ],
    },
  },
  filters: {
    '.eslintrc.js': 'lint',
    '.eslintignore': 'lint',
    'config/test.env.js': 'unit',
    'build/webpack.test.conf.js': "unit",
    'test/unit/**/*': 'unit',
    'test/unit/index.js': "unit",
    'test/unit/karma.conf.js': "unit",
    'test/unit/specs/index.js': "unit",
    'src/router/**/*': 'router',
  },
}