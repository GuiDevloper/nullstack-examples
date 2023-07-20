const [server, client] = require('nullstack/webpack.config')

function customClient(...args) {
  const config = client(...args)
  const cssRule = config.module.rules.find((rule) => {
    return rule.test && rule.test.test('.css')
  })
  cssRule.use.push({
    loader: require.resolve('postcss-loader'),
    options: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
        },
      },
    },
  })
  return config
}

module.exports = [server, customClient]
