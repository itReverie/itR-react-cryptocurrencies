import webpack from 'webpack';
import path from 'path';
import eslintFormatter from 'react-dev-utils/eslintFormatter';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS ={
  'process.env.PORT' : JSON.stringify('5000')
};

const customLoaderOptions = {
  devServer: {
    contentBase: path.resolve(__dirname, './dist')
  },
};

export default {
  devtool: 'source-map', //inline-source-map
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',            // In development there are not real physyical files. This is just to let the browser know it need sot create in memory thise files
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.LoaderOptionsPlugin({options: customLoaderOptions})

  ],
  module: {
    strictExportPresence: true,
    rules: [
      // TODO: Disable require.ensure as it's not a standard language feature.
      // We are waiting for https://github.com/facebookincubator/create-react-app/issues/2176.
      // { parser: { requireEnsure: false } },

      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,

            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: __dirname + '/src/'
      },
      // ** ADDING/UPDATING LOADERS **
      // The "file" loader handles all assets unless explicitly excluded.
      // The `exclude` list *must* be updated with every change to loader extensions.
      // When adding a new loader, you must add its `test`
      // as a new entry in the `exclude` list for "file" loader.

      // "file" loader makes sure those assets get served by WebpackDevServer.
      // When you `import` an asset, you get its (virtual) filename.
      // In production, they would get copied to the `build` folder.
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
          /\.scss$/,
          /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          /\.(woff|woff2)$/,
          /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          /\.svg(\?v=\d+\.\d+\.\d+)?$/
        ],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      // "url" loader works like "file" loader except that it embeds assets
      // smaller than specified limit in bytes as data URLs to avoid requests.
      // A missing `test` is equivalent to a match.
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        include: __dirname + '/src/',
        loader: require.resolve('babel-loader'),
        options: {

          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
        },
      },
      {
        test: /\.s?css$/,
        include: __dirname + '/src/',
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']

      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        include: __dirname + '/node_modules/bootstrap-sass/',
        loader: require.resolve('file-loader')
        //loader: 'file-loader'},
      },
      {
        test: /\.(woff|woff2)$/,
        include: __dirname + '/node_modules/bootstrap-sass/',
        loader: require.resolve('url-loader'),
        options: {
          limit: 5000,
          name: 'static/media/[name].[hash:8].[ext]'
          //?name=__media/[path][name][hash].[ext]
          //prefix: 'font/'
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        include: __dirname + '/node_modules/bootstrap-sass/',
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          mimetype : 'application/octet-stream',
        }
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        include: __dirname + '/node_modules/bootstrap-sass/',
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          mimetype : 'application/octet-stream',
        }
      },
    ],
  },
};
