'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/assets/js/app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/assets/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    
  }
};
