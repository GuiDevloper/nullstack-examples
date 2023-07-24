const configs = require('nullstack/webpack.config')

function withWASM() {
  return configs.map((configFn) => {
    return (...args) => {
      const config = configFn(...args)
      // needed for Golang
      config.module.rules.push({
        test: /\.wasm$/,
        type: 'asset/resource',
        resourceQuery: /resource/,
      })
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
        util: false,
      }
      // needed for Rust
      config.experiments = {
        ...config.experiments,
        asyncWebAssembly: true,
        syncWebAssembly: true,
      }
      return config
    }
  })
}

module.exports = withWASM()
