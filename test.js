'use strict';
var test = require('tape');
var enginesEnforcer = require('./');

test('enforces', function enforces(t) {
  t.plan(2);
  t.doesNotThrow(function enforce() {
    enginesEnforcer('./package.json');
  });
  t.throws(function enforce() {
    enginesEnforcer('./bad-package.json');
  });
});
