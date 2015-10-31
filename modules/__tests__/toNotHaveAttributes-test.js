/*eslint-env mocha */
import expect from 'expect'
import expectDOM from '../index'

describe('toNotHaveAttributes', function () {
  before(function () {
    expect.extend(expectDOM)
  })

  let node
  beforeEach(function () {
    node = document.createElement('div')
    node.setAttribute('id', 'the-id')
    node.setAttribute('class', 'the-class')
  })

  it('throws when the actual value is not a DOM node', function () {
    expect(function () {
      expect('string').toNotHaveAttributes({})
    }).toThrow('must be a DOM node')
  })

  it('throws when an element has the given attributes', function () {
    expect(function () {
      expect(node).toNotHaveAttributes({
        id: 'the-id',
        'class': 'the-class'
      })
    }).toThrow("to not have a 'id' attribute")
  })

  it('does not throw when an element does not have the given attributes', function () {
    expect(function () {
      expect(node).toNotHaveAttributes({
        id: 'not-the-id',
        'class': 'not-the-class'
      })
    }).toNotThrow()
  })
})
