var test = require('tape');
var curved = require('../index');

test('Basic path', function basicTest(t) {
  t.equal(
    curved(0, 0, 100, 100),
    'M 0 0 C 50 0 50 100 100 100',
    'Generates correct path string.'
  );
  t.end();
});
