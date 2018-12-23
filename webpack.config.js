module.exports = {
  mode: 'development',
  entry: {
    common: './src/index.js',
    top: './src/top/index.js',
    datalist: './src/datalist/index.js',
    submit: './src/submit/index.js',
    edit: './src/edit/index.js'
  },
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: './public/js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  }
};