module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: __dirname + './dist',
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
  },
  resolve: {
    fallback: '/usr/local/lib/node_modules'
  },
  resolveLoader: {
      fallback: '/usr/local/lib/node_modules'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
      }      
    ]
  }
};
