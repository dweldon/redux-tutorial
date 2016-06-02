const path = require('path');

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const config = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  resolve: {
    root: PATHS.app,
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: PATHS.app,
      },
    ],
  },
};

if (TARGET === 'start' || !TARGET) {
  Object.assign(config, {
    devtool: 'eval',
    devServer: {
      contentBase: PATHS.build,
      progress: true,
      stats: 'errors-only',
      historyApiFallback: true,
    },
  });
}

module.exports = config;
