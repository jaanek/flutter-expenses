const path = require('path');
const addHook = require('pirates').addHook;
const babelTransform = require('@babel/core').transformSync;
const babelConfig = require('../babel.config');

global.appRoot = path.normalize(path.join(path.resolve(__dirname), '.'));

// override require with parsing js
// https://www.npmjs.com/package/pirates
const transform = (code) => {
  const js = `${code}`;
  const result = babelTransform(js, babelConfig());
  return result.code;
};

addHook(transform, {exts: ['.js'], function() { return true; }});

// bootstrap
require('./server');
