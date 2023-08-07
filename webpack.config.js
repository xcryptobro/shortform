const path = require('path')

let config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        p5Vendor: {
          test: /[\\/]node_modules[\\/](p5)[\\/]/,
          name: 'vendor-p5',
          chunks: 'all'
        }
      }
    }
  }
}

module.exports = (_env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map'
    config.mode = 'development'
  }

  if (argv.mode === 'production') {
    config.mode = 'production'
  }

  return config
}
