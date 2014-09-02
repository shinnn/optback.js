# optback.js

[![Build Status](https://travis-ci.org/shinnn/optback.js.svg?branch=master)](https://travis-ci.org/shinnn/optback.js)
[![Build status](https://ci.appveyor.com/api/projects/status/4oob8xymj0m3bg16)](https://ci.appveyor.com/project/ShinnosukeWatanabe/optback-js)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/optback.js.svg)](https://coveralls.io/r/shinnn/optback.js)
[![devDependency Status](https://david-dm.org/shinnn/optback.js/dev-status.svg)](https://david-dm.org/shinnn/optback.js#info=devDependencies)

Extract options and a callback function from arguments

```javascript
optback(['foo', {bar: 'baz'}, function qux() {/* ... */}]);
/*
=> {
      options: {bar: 'baz'},
      callback: [Function: qux]
   }
*/
```

This module is useful to create a function which takes an option object  and a callback function as its arguments, like [Node](http://nodejs.org/)'s [`fs.readFile`](http://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback).

## Installation

### Package managers

### [npm](https://www.npmjs.org/) [![NPM version](https://badge.fury.io/js/optback.svg)](https://www.npmjs.org/package/optback)

```
npm install --save optback
```

### [bower](http://bower.io/) [![Bower version](https://badge.fury.io/bo/optback.svg)](https://github.com/shinnn/optback.js/releases)

```
bower install --save optback
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/optback.js/master/optback.js)

## API

### optback(*args*)

*args*: `Array` or [array-like object](https://www.inkling.com/read/javascript-definitive-guide-david-flanagan-6th/chapter-7/array-like-objects) (e.g. [`arguments`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments))  
Return: `Object`

It returns an object in the form `{options: [Object], callback: [Function]}`:

* `options` is the penultimate element of *args*, or `{}` if that is not an object.
* `callback` is the last element of *args*.

It throws an error when the last element is not a function.

```javascript
(function() {
  var argv = getCallback(arguments);
  argv.options; //=> {some: 'options'}
  argv.callback; //=> [Function: cb]
})('foo', {some: 'options'}, function cb() {/* ... */});
```

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
