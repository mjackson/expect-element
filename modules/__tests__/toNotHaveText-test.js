/*eslint-env mocha */
import expect from 'expect'
import expectDOM from '../index'

describe('toNotHaveText', function () {
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
      expect('string').toNotHaveText('')
    }).toThrow('must be a DOM node')
  })

  it('throws when an element has the given text', function () {
    expect(function () {
      expect(node).toNotHaveText('hello world')
    }).toThrow("to not have 'hello world' text")
  })

  it('does not throw when an element does not have the given text', function () {
    expect(function () {
      expect(node).toNotHaveText('goodbye world')
    }).toNotThrow()
  })
})
