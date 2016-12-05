module.exports = {

  entry: {
    app: './app/CarDetail.js'
  },
  output: {
    filename: './public/js/bundle.js',
    sourceMapFilename: './public/js/bundle.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test:/\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}