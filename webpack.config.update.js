const path = require('path');
const IS_DEV = process.env.NODE_ENV !== 'production';
const srcPath = path.resolve(process.cwd(), './src');

module.exports = (config) => {
  if (IS_DEV) {
    config.entry = {
      ...config.entry,
      mock: srcPath + '/mock/index.js',
    };
  }
  config.resolve = {
    ...config.resolve,
    alias: {
      components: srcPath + '/components',
      common: srcPath + '/common',
      utils: srcPath + '/utils',
      assert: srcPath + '/assert',
      gameApp: srcPath + '/gameApp',
    }
  };
  return config;
};
