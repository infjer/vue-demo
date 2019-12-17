module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    '@babel/preset-env'
  ],
  plugins: [
    'lodash',
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': '~src/style/theme'
      }
    ],
    '@babel/proposal-optional-chaining',
    '@babel/proposal-nullish-coalescing-operator'
  ]
}
