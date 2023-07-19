const configs = require('nullstack/webpack.config')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const bundlesTitles = ['server', 'client']
function withBundleAnalyzer(config, id) {
  if (!process.env.ANALYZE) return config

  const title = bundlesTitles[id]
  config.plugins.push(
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
      statsFilename: `${title}.json`,
      reportTitle: title,
      analyzerPort: `888${id}`,
      analyzerHost: 'localhost',
    }),
  )
  return config
}

function customConfigs() {
  return configs.map((originalConfig, id) => {
    return (...args) => {
      return withBundleAnalyzer(originalConfig(...args), id)
    }
  })
}

module.exports = customConfigs()
