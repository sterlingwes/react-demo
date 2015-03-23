module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/build/',
    publicPath: '/build/',
    filename: 'component.js'
  },
  resolve: {
    extensions: ['','.js']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/ }
    ]
  }
};