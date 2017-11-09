"use strict";

const path = require('path');

module.exports = {
    context: path.join(__dirname, 'Scripts'),
    entry: {
        server: './server',
        client: './client'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.[name].js'
    },
    module: {
        loaders: [
          {
              test: /\.jsx?$/,
              include: [
                    path.resolve(__dirname, 'Scripts/components')
              ],
              loader: 'babel-loader'
          }
          // Uncomment this if you want to use your own version of React instead of the version 
          // bundled with ReactJS.NET.
          //{ test: require.resolve('react'), loader: 'expose?React' }
        ],
    },
    resolve: {
        // Allow require('./blah') to require blah.jsx
        extensions: ['.js', '.jsx']
    },
    externals: {
        // Use external version of React (from CDN for client-side, or bundled with ReactJS.NET for server-side)
        // Comment this out if you want to load your own version of React
        react: 'React'
    }
};