const map = require('../')

const origin = {
  foo: 123,
  bar: 456,
  baz: 'lol'
}

test('map from an array', () => {
  const result = map(origin, ['foo', 'bar'])
  expect(result).toEqual({
    foo: 123,
    bar: 456
  })
})

test('map from an object for setting different key names', () => {
  const result = map(origin, {
    foo2: 'foo',
    baz2: 'baz'
  })
  expect(result).toEqual({
    foo2: 123,
    baz2: 'lol'
  })
})

test('handler function', () => {
  const result = map(origin, ['foo'], val => val + 1)
  expect(result).toEqual({
    foo: 124
  })
})
