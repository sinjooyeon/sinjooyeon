module.exports = {
  root:             true,
  extends:          ['./.eslintrc.global.json'],
  'ignorePatterns': ['dist/**/*.js'],
  'overrides':      [
    {
      'files': ['**/*.js'],
      'env':   {
        'browser': true,
        'node':    true,
        'es2021':  true
      },
    }
  ],
  'plugins': [],
  'rules':   {
    'no-template-curly-in-string': 'off'
  },
};
