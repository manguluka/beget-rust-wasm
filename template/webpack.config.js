module.exports = {
  entry: [
   'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
  './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
  },
  devServer: {
    contentBase: './build',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.rs$/,
        use: {
          loader: 'wargo-loader',
          options: {
            // The path to the webpack output relative to the project root
            path: './'
          }
        }
      }
    ]
  },
  // The .wasm 'glue' code generated by Emscripten requires these node builtins,
  // but won't actually use them in a web environment. We tell Webpack to not resolve those
  // require statements since we know we won't need them.
  externals: {
    'fs': true,
    'path': true,
  }
}