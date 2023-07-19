const configs = require('nullstack/webpack.config')

function withMDX(config) {
  const mdxRule = {
    test: /\.mdx?$/,
    use: [
      {
        loader: '@mdx-js/loader',
        options: {
          jsxRuntime: 'classic',
          pragma: '$runtime.element',
          pragmaFrag: '$runtime.fragment',
          pragmaImportSource: 'nullstack/runtime',
        },
      },
    ],
  }
  config.module.rules.push(mdxRule)
  return config
}

function customConfigs() {
  return configs.map((originalConfig) => {
    return (...args) => {
      return withMDX(originalConfig(...args))
    }
  })
}

module.exports = customConfigs()
