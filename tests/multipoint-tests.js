var test = require('tape')
var curved = require('../index')

test('Multipoint path', function multipointTest(t) {
  t.equal(
    curved(0, 0, 100, 100, 300, 50, 500, 200),
    'M 0 0 C 50 0 50 100 100 100 C 200 100 200 50 300 50 C 400 50 400 200 500 200',
    'Generates correct path string.'
  )
  t.end()
})
