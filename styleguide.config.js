module.exports = {
  // components: 'src/components/**/*.{js,jsx}',
  // getExampleFilename(componentPath) {
  //   return componentPath.replace(/\.react.js?$/, '.examples.md')
  // },
  skipComponentsWithoutExample: true,
  styleguideDir: './example/public/documentation',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/Introduction.md'
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'Button',
          components: 'src/components/Button/*.{js,jsx}'
        }
      ]
    }
  ]
}
