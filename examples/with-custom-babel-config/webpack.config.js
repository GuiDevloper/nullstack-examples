const withBabel = require('nullstack-adapt-babel')
const configs = require('nullstack/webpack.config')

module.exports = withBabel(configs, {
  babel: {
    plugins: [
      '@babel/plugin-proposal-do-expressions',
      '@babel/plugin-proposal-throw-expressions',
    ],
  },
})
