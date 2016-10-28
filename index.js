'use strict'

const isType = (obj, type) => {
  return `[object ${type}]` === Object.prototype.toString.call(obj)
}

module.exports = function (source, selection, handler = val => val) {
  if (typeof source !== 'object') {
    throw new TypeError('Expected source to be an object')
  }

  if (isType(selection, 'Array')) {
    return selection.reduce((current, next) => {
      current[next] = handler(source[next])
      return current
    }, {})
  }

  if (isType(selection, 'Object')) {
    return Object.keys(selection).reduce((current, next) => {
      current[next] = handler(source[selection[next]])
      return current
    }, {})
  }

  return source
}
