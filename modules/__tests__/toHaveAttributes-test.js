/*eslint-env mocha */
import expect from 'expect'
import expectDOM from '../index'

describe('toHaveAttributes', function () {
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
      expect('string').toHaveAttributes({})
    }).toThrow('must be a DOM node')
  })

  it('does not throw when an element has the given attributes', function () {
    expect(function () {
      expect(node).toHaveAttributes({
        id: 'the-id',
        'class': 'the-class'
      })
    }).toNotThrow()
  })

  it('throws when an element does not have the given attributes', function () {
    expect(function () {
      expect(node).toHaveAttributes({
        id: 'not-the-id',
        'class': 'not-the-class'
      })
    }).toThrow()
  })
})
