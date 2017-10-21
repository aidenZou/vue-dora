var path = require('path')

function resolve (dir) {
  return path.join(__dirname, './', dir)
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('packages')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('packages')]
      }
    ]
  }
}
