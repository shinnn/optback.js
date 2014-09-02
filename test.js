'use strict';

var test = require('tape');

var optback = require('require-main')();

test('optback()', function(t) {
  t.plan(8);

  var cb = require('nop');
  var opts = {some: 'options'};

  t.deepEqual(
    optback(['foo', opts, cb]), {options: opts, callback: cb},
    'should return a callback function and an option object.'
  );

  t.deepEqual(
    optback(['foo', null, cb]), {options: {}, callback: cb},
    'should regard options as `{}` when it is a falsy value.'
  );

  t.deepEqual(
    optback(['foo', 'bar', cb]), {options: {}, callback: cb},
    'should regard options as `{}` when it is a non-object value.'
  );

  t.deepEqual(
    optback([cb]), {options: {}, callback: cb},
    'should regard options as `{}` when optback takes only one argument.'
  );

  (function() {
    t.deepEqual(
      optback(arguments), {options: opts, callback: cb},
      'should handle array-like object.'
    );
  })('foo', opts, cb);

  t.throws(
    optback.bind(null, ['foo']), /The last argument should be a callback function\./,
    'should throw an error when the last element is not a function.'
  );

  t.throws(
    optback.bind(null, []), /More than one argument is required\./,
    'should throw an error when the array has no element.'
  );

  t.throws(
    optback.bind(null), /Cannot read property 'length'/,
    'should throw an error when it doesn\'t take neither array nor array-like object.'
  );

  t.end();
});
