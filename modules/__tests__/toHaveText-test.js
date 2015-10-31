/*eslint-env mocha */
import expect from 'expect'
import expectDOM from '../index'

describe('toHaveText', function () {
  before(function () {
    expect.extend(expectDOM)
  })

  let node
  beforeEach(function () {
    node = document.createElement('div')
    node.appendChild(
      document.createTextNode('hello world')
    )
  })

  it('throws when the actual value is not a DOM node', function () {
    expect(function () {
      expect('string').toHaveText('')
    }).toThrow('must be a DOM node')
  })

  it('does not throw when an element has the given text', function () {
    expect(function () {
      expect(node).toHaveText('hello world')
    }).toNotThrow()
  })

  it('throws when an element does not have the given text', function () {
    expect(function () {
      expect(node).toHaveText('goodbye world')
    }).toThrow("to have 'goodbye world' text")
  })
})
