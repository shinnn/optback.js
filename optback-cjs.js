/*!
 * get-callback | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/get-callback.js
*/

'use strict';

var getCallback = require('get-callback');

module.exports = function optback(args) {
  var maybeCallback = getCallback(args);

  var maybeOptions = args[args.length - 2];
  if (!maybeOptions || typeof maybeOptions !== 'object') {
    maybeOptions = {};
  }

  return {
    options: maybeOptions,
    callback: maybeCallback
  };
};
